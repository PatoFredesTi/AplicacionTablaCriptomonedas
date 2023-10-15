

const thLight = "p-2 text-left bg-gray-100 border border-gray-300";
const thDark = "p-2 text-left bg-gray-900 text-white border border-gray-600";

export const thStyles = (theme) => {
  return theme === 'light' ? thLight : thDark;
}