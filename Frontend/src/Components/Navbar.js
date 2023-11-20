import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Step 1: Import motion
import "../Styles/NavBar.css";
import logoSVG from "../Images/LogoNavb.png";
import videoMP4 from "../animation/logo-black-unscreen.gif"; // Import the video file


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
      color: "white",
      transition: {
        duration: 0.3,
      },
    },
    initial: {
      color: "#c5c2c2",
    },
  };

  return (
    <div id="navbar_home">
      <div className="navlinks_section">
      {/* <div className="logo_section">
      <img src={videoMP4} alt="Logo" className="logo-image" />
</div> */}

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
        <motion.div
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
          onClick={navLogin}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          </svg>
        </motion.div>
      </div>
      {/* <div className="buttons_section">
        <button onClick={navLogin}>Log In</button>
        <button onClick={navSignup}>Sign Up</button>
      </div> */}
    </div>
  );
};

export default Navbar;
