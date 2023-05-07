import '../styles/SignUp3.css'
import paypal from '../images/PayPal.png'
import google_pay from '../images/Google Pay.png'
import waves from '../images/Wave.png'

const SignUp3Form = props => {
    return(
        <body>
        <div className="container">
            <label  className="info" id="pay_with">Pay With</label>
            <div className="buttons_row">
                <a href="/" ><img src={paypal} alt="paypal" id="paypal"></img></a>
                <a href="/" ><img src={google_pay} alt="google_pay" id="google_pay"></img></a>
                <button id="more_button" type="submit">See More Methods</button>
            </div>
            <div className="or">
                <hr className="line"/>
                <p>or</p>
                <hr className="line"/>
            </div>
            <div className="label2">
                <label id="pay">Pay with Credit Card</label>
                <div>
                    <input type="checkbox" id="checkbox"></input>
                    <label>Use shipping address</label>
                </div>
            </div>
            <label className="info">Billing Information</label>
            <div className="rows">
                <div className="label_input">
                    <label className="label_text">First name *</label>
                    <input type="text" className="user_input"></input>
                </div>
                <div className="label_input">
                    <label className="label_text">Last name *</label>
                    <input type="text" className="user_input"></input>
                </div>
            </div>
            <div className="rows">
                <div className="label_input">
                    <label className="label_text">Address line 1 *</label>
                    <input type="text" className="user_input"></input>
                </div>
                <div className="label_input">
                    <label className="label_text">Address line 2</label>
                    <input type="text" className="user_input"></input>
                </div>
            </div>
            <div className="rows">
                <div className="label_input">
                    <label className="label_text">Country *</label>
                    <input type="text" className="user_input"></input>
                </div>
                <div className="label_input">
                    <label className="label_text">City *</label>
                    <input type="text" className="user_input"></input>
                </div>
            </div>
            <div className="rows">
                <div className="label_input">
                    <label className="label_text">State/Province *</label>
                    <input type="text" className="user_input"></input>
                </div>
                <div className="label_input">
                    <label className="label_text">Postal code *</label>
                    <input type="text" className="user_input"></input>
                </div>
            </div>
            <label className="info">Credit Card Information</label>
            <div className="rows">
                <div className="label_input">
                    <label className="label_text">Credit Card Number</label>
                    <input type="text" className="user_input"></input>
                </div>
                <div className="label_input">
                    <label className="label_text">Expiry Date (MM/YY)</label>
                    <input type="text" className="user_input"></input>
                </div>
            </div>
            <div className="cvv">
                    <label className="label_text">CVV</label>
                    <input type="text" className="cvv_input"></input>
            </div>
            <button id="continue_button" type="submit">Continue</button>
        </div>
        <img src={waves} alt="waves" id="waves"></img>
        </body>
    );
}

export default SignUp3Form;