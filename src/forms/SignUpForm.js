import HomePage from '../components/HomePage';
import Mobile from '../components/Mobile';
import '../styles/SignUp.css'


const SignUp = props => {
    return(
        <div className="page">
        <div>
            <HomePage></HomePage>
        </div>
        <div className="signup">
        <div className="signup_container">
           
            <h1>Create a Dapper account</h1>
            
            <div className="name">
                <input type="text" placeholder="First name" className="user"></input>
                <input type="text" placeholder="Last name" className="user"></input>
            </div>
            <input type="text" placeholder="Email" id="email"></input>
            <div className="name">
                <input type="password" placeholder="Password" className="user"></input>
                <input type="password" placeholder="Confirm" className="user"></input>
            </div>
            <div className="check">
                    <input type="checkbox" id="checkbox"></input>
                    <label>Show Password</label>
            </div>
            <button id="continue_button" type="submit">Continue</button>
        </div>
        <div className="app">
            <Mobile></Mobile>
        </div>
        
        </div>
        </div>
    );
}

export default SignUp;