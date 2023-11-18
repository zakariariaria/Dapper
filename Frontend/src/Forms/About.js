import React from 'react';
import '../Styles/About.css';
import NavBar from '../Components/Navbar.js';

function About() {

    const btn = {
        display: 'block',
        background: '#0e1111',
        color: 'white',
        fontSize: '14px',
        fontWeight: '700',
        border:'2px solid white',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
    }
    
  return (
    <body>
        <NavBar></NavBar>
        <div className="container-xxl border" style={{display: 'flex',flexDirection: 'column',alignItems:'center', marginTop:'2%', colorBackground:'#0e1111',color:'white'}}>
            <h1>Step 1: Sign Up and Personalize</h1>
            <p> Sign up for Dapper and fill out a profile detailing your fashion preferences, sizes, preferred colors, and subscription level. </p>
            <button class="btn btn-outline-primary" style={btn}>Sign Up</button>
        </div>
        <div className="container-xl  pt-3" style={{display: 'flex',flexDirection: 'row',color:'white',justifyContent:'space-between',width:'100%',gap:'5%'}} >
        <div className="container border pt-3" style={{display: 'flex',flexDirection: 'column',alignItems:'center'}}>
            <h1>Step 2: Stylist Curates Outfits</h1>
            <p>Each month, our expert fashion stylists curate outfits tailored to the user's individual style and preferences.</p>
        </div>
        <div className="container border pt-3" style={{display: 'flex',flexDirection: 'column',alignItems:'center'}}>
            <h1>Step 3: Home Delivery</h1>
            <p>These personalized outfits are delivered directly to the user's residence every month, offering the convenience and excitement of new styles right at their doorstep.</p>
        </div>
        </div>
        <div className="container-xl  pt-3" style={{display: 'flex',flexDirection: 'row',color:'white'}} >
        <div className="container-lg border pt-3" style={{display: 'flex',flexDirection: 'column',alignItems:'center'}}>
            <h1>Step 4: Try and Decide</h1>
            <p>Users have the opportunity to try out various outfits. This flexibility allows you to experiment with different styles without the pressure of a permanent purchase.</p>
        </div>
        <div className="container-lg border pt-3" style={{display: 'flex',flexDirection: 'column',alignItems:'center'}}>
            <h1>Step 5: Keep What You Love</h1>
            <p>If you fall in love with an item, you have the option to purchase it. Otherwise, the outfits are picked up by our delivery service the next month.</p>
        </div>
        </div>
    </body>
    
  );
}

export default About;
