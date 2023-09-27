import React from "react";
import "../Styles/Home.css";
import placeholder from "../Images/placeholder-image.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import hautecouture from "../Images/hauteCouture_clothing.jpg";
import vintagecouture from "../Images/vintage_clothing.jpg";
import formalcouture from "../Images/formalWear_couture.jpg";
import casualcouture from "../Images/casual_clothing.jpg";
import { motion } from 'framer-motion';


function Home() {
  return (
    <body>
      <div id="container_home">
        <Navbar></Navbar>
        <div id="wrapper_home">
          <div id="wrapper_title">
            <h1 className="bannerTitle">We help you look your best</h1>
            <button className="plans_button_home">View our plans</button>
          </div>
        </div>

        <div id="wrapper_work_home">
          <div className="wrapper_how_it_works">
            <h2>How it works</h2>
            <ul id="work_list">
              <li>Choose your clothes</li>
              <li>Delivered safely to your door</li>
            </ul>
            <div className="wrapper_images_home">
              <div className="wrapper_choices">
                <img className="placeholder"></img>
                <h3>Choose your clothes</h3>
                <label>Curated outfits</label>
              </div>
              <div className="wrapper_choices">
                <img className="placeholder"></img>
                <h3>Create the perfect box</h3>
                <label>Curated outfits</label>
              </div>
              <div className="wrapper_choices">
                <img className="placeholder"></img>
                <h3>Get convenient deliveries</h3>
                <label>Curated outfits</label>
              </div>
            </div>
            <button className="plans_button_home">Learn more</button>
          </div>
        
          <div className="wrapper_see_our_styles">
            <motion.h2 whileHover={{scale: 1.1}}>Your box, your way</motion.h2>
            <motion.label>
              Flexible options to make you look dapper and customize your box
            </motion.label>
            <div className="wrapper_images_home">
              <div className="wrapper_choices">
                <img
                  className="image-container"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                  }}
                  src={casualcouture}
                ></img>
                <motion.h3>Casual wear</motion.h3>
                <motion.label>
                  Occasional, spontaneous and suited for everyday use
                </motion.label>
              </div>
              <div className="wrapper_choices">
                <img
                  className="image-container"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                  }}
                  src={vintagecouture}
                ></img>{" "}
                <motion.h3>Vintage clothing</motion.h3>
                <motion.label>Reflect the styles and trends of past eras</motion.label>
              </div>
              <div className="wrapper_choices">
                <img
                  className="image-container"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                  }}
                  src={hautecouture}
                ></img>{" "}
                <motion.h3>Haute couture</motion.h3>
                <motion.label>For those seeking high-end fashion design</motion.label>
              </div>
              <div className="wrapper_choices">
                <img
                  className="image-container"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                  }}
                  src={formalcouture}
                ></img>{" "}
       <motion.h3 >Formal wears</motion.h3>
      <motion.label >
        For the most formal of occasions
      </motion.label>
              </div>
            </div>
            <button className="plans_button_home">See our styles</button>
          </div>
        </div>
        <hr className="line_home"></hr>

        <Footer></Footer>
      </div>
    </body>
  );
}

export default Home;
