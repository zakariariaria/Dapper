import HomePage from '../components/HomePage';
import Mobile from '../components/Mobile';
import '../styles/Login.css'
import facebook from '../images/login_facebook.png'
import google from '../images/login_google.png'
import apple from '../images/login_apple.png'


const LoginForm = props => {
    return(
        <div class="page">
        <div>
            <HomePage></HomePage>
        </div>
        <div class="signin">
        <div class="container">
           
            <h1>Sign In</h1>
            <input type="text" placeholder="Email" class="inputs"></input>
            <input type="password" placeholder="Password" class="inputs"></input>
            <div class="options">
                <div>
                    <input type="checkbox" id="checkbox"></input>
                    <label>Keep me signed in</label>
                </div>
                <a href="/" id="password">Forgot Password</a>
            </div>
            
            <button id="signin_button" type="submit">Log In</button>
            <div class="or">
                <hr class="line"/>
                <p>or</p>
                <hr class="line"/>
            </div>
            
            <div class="social">
            <a href="/" ><img src={facebook} alt="facebook_login" class="social_image"></img></a>
            <a href="/" ><img src={apple} alt="apple_login" class="social_image"></img></a>
            <a href="/" ><img src={google} alt="google_login" class="social_image"></img></a>
            </div>
            <div class="signup">
                <label id="account_label">Don't have an account?</label>
                <a href="/" id="account">Sign Up</a>
            </div>
        </div>
        <div class="app">
            <Mobile></Mobile>
        </div>
        
        </div>
        </div>
    );
}

export default LoginForm;