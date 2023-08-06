import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Login.css'
import { BsArrowRight } from 'react-icons/bs';

function Login() {


    const navigate = useNavigate();

    function handleClick(){
        navigate("/register")
    }

    
    return (
        <body>
            <div id="wrapper">
                <div id="left_wrapper">

                    <div id="logo">
                        <label>Dapper</label>
                    </div>
                
                </div>
                <div id="right_wrapper">

                    

                    <div id="info_wrapper">
                        <label id="subtitle">START YOUR UNIQUE CLOTHING EXPERIENCE</label>
                        <h1 id="title">Login to your account</h1>
                        <div className="input_wrappers">
                            <label>E-Mail</label>
                            <input type="text" className="text_inputs"></input>
                        </div>
                        <div className="input_wrappers">
                            <label>Password</label>
                            <input type="password"  className="text_inputs"></input>
                        </div>
                        
                        <div id="buttons_wrapper">
                            <button id="signup_button" onClick={handleClick}>Register</button>
                            <button id="login_button">Login</button>
                        </div>
                        <div id="account_wrapper">
                            <div id="checkbox_wrapper">
                                <input type="checkbox"></input>
                                <label>Remember me</label>
                            </div>
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>      
                </div>
                
                
            
         </div>
        </body>
        
    )
}

export default Login