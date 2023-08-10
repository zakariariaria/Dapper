import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Login.css'
import logo from '../Images/logo.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style> 

function Login() {


    const navigate = useNavigate();

    function handleClick(){
        navigate("/register")
    }

    
    return (
        <body>
            <div id="wrapper_login">
                <div id="left_wrapper_login">

                    <div id="logo_login">
                        <a href="/"><img src={logo}></img></a>
                    </div>
                
                </div>
                <div id="right_wrapper_login">

                    

                    <div id="info_wrapper_login">
                        <label id="subtitle">START YOUR UNIQUE CLOTHING EXPERIENCE</label>
                        <h1 id="title">Login to Dapper</h1>
                        <div className="input_wrappers_login" id="email_wrapper_login">
                            <label id="email_label">E-Mail</label>
                            <input type="text" className="text_inputs"></input>
                        </div>
                        <div className="input_wrappers_login">
                            <div id="password_label">
                                <label>Password</label>
                                <a href="/">Forgot?</a>
                            </div>
                            <input type="password"  className="text_inputs"></input>
                        </div>
                        
                        
                        <button id="login_button">Login</button>
                        
                        <label id="register_button">Don't have an account? <a href="/register">Sign up</a></label>
                    </div>      
                </div>
                
                
            
         </div>
        </body>
        
    )
}

export default Login