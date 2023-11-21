import React from "react";
import "../Styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
        <footer style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          padding: "5rem"
          }}>
            <a style={{ color: "white",textDecoration: "none"}}>2023 Dapper. All rights reserved.</a>
            <a style={{ color: "white",textDecoration: "none", cursor:"pointer"}} href="#">Home</a>
            <a  style={{ color: "white",textDecoration: "none", cursor:"pointer"}} href="#">Products/Services</a>
            <a  style={{ color: "white",textDecoration: "none", cursor:"pointer"}} href="/about">About</a>
            <a  style={{ color: "white",textDecoration: "none", cursor:"pointer"}} href="/about">Contact</a>
            <a style={{ color: "white",textDecoration: "none"}}>support@dapper.com</a>
          </footer>
         
          
          
          
          
          
    );
  }
}

export default Footer;
