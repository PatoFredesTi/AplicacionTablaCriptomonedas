import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ style = "toggle" }) => {
  const { t } = useTranslation();
  const { isDarkMode, isSystemTheme, setTheme, getCurrentTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const SunIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const MoonIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );

  const SystemIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const themes = [
    { 
      key: 'light', 
      icon: <SunIcon />, 
      label: t('loading') === 'Loading' ? 'Light' : 'Claro',
      description: t('loading') === 'Loading' ? 'Light theme' : 'Tema claro'
    },
    { 
      key: 'dark', 
      icon: <MoonIcon />, 
      label: t('loading') === 'Loading' ? 'Dark' : 'Oscuro',
      description: t('loading') === 'Loading' ? 'Dark theme' : 'Tema oscuro'
    },
    { 
      key: 'system', 
      icon: <SystemIcon />, 
      label: t('loading') === 'Loading' ? 'System' : 'Sistema',
      description: t('loading') === 'Loading' ? 'Follow system preference' : 'Seguir preferencia del sistema'
    }
  ];

  const currentTheme = getCurrentTheme();

  if (style === "simple") {
    return (
      <button
        onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        title={t('Cambiar Tema')}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        title={t('Cambiar Tema')}
      >
        {themes.find(theme => theme.key === currentTheme)?.icon}
        <span className="hidden sm:block text-sm font-medium">
          {themes.find(theme => theme.key === currentTheme)?.label}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
          <div className="py-1">
            {themes.map((theme) => (
              <button
                key={theme.key}
                onClick={() => {
                  setTheme(theme.key);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  currentTheme === theme.key 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <div className="mr-3">
                  {theme.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{theme.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {theme.description}
                  </div>
                </div>
                {currentTheme === theme.key && (
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {isSystemTheme ? (
                t('loading') === 'Loading' 
                  ? 'Following system preference' 
                  : 'Siguiendo preferencia del sistema'
              ) : (
                t('loading') === 'Loading' 
                  ? 'Manual theme selection' 
                  : 'Selección manual de tema'
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;