import React from "react";
import "../Styles/About.css";
import NavBar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";
import step1 from "../Images/STEP1_1.png";
import step2 from "../Images/STEP2.png";
import step3 from "../Images/STEP3.png";
import delievry from "../Images/delivery.jpg";

import { motion } from "framer-motion";

function About() {
  const btn = {
    display: "block",
    background: "#0e1111",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    border: "1px solid white",
    borderRadius: "2px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  const row = {
    display: "flex",
    flexDirection: "row",
    color: "white",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "500px",
  };

  const boxes = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "600px",
    alignItems: "center",
    height: "300px",
  };

  const step1_3animation = {
    rest: {
      x: 0,
    },
    hover: {
      x: -10,
      transition: {
        type: "tween",
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };

  const step2animation = {
    rest: {
      x: 0,
    },
    hover: {
      x: 10,
      transition: {
        type: "tween",
        duration: 1.0,
        ease: "easeInOut",
      },
    },
  };

  return (
    <body>
      <NavBar></NavBar>
      <div
        className="container "
        id="top-container"
        style={{ marginTop: "1rem" }}
      >
        <div style={row}>
          <div className="container  pt-3" style={boxes}>
            <div className="about-header">
              <h2>
                Step 1:{" "}
                <span className="highlight">Sign Up and Personalize</span>
              </h2>
              <p className="about-instructions">
                Sign up for Dapper and fill out a profile detailing your fashion
                preferences, sizes, preferred colors, and subscription level.
              </p>
              <p className="about-message">
                Fancy something? <strong>Mark your favorites</strong> and the{" "}
                <strong>total price</strong> will be ready for you.
              </p>
            </div>
            <button className="btn btn-outline-primary" style={btn}>
              Sign Up
            </button>
          </div>
          <motion.img
            style={{ width: "512px", height: "512px", borderRadius: "14px" }}
            src={step1}
            variants={step1_3animation}
            initial="rest"
            whileHover="hover"
          />
        </div>
        <div className="container-fixed " style={row}>
          <motion.img
            style={{ width: "512px", height: "512px", borderRadius: "14px" }}
            src={step2}
            variants={step2animation}
            initial="rest"
            whileHover="hover"
          />
          <div className="container  pt-3" style={boxes}>
            <div className="about-header">
              <h2>
                Step 2:{" "}
                <span className="highlight">Stylist Curates Outfits</span>
              </h2>
              <p className="about-instructions">
                Each month, our expert fashion stylists curate outfits tailored
                to the user's individual style and preferences.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fixed  pt-3" style={row}>
          <div className="container  pt-3" style={boxes}>
            <div className="about-header">
              <h2>
                Step 3: <span className="highlight">Home Delivery</span>
              </h2>
              <p className="about-instructions">
                These personalized outfits are delivered directly to the user's
                residence every month, offering the convenience and excitement
                of new styles right at their doorstep.
              </p>
            </div>
          </div>

          <motion.img
            style={{ width: "512px", height: "512px", borderRadius: "14px" }}
            src={step3}
            variants={step1_3animation}
            initial="rest"
            whileHover="hover"
          />
        </div>
      </div>
      <Footer></Footer>
    </body>
  );
}

export default About;
