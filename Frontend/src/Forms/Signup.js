import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../Styles/Signup.css'



function Signup() {

    const navigate = useNavigate();
    function handleClick(){
        navigate("/register")
    }

    function navPlanSelection(){
        navigate("/plan-selection")
    }
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  // New state for error messages
    const handleConfirmPasswordChange = (e) => {
        // Whenever the confirm password input is changed, clear the error message
        setErrorMessage('');
        setConfirmPassword(e.target.value);
    };
    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }
        // console.log('First Name:', firstName, 'Last Name:', lastName, 'Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    };

    return (
       
       
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
                    <button type="submit">Create Account</button>
                 
                </form>
                <div className="login-section">
                   Already have an account ? <a onClick={handleClick}>Log in</a>
                </div>
            </div>
           
        );
}

export default Signup