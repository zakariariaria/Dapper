import React, { useState, useEffect } from "react";
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
    console.log(active);
  }, []);

  function navSettings() {
    navigate("/account-settings"); // Navigate to the settings page
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
  console.log(showDropdown);

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
      </div>
      <div style={{alignSelf:'flex-end',marginRight:'6rem',justifyContent: 'center' }}>
      <motion.div
          variants={hoverVariant}
          initial="initial"
          whileHover="hover"
          style={{ display: "flex", alignItems: "center", cursor: "pointer"}}
        >
          {activeUser ? (
            <div
              className="parent-hover"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                flexDirection:'row',
                
              }}
            >
              <span
                style={{
                  fontFamily:
                    '"Source Sans Pro", "Trebuchet MS", Helvetica, sans-serif',
                }}
              >
                Hello {activeUser.firstName}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-down-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
                />
              </svg>
              {showDropdown && (
                <div
                  className="dropdown-menu"
                  style={{
                    display: showDropdown ? "flex" : "none",
                    flexDirection:'column',
                    marginTop: "7rem",
                    backgroundColor: "#1a1a19",
                    alignItems:'center',
                  }}
                >
                  <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:'0.5rem'}}>
                  <svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>
                  <a
                    onClick={navSettings}
                    onMouseEnter={() => setShowDropdown(true)}
                    className="dropdown-item"
                    style={{ color: "white", backgroundColor: "#1a1a19" }}
                  >
                    Settings
                  </a>
                  </div>
                  <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:'0.5rem'}}>
                  <svg style={{color:'white'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                  <a
                    onClick={handleLogout}
                    onMouseEnter={() => setShowDropdown(true)}
                    className="dropdown-item"
                    style={{ color: "white", backgroundColor: "#1a1a19" }}
                  >
                    Log Out
                  </a>
                  </div>

                  
                </div>
              )}
            </div>
          ) : (
            <motion.div onClick={navLogin}>
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
      {}
    </div>
  );
};

export default Navbar;
