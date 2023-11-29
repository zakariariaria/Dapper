import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../Styles/Signup.css'
import Navbar from "../Components/Navbar";




function Signup() {

    const navigate = useNavigate();
    function navLogin(){
        navigate("/login")
    }

    function navPlanSelection(){
        navigate("/plan-selection")
    }
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const handleConfirmPasswordChange = (e) => {
        // Whenever the confirm password input is changed, clear the error message
        setErrorMessage('');
        setConfirmPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailErrorMessage('');
        setEmail(e.target.value);
    };
    
    


    const validateEmail = (email) => {
        // Regex for email validation
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        // Check email format
        if (!re.test(email)) {
            return { isValid: false, message: "Invalid email format" };
        }
    
        // Retrieve existing users
        const existingUsers = JSON.parse(sessionStorage.getItem('tempUsers')) || [];
    
        // Check if the email is already used
        const isEmailUsed = existingUsers.some(user => user.email === email);
        if (isEmailUsed) {
            return { isValid: false, message: "Email already in use" };
        }
    
        return { isValid: true, message: "" };
    };
    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }
      // Create a new user object
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        isActive: false,
        firstTime: true
    };

    // Retrieve the existing array of users or initialize it
    const existingUsers = JSON.parse(sessionStorage.getItem('tempUsers')) || [];
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
        setEmailErrorMessage(emailValidation.message);
        return;
    }


    existingUsers.forEach(user => user.isActive = false);


    existingUsers.push(newUser);

    sessionStorage.setItem('tempUsers', JSON.stringify(existingUsers));
    console.log(newUser)
    console.log(existingUsers)

    // Navigate to the next page
    navLogin();
};

    return (
       <div className='page-signUp-container'>
        <Navbar></Navbar>

            <div className="signup-container">
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className={emailErrorMessage ? 'error-input' : ''}
                    />
                    {emailErrorMessage && <p className="error-message">{emailErrorMessage}</p>}
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
                    <div className="input-container">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                            className={errorMessage ? 'error-input' : ''} 

                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                    <button className = "signup-button" type="submit">Create Account</button>
                 
                </form>
                <div className="login-section">
                   Already have an account ? <a onClick={navLogin}>Log in</a>
                </div>
            </div>
            </div>
           
        );
}

export default Signup