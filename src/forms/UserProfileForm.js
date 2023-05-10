import '../styles/UserProfile.css'
import waves from '../images/Wave.png'
import earth from '../images/earth.png'
import cold from '../images/cold.png'
import green from '../images/green.png'
import pastel from '../images/pastel.png'
import rainbow from '../images/rainbow.png'
import warm from '../images/warm.png'
import warm2 from '../images/warm2.png'
import dark_cold from '../images/dark cold.png'




const UserProfileForm = props => {
    return(
        
        <body>
        <div className="user_profile_container">
        
        <h1>User Profile</h1>
        <div className="dropdown_containers">
            <label className="label_input">Gender</label>
            <select className="dropdowns">
                <option>Abinary</option>
                <option>Agender</option>
                <option>Ambigender</option>
                <option>Androgyne</option>
                <option>Androgynos</option>
                <option>Androgynous</option>
                <option>Aporagender</option>
                <option>Autigender</option>
                <option>Bakla</option>
                <option>Bigender</option>
                <option>Binary</option>
                <option>Bissu</option>
                <option>Butch</option>
                <option>Calabai</option>
                <option>Calalai</option>
                <option>Cis male</option>
                <option>Cis female</option>
                <option>Cis man</option>
                <option>Cis woman</option>
                <option>Demi-boy</option>
                <option>Demiflux</option>
                <option>Demigender</option>
                <option>Demi-girl</option>
                <option>Demi-guy</option>
                <option>Demi-man</option>
                <option>Demi-woman</option>
                <option>Dual gender</option>
                <option>Endosex</option>
                <option>Eunuch</option>
                <option>Fa'afafine</option>
                <option>Female</option>
                <option>Female to male</option>
                <option>Femme</option>
                <option>FTM</option>
                <option>Gender bender</option>
                <option>Gender creative</option>
                <option>Gender diverse</option>
                <option>Gender gifted</option>
                <option>Genderfluid</option>
                <option>Genderflux</option>
                <option>Genderless</option>
                <option>Gendervague</option>         
                <option>Genderless</option>
                <option>Gendervague</option>
                <option>Gender nonconforming</option>
                <option>Genderqueen</option>
                <option>Gender questioning</option>
                <option>Gender variant</option>
                <option>Graygender</option>
                <option>Hijra</option>
                <option>Intergender</option>
                <option>Intersex</option>
                <option>Ipsogender</option>
                <option>Kathoey</option>
                <option>Male</option>
                <option>Male to female</option>
                <option>Man</option>
                <option>Man of trans experience</option>
                <option>Maverique</option>
                <option>MTF</option>
                <option>Multigender</option>
                <option>Muxe</option>
                <option>Neither</option>
                <option>Neurogender</option>
                <option>Neutrois</option>
                <option>Non-binary</option>
                <option>Non-binary transgender</option>
                <option>Omnigender</option>
                <option>Other</option>
                <option>Pangender</option>
                <option>Polygender</option>
                <option>Person of transgender experience</option>
                <option>Queer</option>
                <option>Sekhet</option>
                <option>Trans</option>
                <option>Trans female</option>
                <option>Trans male</option>
                <option>Trans man</option>
                <option>Trans person</option>
                <option>Trans woman</option>
                <option>Transgender</option>
                <option>Transgender female</option>
                <option>Transgender male</option>
                <option>Transgender man</option>
                <option>Transgender person</option>
                <option>Transgender woman</option>
                <option>Trans feminine</option>
                <option>Transmasculine</option>
                <option>Transsexual</option>
                <option>Transsexual female</option>
                <option>Transsexual male</option>
                <option>Trasnssexual man</option>
                <option>Trasnssexual person</option>
                <option>Trasnssexual woman</option>
                <option>Tranvesti</option>
                <option>Trigender</option>
                <option>Tumtum</option>
                <option>Two spirit</option>
                <option>Vakasalewalewa</option>
                <option>Waria</option>
                <option>Winkte</option>
                <option>Woman</option>
                <option>Woman of trans experience</option>
                <option>Xenogender</option>
                <option>X-gender</option>
            </select>
        </div>
        <div className="dropdown_containers">
            <label className="label_input">Color Preferences</label>
            <select className="dropdowns">
                <option>
                    <div className='dropdown_rows'>
                        <label>Cold tones</label>
                        <img src={cold} alt="cold"></img>
                    </div>
                </option>
                <option>
                    <div className='dropdown_rows'>
                        <label>Dark cold tones</label>
                        <img src={dark_cold} alt="dark_cold"></img>
                    </div>
                </option>
                <option>
                    <div className='dropdown_rows'>
                        <label>Earthy tones</label>
                        <img src={earth} alt="earth"></img>
                    </div>
                </option>
                <option>
                    <div className='dropdown_rows'>
                        <label>Shades of green</label>
                        <img src={green} alt="green"></img>
                    </div>
                </option>
                <option>
                    <div className='dropdown_rows'>
                        <label>Pastel</label>
                        <img src={pastel} alt="pastel"></img>
                    </div>
                </option>
                <option value="test">
                    <div className='dropdown_rows'>
                        <label>Earthy tones</label>
                        <img src={earth} alt="earth"></img>
                    </div>
                </option>
                <option>
                    <div className='dropdown_rows'>
                        <label>Earthy tones</label>
                        <img src={earth} alt="earth"></img>
                    </div>
                </option>
                <option>
                    <div className='dropdown_rows'>
                        <label>Earthy tones</label>
                        <img src={earth} alt="earth"></img>
                    </div>
                </option>
            </select>
        </div>
        <div className="dropdown_containers">
            <label className="label_input">Size</label>
            <select className="dropdowns">
                <option>Extra small</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra large</option>
            </select>
        </div>
        
        <button id="continue_button" type="submit">Continue</button>
        </div>
        <img src={waves} alt="waves" id="waves"></img>
        </body>
        
        
            
        
        
        
       
            
        
        
       
    );
}

export default UserProfileForm;