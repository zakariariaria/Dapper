import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Login.css'
import { BsArrowRight } from 'react-icons/bs';

function Login() {

    const resetInput = (e) => {
        e.target.value = "";
    }

    
    return (
        <body>
            <div id="wrapper">
                <div id="left_wrapper">

                    <div id="logo">
                        <label>Dapper</label>
                    </div>

                    <div id="info_wrapper">
                        <label id="subtitle">START YOUR UNIQUE CLOTHING EXPERIENCE</label>
                        <h1 id="title">Login to your account</h1>
                        <div className="input_wrappers">
                            <label>E-Mail</label>
                            <input type="text" defaultValue="Email" onClick={resetInput} className="text_inputs"></input>
                        </div>
                        <div className="input_wrappers">
                            <label>Password</label>
                            <input type="password" defaultValue="Password" onClick={resetInput} className="text_inputs"></input>
                        </div>
                        
                        <div id="buttons_wrapper">
                            <button id="signup_button">Register</button>
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
                <div id="right_wrapper">
                
                </div>
                
            
         </div>
        </body>
        
    )
}

export default Login