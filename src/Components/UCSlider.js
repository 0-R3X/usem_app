import React, { useState } from 'react';

const UCSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  const slideText = [
    "माता के लिए 'जागरण' - 21 अक्टूबर, 2024 को उत्तराखंड सांस्कृतिक एकता मंच द्वारा एक विशेष जागरण कार्यक्रम का आयोजन किया जा रहा है।",
    "दशहरा का पर्व 12 अक्टूबर, 2024 को मनाया जाएगा। यह पर्व बुराई पर अच्छाई की जीत का प्रतीक है।",
    "दिवाली का पर्व प्रकाश का पर्व है। इस दिन भगवान राम चौदह वर्ष का वनवास काटकर अयोध्या लौटे थे।",
    "मकर संक्रांति - 14 जनवरी, 2024 को मकर संक्रांति का पर्व मनाया जाएगा।"
  ];

  const slideHeading = [
    "जागरण - 21 अक्टूबर, 2024",
    "दशहरा का पर्व (12 अक्टूबर, 2024)",
    "दिवाली (31 अक्टूबर, 2024)",
    "मकर संक्रांति (14 जनवरी, 2024)",
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  const sliderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #4CAF50 0%, #81C784 100%)',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    height: '60vh',
  };

  const textContainerStyle = {
    maxWidth: '500px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    color: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: '10px', // Position to the left
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '10px', // Position to the right
  };

  return (
    <div className="slider-container" style={{ position: 'relative' }}>
      <div style={sliderStyle}>
        <div style={textContainerStyle}>
          <h1 className='pb-3 fw-bold'>अपडेट्स</h1>
          <h3>{slideHeading[currentSlide - 1]}</h3>
          <p>{slideText[currentSlide - 1]}</p>
        </div>
      </div>

      <button style={prevButtonStyle} onClick={handlePrev}>&lt;</button>
      <button style={nextButtonStyle} onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default UCSlider;
