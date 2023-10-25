import React, { useState, useEffect } from "react";
import "../Styles/SelectClothes.css";
import streetWear from "../Images/alexander-andrews-jNKv4QohAk0-unsplash.jpg";
import streetWear2 from "../Images/sportswear.jpg";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const SelectClothes = () => {
  const styles = [
    { name: "Street Wear", images: [streetWear, streetWear] },
    { name: "Cozy Wear", images: [streetWear, streetWear2] },
  ];

  const [activeStyleIndex, setActiveStyleIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeStyleIndex]);

  const nextStyle = () => {
    setActiveStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
  };

  const prevStyle = () => {
    setActiveStyleIndex((prevIndex) => (prevIndex - 1 + styles.length) % styles.length);
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="outer-container">
        <h2 className="select-style-title">Select Your Style</h2>
        <div className="carousel-wrapper">
          <button className="carousel-button prev" onClick={prevStyle}>
            &#60;
          </button>
          <div className="carousel-container">
  {styles[activeStyleIndex].images.map((image, index) => (
    <div
      key={index}
      className={`carousel-items ${index === activeImageIndex ? "active" : ""}`}
    >
      <img src={image} alt={`${styles[activeStyleIndex].name} ${index + 1}`} />
    </div>
  ))}
</div>
          <button className="carousel-button next" onClick={nextStyle}>
            &#62;
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectClothes;
