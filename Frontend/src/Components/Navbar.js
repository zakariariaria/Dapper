import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Step 1: Import motion
import "../Styles/NavBar.css";
import logoSVG from "../Images/LogoNavb.png";

const Navbar = () => {
  const navigate = useNavigate();
  function logoClick() {
    navigate("/");
  }
  function navLogin() {
    navigate("/login");
  }

  function navSignup() {
    navigate("/register");
  }

  // Step 2: Define the animation variants for the hover effect
  const hoverVariant = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    },
    initial: {
      scale: 1
    }
  };

  return (
    <div id="navbar_home">
   <div className="logo_section">
        {/* Replace "Dapper" with your SVG image */}
        <motion.img
          src={logoSVG}
          alt="Logo"
          initial="initial"
          whileHover="hover"
          style={{width:"60px", cursor:"pointer"}}
          onClick={logoClick}
          
        />
      </div>
      <div className="navlinks_section">
        <motion.a 
          href="/about"
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
        >
          How it works
        </motion.a>
        <motion.a 
          href="/about"
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
        >
          What we do
        </motion.a>
        <motion.a 
          href="/about"
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
        >
          Contact us
        </motion.a>
      </div>
      <div className="buttons_section">
        <button onClick={navLogin}>Log In</button>
        <button onClick={navSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
