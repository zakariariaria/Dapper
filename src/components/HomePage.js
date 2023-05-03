import '../styles/HomePage.css'
import logo from '../images/dapper_logo.png'
import dot from '../images/dot.png'


function HomePage() {
    return (
      
      <nav className="nav"> 
        <a href="/" ><img src={logo} alt="logo" id="logo"></img></a>
        <ul className="middle">
          <li className="text">
            <a href="/pricing" >How it works</a>  
          </li>
          <li className="dots">
            <img src={dot} alt="dot"/>
          </li>
          <li className="text">
            <a href="/about" >Who we are</a>
          </li>
          <li className="dots">
            <img src={dot} alt="dot"/>
          </li>
          <li className="text">
            <a href="/mission" >What we do</a>
          </li>
          <li className="dots">
            <img src={dot} alt="dot"/>
          </li>
          <li className="text">
            <a href="/contact" >Contact us</a>
          </li>
        </ul>
        <ul className='right'>
        <button id="login" type="submit">Log In</button>
        </ul>
      </nav> 
      
    );
}

export default HomePage;