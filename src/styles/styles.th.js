

const thLight = "p-2 text-left bg-gray-100 border border-gray-300 cursor-pointer";
const thDark = "p-2 text-left bg-gray-800 border border-gray-300 cursor-pointer";

export const thStyles = (theme) => {
  return theme === 'light' ? thLight : thDark;
}