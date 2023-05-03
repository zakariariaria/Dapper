import phone from '../images/phone.png'
import android from '../images/Android.png'
import appstore from '../images/Appstore.png'
import '../styles/Mobile.css'

function Mobile(){
    return(
    <div class="mobile_container">
    <div class="mobile">
            <div>
                <img src={phone} alt="phone" id="phone"></img>
            </div>
            <div class="block">
                <h2>Elegance at your fingertips</h2>
                <label>Choose your outfits, and manage your plan in our app</label>
                <div class="mobile_buttons">
                    <a href="/" ><img src={appstore} alt="appstore" class="mobile_logo"></img></a>
                    <a href="/" ><img src={android} alt="android" class="mobile_logo"></img></a>
                </div>
            </div>
    </div>
    </div>
    
    );
}

export default Mobile;