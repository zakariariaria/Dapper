import React, { useState, useEffect } from "react";
import "../Styles/SelectClothes.css";
import streetWearWomen from "../Images/StreetWearWomen.webp";
import streetWearMen from "../Images/StreetWearMen.jpg";
import CasualMen from "../Images/CasualMen.jpg";
import CasualWomen from "../Images/CasualWomen.jpg";
import ProfessionalMen from "../Images/ProfessionalMen.jpg";
import ProfessionalWomen from "../Images/ProfessionalWomen.jpg";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ProfileCard from "../Components/ProfileCard";

const SelectClothes = () => {
  const styles = [
    { name: "Street Wear", images: [streetWearMen, streetWearWomen] },
    { name: "Casual Wear", images: [CasualMen, CasualWomen] },
    { name: "Professional Wear", images: [ProfessionalMen, ProfessionalWomen] },
  ];

  const sizeOptions = ["Small", "Medium", "Large", "X-Large"];
  const colorOptions = ["Black", "White", "Red", "Blue", "Green"];
  const genderOptions = ["Men", "Women", "Unisex"];

  const [activeStyleIndex, setActiveStyleIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);

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
    setActiveStyleIndex(
      (prevIndex) => (prevIndex - 1 + styles.length) % styles.length
    );
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="outer-container">
        <div className="outer-container-1">
          <h2 className="select-style-title">Select Your Style</h2>
          <div className="carousel-wrapper">
            <button className="carousel-button-prev" onClick={prevStyle}>
              &#60;
            </button>
            <div className="carousel-container">
              {styles[activeStyleIndex].images.map((image, index) => (
                <div
                  key={index}
                  className={`carousel-items ${
                    index === activeImageIndex ? "active" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${styles[activeStyleIndex].name} ${index + 1}`}
                  />
                  <h2 className="select-style-title">{}</h2>
                </div>
              ))}
            </div>
            <button className="carousel-button-next" onClick={nextStyle}>
              &#62;
            </button>
          </div>
          <h2 className="style-name-display">
            {styles[activeStyleIndex].name}
          </h2>
        </div>
        <div className="outer-container-2">
          <Dropdown
            className="my-2 custom-dropdown"
            onToggle={(isOpen) => setIsSizeOpen(isOpen)}
          >
            <Dropdown.Toggle className="dropdown" id="dropdown-size">
              {isSizeOpen ? "Choose Size" : selectedSize || "Choose Size"}
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
              {sizeOptions.map((size, idx) => (
                <Dropdown.Item
                  key={idx}
                  onClick={() => {
                    setSelectedSize(size);
                    setIsSizeOpen(false);
                  }}
                >
                  {size}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Color Dropdown */}
          <Dropdown
            className="my-2 custom-dropdown"
            onToggle={(isOpen) => setIsColorOpen(isOpen)}
            show={isColorOpen}
          >
            <Dropdown.Toggle className="dropdown" id="dropdown-color">
              {isColorOpen ? "Choose Color" : selectedColor || "Choose Color"}
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
              {colorOptions.map((color, idx) => (
                <Dropdown.Item
                  key={idx}
                  onClick={() => {
                    setSelectedColor(color);
                    setIsColorOpen(false);
                  }}
                >
                  {color}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* Gender Dropdown */}
          <Dropdown
            className="my-2 custom-dropdown"
            onToggle={(isOpen) => setIsGenderOpen(isOpen)}
            show={isGenderOpen}
          >
            <Dropdown.Toggle className="dropdown" id="dropdown-gender">
              {isGenderOpen
                ? "Choose Gender"
                : selectedGender || "Choose Gender"}
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
              {genderOptions.map((gender, idx) => (
                <Dropdown.Item
                  key={idx}
                  onClick={() => {
                    setSelectedGender(gender);
                    setIsGenderOpen(false);
                  }}
                >
                  {gender}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <button
            className="carousel-finish-button"
            disabled={!(selectedSize && selectedColor && selectedGender)}
          >
            Continue
          </button>

          
        </div>
      </div>
  
    </>
  );
};

export default SelectClothes;
