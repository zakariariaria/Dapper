import React from 'react';
import '../Styles/Footer.css'

class Footer extends React.Component {
    render() {
      return (
        <footer>
        <div class="footer-content">
            <div class="footer-section">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products/Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h2>Contact</h2>
                <p>Email : contact@example.com</p>
                <p>Phone : 123-456-7890</p>
                
            </div>
            
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Dapper. All rights reserved.</p>
        </div>
        </footer>
      )
      
    }
  }
  
  export default Footer;


