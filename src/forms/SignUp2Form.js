import '../styles/SignUp2Form.css'
import waves from '../images/Wave.png'




const SignUp2Form = props => {
    return(
        
        <body>
        <div className="signup2_container">
        
        <div className="rows">
            <div className="information_rows">
                <label className="label_input">First name *</label>
                <input type="text" className="user_input"></input>
            </div>
            <div className="information_rows">
                <label className="label_input">Last name *</label>
                <input type="text" className="user_input"></input>
            </div>
        </div>
        <div className="rows">
            <div className="information_rows">
                <label className="label_input">Address line 1 *</label>
                <input type="text" className="user_input"></input>
            </div>
            <div className="information_rows">
                <label className="label_input">Address line 2 </label>
                <input type="text" className="user_input"></input>
            </div>
        </div>
        <div className="rows">
            <div className="information_rows">
                <label className="label_input">City *</label>
                <input type="text" className="user_input"></input>
            </div>
            <div className="information_rows">
                <label className="label_input">Postal code * </label>
                <input type="text" className="user_input"></input>
            </div>
        </div>
        <div id="phone_row">
                <label className="label_input">Phone * </label>
                <input type="text" id="phone"></input>
        </div>
        <div className="dropdown_containers">
            <label className="label_input">Billing address</label>
            <select className="dropdowns">
                <option>Use delivery address</option>
                <option>Add delivery address</option>
            </select>
        </div>
        <div className="dropdown_containers">
            <label className="label_input">Delivery instructions</label>
            <select className="dropdowns">
                <option>Leave with concierge</option>
                <option>Leave on front porch</option>
                <option>Leave at front door</option>
                <option>Leave at back door</option>
            </select>
        </div>
        
        <button id="continue_button" type="submit">Continue</button>
        </div>
        <img src={waves} alt="waves" id="waves"></img>
        </body>
        
        
            
        
        
        
       
            
        
        
       
    );
}

export default SignUp2Form;