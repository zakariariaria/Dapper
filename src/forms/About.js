import HomePage from '../components/HomePage';
import '../styles/About.css'
import zak from '../images/zak.jpg'
import ryad from '../images/ryad.jpg'
import benak from '../images/benak.jpg'

const AboutForm = props => {
    return(
        <body>
            <div><HomePage></HomePage></div>
            <div className="about">
                <div className="title">
                    <label>Our mission</label>
                    <label> We change the way people dress forever</label>
                </div>
                <div className="about_container">
                    <div className="muskeeters">
                        <img src={ryad} alt="ryad" id="ryad"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="muskeeters">
                        <img src={benak} alt="benak" id="benak"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="muskeeters">
                        <img src={zak} alt="zak" id="zak"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                </div>
            </div>
        </body>
        
    );
}

export default AboutForm;