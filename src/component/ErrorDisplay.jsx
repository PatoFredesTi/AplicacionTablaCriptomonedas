import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorDisplay = ({ error, onRetry, title }) => {
  const { t } = useTranslation();

  const getErrorIcon = () => (
    <svg 
      className="w-16 h-16 text-red-500 mx-auto mb-4" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.598 0L4.216 16.5c-.77.833.192 2.5 1.732 2.5z" 
      />
    </svg>
  );

  const getErrorMessage = (error) => {
    if (error.includes('Failed to fetch') || error.includes('NetworkError')) {
      return t('loading') === 'Loading' 
        ? 'Network connection error. Please check your internet connection.'
        : 'Error de conexión. Por favor verifica tu conexión a internet.';
    }
    if (error.includes('429')) {
      return t('loading') === 'Loading' 
        ? 'Too many requests. Please wait a moment and try again.'
        : 'Demasiadas solicitudes. Por favor espera un momento e intenta de nuevo.';
    }
    return error;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6 p-8">
      <div className="bg-red-50 dark:bg-red-900/20 rounded-full p-6">
        {getErrorIcon()}
      </div>
      <div className="text-center max-w-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title || (t('loading') === 'Loading' ? 'Oops! Something went wrong' : '¡Ups! Algo salió mal')}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {getErrorMessage(error)}
        </p>
        <div className="bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-6">
          <p className="text-sm text-red-700 dark:text-red-400 font-mono">
            {t('error')}: {error}
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onRetry}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          </svg>
          <span>{t('retry')}</span>
        </button>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
            />
          </svg>
          <span>{t('loading') === 'Loading' ? 'Reload Page' : 'Recargar Página'}</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;