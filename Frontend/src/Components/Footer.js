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
            <a style={{ color: "black",textDecoration: "none"}}>2023 Dapper. All rights reserved.</a>
            <a href="#">Home</a>
            <a href="#">Products/Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a style={{ color: "black",textDecoration: "none"}}>Email : contact@example.com</a>
            <a style={{ color: "black",textDecoration: "none"}}>Phone : 123-456-7890</a>
          </footer>
         
          
          
          
          
          
    );
  }
}

export default Footer;
