import '../Styles/Payment.css'
import paypal from '../Images/Paypal.png'
import google_pay from '../Images/GooglePay.png'
import Footer from '../Components/Footer';

function Payment() {
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
                <p id="or">or</p>
                <hr className="line"/>
            </div>
            <div className="label2">
                <label id="pay">Pay with Credit Card</label>
                <div id="checkbox_wrapper_payment">
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
            <div id="cc_row">
                <div className="label_input">
                    <label className="label_text">Credit Card Number</label>
                    <input type="text" id="cc_number" className="user_input"></input>
                </div>
                <div className="label_input">
                    <label className="label_text">Expiry Date (MM/YY)</label>
                    <input type="text" id="expiry" className="user_input"></input>
                </div>
            </div>
            <div className="cvv">
                    <label id="cvv_label">CVV</label>
                    <input type="text" className="user_input"></input>
            </div>
            <button id="continue_button" type="submit">Continue</button>
        </div>
        <Footer></Footer>
        </body>
    );
}

export default Payment;