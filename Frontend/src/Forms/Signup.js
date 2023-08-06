import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Signup.css'
import { BsArrowRight } from 'react-icons/bs';

function Signup() {

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
                
                </div>
                <div id="right_wrapper">

                    <h1>Sign up to Dapper</h1>

                    <div id="info_wrapper">

                        <div id="name_wrapper">
                            <div className="names">
                                <label>First Name</label>
                                <input type="text"></input>
                            </div>
                            <div className="names">
                                <label>Last Name</label>
                                <input type="text"></input>
                            </div>
                        </div>

                        <label>Email</label>
                        <input type="text"></input>
                        <label>Password</label>
                        <input type="text"></input>
                        <div id="checkbox_wrapper">
                            <input type="checkbox"></input>
                            <label>I agree with Dapper's <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a></label>
                        </div>
                        <button>Create account</button>
                        <label>Already have an account? <a href="login">Sign in</a></label>
                    </div>      
                </div>
                
                
            
         </div>
        </body>
        
    )
}

export default Signup