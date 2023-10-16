import React from 'react';


function ScrollToTopButton() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button 
          onClick={handleScrollToTop} 
          className="fixed bottom-5 right-5 w-12 h-12 rounded-full bg-blue-600 bg-opacity-80 text-white focus:outline-none shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          ↑
        </button>
    );
}

export default ScrollToTopButton;
