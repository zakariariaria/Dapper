import HomePage from '../components/HomePage';
import Mobile from '../components/Mobile';
import '../styles/Login.css'
import facebook from '../images/login_facebook.png'
import google from '../images/login_google.png'
import apple from '../images/login_apple.png'


const LoginForm = props => {
    return(
        <div className="page">
        <div>
            <HomePage></HomePage>
        </div>
        <div className="signin">
        
        <div className="signin_container">
           
            <h1>Sign In</h1>
            <input type="text" placeholder="Email" className="inputs"></input>
            <input type="password" placeholder="Password" className="inputs"></input>
            <div className="options">
                <div>
                    <input type="checkbox" id="checkbox"></input>
                    <label>Keep me signed in</label>
                </div>
                <a href="/" id="password">Forgot Password</a>
            </div>
            
            <button id="signin_button" type="submit">Log In</button>
            <div className="or">
                <hr className="line"/>
                <p>or</p>
                <hr className="line"/>
            </div>
            
            <div className="social">
            <a href="/" ><img src={facebook} alt="facebook_login" className="social_image"></img></a>
            <a href="/" ><img src={apple} alt="apple_login" className="social_image"></img></a>
            <a href="/" ><img src={google} alt="google_login" className="social_image"></img></a>
            </div>
            <div className="signup">
                <label id="account_label">Don't have an account?</label>
                <a href="/" id="account">Sign Up</a>
            </div>
        </div>
        
        <div className="app">
            <Mobile></Mobile>
        </div>
        
        </div>
        </div>
    );
}

export default LoginForm;