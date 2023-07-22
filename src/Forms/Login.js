import React from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Login.css'

function Login() {

    const resetInput = (e) => {
        e.target.value = "";
    }

    const navigate = useNavigate();

    function handleClick(){
        navigate("/test")
    }
    
    return (
        <div id="container">
            <div id="left_container">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            </div>
            <div id="right_container">
                <h1>Register</h1>
                <label> Don't have an account ?</label>
                <a onClick={handleClick} href="">Create one, it takes less than a minute</a>
                
                <input type="text" defaultValue="Email" onClick={resetInput} ></input>
                <input type="password" defaultValue="Password" onClick={resetInput}></input>
                <button>Log In</button>
                <label>Log in using social media instead</label>
                <div id="social_media_container">
                    <button>twitter</button>
                    <button>facebook</button>
                    <button>google</button>
                </div>
            </div>
            
        </div>
    )
}

export default Login