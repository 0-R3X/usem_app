// src/Components/AllPhotos/ScrollToTopButton.js
import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const style = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    backgroundColor: "#198754", // Bootstrap success green
    color: "white",
    border: "none", 
    outline: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    fontSize: "26px",
    display: visible ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <button style={style} onClick={scrollToTop}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;
