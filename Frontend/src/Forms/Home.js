import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../Styles/Home.css'
import placeholder from '../Images/placeholder-image.png'
import Footer from '../Components/Footer';



function Home() {
    
    const navigate = useNavigate();

    function navLogin(){
        navigate("/login")
    }

    function navSignup(){
        navigate("/register")
    }

    return (
        <body>
            <div id="container_home">
                <div id="navbar_home">
                    <ul id="list">
                        <a href="/about">How it works</a>
                        <a href="/about">What we do</a>
                        <a href="/about">Contact us</a>
                    </ul>
                    <a href="/">Dapper</a> 
                    <ul id="button_list">
                        <button onClick={navLogin}>Log In</button>
                        <button onClick={navSignup}>Sign Up</button>
                    </ul>
                </div>
                <div id="wrapper_home">
                    <div id="wrapper_title">
                        <h1>We help you look your best</h1>
                        <button className="plans_button_home">View our plans</button>
                    </div>
                </div>
                <hr className="line_home"></hr>
                <div id="wrapper_work_home">
                    <h2>How it works</h2>
                    <ul id="work_list">
                        <li>Choose your clothes</li>
                        <li>Delivered safely to your door</li>
                    </ul>
                    <div className="wrapper_images_home">
                        <div className="wrapper_choices">
                            <img src={placeholder} className="placeholder"></img>
                            <h3>Choose your clothes</h3>
                            <label>Curated outfits</label>
                        </div>
                        <div className="wrapper_choices">
                            <img src={placeholder} className="placeholder"></img>
                            <h3>Create the perfect box</h3>
                            <label>lorem ipsum</label>
                        </div>
                        <div className="wrapper_choices">
                            <img src={placeholder} className="placeholder"></img>
                            <h3>Get convenient deliveries</h3>
                            <label>Scheduling made easy, with drop-offs right at your door</label>
                        </div>
                    </div>
                    <button>Learn more</button>
                    <hr className="line_home"></hr>
                    <h1>Your box, your way</h1>
                    <label>Flexible options to make you look dapper and customize your box</label>
                    <div className="wrapper_images_home">
                        <div className="wrapper_options_home">
                            <h3>Casual wear</h3>
                            <label>Occasional, spontaneous and suited for everyday use</label>
                        </div>
                        <div className="wrapper_options_home">
                            <h3>Vintage clothing</h3>
                            <label>Reflect the styles and trends of past eras</label>
                        </div>
                        <div className="wrapper_options_home">
                            <h3>Haute couture</h3>
                            <label>For those seeking high-end fashion design</label>
                        </div>
                        <div className="wrapper_options_home">
                            <h3>Formal wear</h3>
                            <label>For the most formal of occasions</label>
                        </div>
                    </div>
                    <button>See our styles</button>
                    <div id="wrapper2_home">
                        <div id="wrapper2_title">
                            <h1>Get started</h1>
                            <button className="plans_button_home">View our plans</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </body>
    )
}

export default Home