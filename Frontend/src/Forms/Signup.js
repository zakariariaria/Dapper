import React from 'react';
import '../Styles/Signup.css'


function Signup() {

    const resetInput = (e) => {
        e.target.value = "";
    }

    
    return (
        <body>
            <div id="wrapper_signup">
                <div id="left_wrapper_signup">

                    <div id="logo_signup">
                        <label>Dapper</label>
                    </div>
                
                </div>
                <div id="right_wrapper_signup">

                    <h1 id="title_signup">Sign up to Dapper</h1>

                    <div id="info_wrapper_signup">

                        <div id="name_wrapper_signup">
                            <div className="names">
                                <label>First Name</label>
                                <input type="text" className='input_fullname_signup' id="test1"></input>
                            </div>
                            <div className="names">
                                <label>Last Name</label>
                                <input type="text" className='input_fullname_signup' id="test2"></input>
                            </div>
                        </div>

                        <label className="input_labels_signup">Email</label>
                        <input type="text" className='input_signup'></input>
                        <label className="input_labels_signup">Password</label>
                        <input type="text" className='input_signup'></input>
                        <div id="checkbox_wrapper">
                            <input type="checkbox"></input>
                            <label>I agree with Dapper's <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a></label>
                        </div>
                        <button id="confirm_button_signup">Create account</button>
                        <label id="login_router_signup">Already have an account? <a href="login">Sign in</a></label>
                    </div>      
                </div>
                
                
            
         </div>
        </body>
        
    )
}

export default Signup