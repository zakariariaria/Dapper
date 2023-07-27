import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Login.css'

function Login() {

    const resetInput = (e) => {
        e.target.value = "";
    }

    
    return (
        <body>
            <div id="wrapper">
                <div id="left_wrapper">

                    <label>Dapper</label>
                    <h1>Sign In</h1>
                    <input type="text" defaultValue="Email" onClick={resetInput} ></input>
                    <input type="password" defaultValue="Password" onClick={resetInput}></input>
                    <button>Login</button>
                    <a href="test">CREATE NEW ACCOUNT</a>
                    
                </div>
                <div id="right_wrapper">
                </div>
                
            
         </div>
        </body>
        
    )
}

export default Login