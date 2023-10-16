const tdLight = "px-6 py-4 border-b border-gray-300 hover:bg-gray-200";
const tdDark = "px-6 py-4 border-b border-gray-300 hover:bg-gray-600";

export const tdStyles = (theme) => {
    return theme === 'light' ? tdLight : tdDark;
  }


