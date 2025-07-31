import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('crypto-table-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isSystemTheme, setIsSystemTheme] = useState(() => {
    return !localStorage.getItem('crypto-table-theme');
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      if (isSystemTheme) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isSystemTheme]);

  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    
    if (!isSystemTheme) {
      localStorage.setItem('crypto-table-theme', isDarkMode ? 'dark' : 'light');
    }
    
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDarkMode ? '#1f2937' : '#ffffff');
    }
  }, [isDarkMode, isSystemTheme]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
    setIsSystemTheme(false);
  };

  const setTheme = (theme) => {
    if (theme === 'system') {
      setIsSystemTheme(true);
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      localStorage.removeItem('crypto-table-theme');
    } else {
      setIsSystemTheme(false);
      setIsDarkMode(theme === 'dark');
    }
  };

  const getCurrentTheme = () => {
    if (isSystemTheme) return 'system';
    return isDarkMode ? 'dark' : 'light';
  };

  const value = {
    isDarkMode,
    isSystemTheme,
    toggleTheme,
    setTheme,
    getCurrentTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};