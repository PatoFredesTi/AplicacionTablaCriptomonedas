

const toggleLabelLight = "bg-gray-500";
const toggleLabelDark = "bg-gray-700";

export const toggleLabelStyles = (theme) => {
    return theme === 'light' ? toggleLabelLight : toggleLabelDark;
}