import '../styles/SignUp2Form.css'
import waves from '../images/Wave.png'




const SignUp2Form = props => {
    return(
        
        <body>
        <div className="signup2_container">
        
        <div className="rows">
            <div className="information_rows">
                <label>First name *</label>
                <input type="text" className="names"></input>
            </div>
            <div className="information_rows">
                <label>Last name *</label>
                <input type="text" className="names"></input>
            </div>
        </div>
        <div className="rows">
            <div className="information_rows">
                <label>Address line 1 *</label>
                <input type="text" id="first_name"></input>
            </div>
            <div className="information_rows">
                <label>Address line 2 </label>
                <input type="text"></input>
            </div>
        </div>
        <div className="rows">
            <div className="information_rows">
                <label>City *</label>
                <input type="text"></input>
            </div>
            <div className="information_rows">
                <label>Postal code * </label>
                <input type="text"></input>
            </div>
        </div>
        <div className="information_rows">
                <label>Phone * </label>
                <input type="text" id="phone"></input>
        </div>
        <label>Billing address</label>
        <select className="dropdowns">
            <option>Use delivery address</option>
            <option>Add delivery address</option>
        </select>
        <label>Delivery instructions</label>
        <select className="dropdowns">
            <option>Leave with concierge</option>
            <option>Leave on front porch</option>
            <option>Leave at front door</option>
            <option>Leave at back door</option>
        </select>
        <button id="continue_button" type="submit">Continue</button>
        </div>
        <img src={waves} alt="waves" id="waves"></img>
        </body>
        
        
            
        
        
        
       
            
        
        
       
    );
}

export default SignUp2Form;