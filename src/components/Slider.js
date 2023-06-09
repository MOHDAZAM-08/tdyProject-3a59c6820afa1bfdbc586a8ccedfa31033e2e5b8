import React, { useState, useEffect } from 'react';
import '../App.css';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const showSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          onClick={() => showSlide(index)}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} className="img" />
          <div className="slide-text">{slide.text}</div>
          <div className="smalltext">{slide.location}</div>
          <div className="under"></div>
        </div>
      ))}

      <span className="slider-btn prev-btn" onClick={goToPrevSlide}>
        &#10094;
      </span>
      <span className="slider-btn next-btn" onClick={goToNextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Slider;





