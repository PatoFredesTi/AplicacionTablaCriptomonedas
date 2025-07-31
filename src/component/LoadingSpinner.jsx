import React from 'react';
import { useTranslation } from 'react-i18next';

const SpinnerIcon = ({ size = "w-8 h-8" }) => (
  <div className={`${size} animate-spin`}>
    <svg 
      className="w-full h-full text-blue-500" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
);

const LoadingDots = () => (
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
  </div>
);

const TableSkeleton = () => (
  <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <table className="w-full table-auto">
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          {['Rank', 'Name', 'Price', '24h Change', 'Market Cap'].map((header, index) => (
            <th key={index} className="px-6 py-3 text-left">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
        {[...Array(10)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            <td className="px-6 py-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </td>
            <td className="px-6 py-4">
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </td>
            <td className="px-6 py-4">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const LoadingSpinner = ({ type = "spinner", message, showSkeleton = false }) => {
  const { t } = useTranslation();
  const loadingMessage = message || t('loading');

  if (showSkeleton) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="h-8 w-64 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
        </div>
        <TableSkeleton />
      </div>
    );
  }

  const renderSpinner = () => {
    switch (type) {
      case 'dots':
        return <LoadingDots />;
      case 'pulse':
        return (
          <div className="w-12 h-12 bg-blue-500 rounded-full animate-pulse"></div>
        );
      case 'bounce':
        return (
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        );
      case 'spinner':
      default:
        return <SpinnerIcon size="w-12 h-12" />;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[400px] space-y-4">
      {renderSpinner()}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          {loadingMessage}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {t('loading') === 'Loading' ? 'Fetching latest crypto data...' : 'Obteniendo datos de criptomonedas...'}
        </p>
      </div>
      <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;