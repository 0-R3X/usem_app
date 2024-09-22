import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-success"
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            fontSize: '24px',
            padding: '10px 20px',
            borderRadius: '50%',
            zIndex: '1000',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
        >
          ⬆️
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
