import phone from '../images/phone.png'
import android from '../images/Android.png'
import appstore from '../images/Appstore.png'
import '../styles/Mobile.css'

function Mobile(){
    return(
    <div className="mobile_container">
    <div className="mobile">
            <div>
                <img src={phone} alt="phone" id="phone"></img>
            </div>
            <div className="block">
                <h2>Elegance at your fingertips</h2>
                <label>Choose your outfits, and manage your plan in our app</label>
                <div className="mobile_buttons">
                    <a href="/" ><img src={appstore} alt="appstore" className="mobile_logo"></img></a>
                    <a href="/" ><img src={android} alt="android" className="mobile_logo"></img></a>
                </div>
            </div>
    </div>
    </div>
    
    );
}

export default Mobile;