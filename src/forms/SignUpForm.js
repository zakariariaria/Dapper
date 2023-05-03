import HomePage from '../components/HomePage';
import Mobile from '../components/Mobile';
import '../styles/SignUp.css'


const SignUp = props => {
    return(
        <div class="page">
        <div>
            <HomePage></HomePage>
        </div>
        <div class="signup">
        <div class="container">
           
            <h1>Create a Dapper account</h1>
            <div class="name">
                <input type="text" placeholder="First name" class="user"></input>
                <input type="text" placeholder="Last name" class="user"></input>
            </div>
            <input type="text" placeholder="Email" id="email"></input>
            <div class="passwords">
                <input type="password" placeholder="Password" class="user"></input>
                <input type="password" placeholder="Confirm" class="user"></input>
            </div>
            <div class="check">
                    <input type="checkbox" id="checkbox"></input>
                    <label>Show Password</label>
            </div>
            <button id="continue_button" type="submit">Continue</button>
        </div>
        <div class="app">
            <Mobile></Mobile>
        </div>
        
        </div>
        </div>
    );
}

export default SignUp;