import React from "react";
import "../Styles/Home.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import sportswear from "../Images/SportWear.jpg";
import oldmoney from "../Images/old-money.jpg";
import formalcouture from "../Images/formalWear_couture.jpg";
import casualcouture from "../Images/casual_clothing.jpg";
import hanger from "../Images/hanger.jpg";
import whitebox from "../Images/whitebox.jpg";
import delievry from "../Images/delivery.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";

function Home() {
  const [isHowItWorksInView, setIsHowItWorksInView] = useState(false);
  const [isSeeOurStylesInView, setIsSeeOurStylesInView] = useState(false);
  const navigate = useNavigate();


  // const [isInView, setIsInView] = useState(false);
  const truckMotion = {
    rest: {
      x: 0,
    },
    hover: {
      x: 50, // 50px to the right, adjust as needed
      transition: {
        type: 'tween',
        duration: 1.0,
        ease: "easeInOut"
      },
    },
  };

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  useEffect(() => {
    const howItWorksObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHowItWorksInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const seeOurStylesObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSeeOurStylesInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const howItWorksEl = document.querySelector(".wrapper_how_it_works");
    const seeOurStylesEl = document.querySelector(".wrapper_see_our_styles");

    if (howItWorksEl) {
      howItWorksObserver.observe(howItWorksEl);
    }

    if (seeOurStylesEl) {
      seeOurStylesObserver.observe(seeOurStylesEl);
    }

    return () => {
      if (howItWorksEl) {
        howItWorksObserver.unobserve(howItWorksEl);
      }
      if (seeOurStylesEl) {
        seeOurStylesObserver.unobserve(seeOurStylesEl);
      }
    };
  }, []);


  return (
    <body className="home-page">
      <div id="container_home">
        <Navbar></Navbar>
        <div id="wrapper_home">
      
        </div>

        <div id="wrapper_work_home">
          <motion.div
            className="wrapper_how_it_works"
            initial={isHowItWorksInView ? "initial" : "animate"}
            animate={isHowItWorksInView ? "animate" : "initial"}
            variants={fadeIn}
          >
            <h2>How it works</h2>
            <ul id="work_list">
              <li>Choose your clothes</li>
              <li>Delivered safely to your door</li>
            </ul>
            <div className="wrapper_images_home">
              <div className="wrapper_choices">
                <img className="placeholder" src={hanger}></img>
                <h3>Choose your clothes</h3>
              </div>
              <div className="wrapper_choices">
                <img className="placeholder" src={whitebox}></img>
                <h3>Create the perfect box</h3>
              </div>
              <div className="wrapper_choices">
                <motion.img
                  className="placeholder"
                  src={delievry}
                  variants={truckMotion}
                  initial="rest"
                  whileHover="hover"
                />             
                <h3>Get convenient deliveries</h3>
              </div>
            </div>
            <button className="plans_button_home" onClick={()=> navigate("/about")}>Learn more</button>
          </motion.div>
          <motion.div
            className="wrapper_see_our_styles"
            initial={isSeeOurStylesInView ? "initial" : "animate"}
            animate={isSeeOurStylesInView ? "animate" : "initial"}
            variants={fadeIn}
          >
            <h2 className="yourBox-title">Your box, Your way</h2>

            <label>
              Flexible options to make you look dapper and customize your box
            </label>
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
                <h3>Casual wear</h3>
                <label>
                  Occasional, spontaneous and suited for everyday use
                </label>
              </div>
              <div className="wrapper_choices">
                <img
                  className="image-container"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                  }}
                  src={oldmoney}
                ></img>{" "}
                <h3>Old Money</h3>
                <label>Aesthetic based around a wealthy, classic style</label>
              </div>
              <div className="wrapper_choices">
                <img
                  className="image-container"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                  }}
                  src={sportswear}
                ></img>{" "}
                <h3>Sportswear</h3>
                <label>For those embracing style in motion</label>
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
                <h3>Formal wears</h3>
                <label>For the most formal of occasions</label>
              </div>
            </div>
            <button className="plans_button_home" onClick={()=> navigate("/plan-selection")}>See our styles</button>
          </motion.div>
        </div>
        <hr className="line_home"></hr>

        <Footer></Footer>
      </div>
    </body>
  );
}

export default Home;
