import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Login.css'
import  { useState } from 'react';
import Navbar from "../Components/Navbar";





function Login() {


    const navigate = useNavigate();

    function handleClick(){
        navigate("/register")
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validate email format
        if (!validateEmail(email)) {
            console.log('Invalid email format');
            return;
        }
    
        // Retrieve existing users
        const existingUsers = JSON.parse(sessionStorage.getItem('tempUsers')) || [];
    
        // Check if the user exists
        const userIndex = existingUsers.findIndex(user => user.email === email && user.password === password);
        
        if (userIndex !== -1) {
            console.log('Email:', email, 'Password:', password);
    
            // Check if it's the user's first time logging in
            if (existingUsers[userIndex].firstTime) {
                existingUsers[userIndex].firstTime = false; // Update firstTime flag
                existingUsers[userIndex].isActive = true;
                sessionStorage.setItem('tempUsers', JSON.stringify(existingUsers)); // Save updated users array
                navigate("/plan-selection"); // Navigate to plan selection
            } else {
                existingUsers[userIndex].isActive = true;
                sessionStorage.setItem('tempUsers', JSON.stringify(existingUsers)); // Save updated users array
                navigate("/"); // Navigate to home page
            }
            

        } else {
            console.log('Invalid email or password');
        }
    };
    

   
    return (
        <div className="loginPage-container">
        <Navbar></Navbar>
        <div className="loginPage-container-form">
       

        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="login-button" type="submit">Login</button>
                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
            <div className="signup-section">
                Don't have an account? <a onClick={handleClick}>Sign up</a>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Login