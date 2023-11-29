import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Step 1: Import motion
import "../Styles/NavBar.css";
import gif from "../animation/dapper_logo2.gif"; // Import the video file

const Navbar = () => {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const users = JSON.parse(sessionStorage.getItem("tempUsers")) || [];
    const active = users.find((user) => user.isActive);
    setActiveUser(active);
    console.log(active)
  }, []);

  function navSettings() {
    navigate("/settings"); // Navigate to the settings page
  }

  function handleLogout() {
    // Logic to handle logout, like setting isActive to false for all users
    const users = JSON.parse(sessionStorage.getItem("tempUsers")) || [];
    users.forEach((user) => (user.isActive = false));
    sessionStorage.setItem("tempUsers", JSON.stringify(users));
    setActiveUser(null);
    navigate("/login"); // Redirect to login page after logout
  }

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
      <div className="logo_section">
        <img
          src={gif}
          alt="Logo"
          className="logo-image"
          style={{
            width: "95px",
            height: "auto",
            paddingLeft: "0.5rem",
            cursor: "pointer",
          }}
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

        <motion.div
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
          onClick={navLogin}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          {activeUser ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span onClick={() => setShowDropdown(!showDropdown)}>
                Hello {activeUser.firstName}
              </span>
              {showDropdown && (
                <div className="dropdown-menu">
                  <a onClick={navSettings}>Settings</a>
                  <a onClick={handleLogout}>Log Out</a>
                </div>
              )}
            </div>
          ) : (
            <motion.div>
              {
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
              }
            </motion.div>
          )}
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
