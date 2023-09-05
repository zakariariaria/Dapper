import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/NavBar.css"; // Import the CSS file with the correct path

const Navbar = () => {
  const navigate = useNavigate();

  function navLogin() {
    navigate("/login");
  }

  function navSignup() {
    navigate("/register");
  }
  return (
    <div id="navbar_home">
      <ul id="list">
        <a href="/about">How it works</a>
        <a href="/about">What we do</a>
        <a href="/about">Contact us</a>
      </ul>

        <a  href="/">Dapper</a>
   

      <ul id="button_list">
        <button onClick={navLogin}>Log In</button>
        <button onClick={navSignup}>Sign Up</button>
      </ul>
    </div>
  );
};

export default Navbar;
