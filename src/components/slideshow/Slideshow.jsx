import React, { useState, useEffect } from "react";
import "./Slideshow.css";

import benzImg from "../services/images/Benz.png";
import dbsImg from "../services/images/DBS.png";
import gt3rsImg from "../services/images/gt3rsL.png";

const slides = [
  { img: benzImg, title: "Mercedes-Benz AMG", desc: "Multi-stage paint correction & ceramic coating." },
  { img: dbsImg, title: "Aston Martin DBS", desc: "Exotic body gloss & interior leather restoration." },
  { img: gt3rsImg, title: "Porsche 911 GT3 RS", desc: "Track-prep paint protection film & detailing." }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        <img src={slides[currentIndex].img} alt={slides[currentIndex].title} />
        <div className="slide-caption">
          <h3>{slides[currentIndex].title}</h3>
          <p>{slides[currentIndex].desc}</p>
        </div>
      </div>
      <button className="slide-btn prev" onClick={prevSlide}>❮</button>
      <button className="slide-btn next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slideshow;