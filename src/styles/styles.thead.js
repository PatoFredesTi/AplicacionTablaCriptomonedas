

const theadLight = "px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider";
const theadDark = "px-6 py-3 border-b-2 border-gray-300 text-left leading-4 tracking-wider";

export const theadStyles = (theme) => {
    return theme === 'light' ? theadLight : theadDark;
}