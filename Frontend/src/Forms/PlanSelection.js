import React,  {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/PlanSelection.css'
import icon_acrylic from '../Images/icon-acrylic.png'
import icon_acrylic_yellow from '../Images/icon-acrylic-yellow.png'
import icon_acrylic_green from '../Images/icon-acrylic-green.png'


function PlanSelection() {
    
    const navigate = useNavigate();

    function handleClick(){
        navigate("/address")
    }

    const[index,setIndex] = useState(0);

    return (
        <body>
            <div id="wrapper_plan">
                <div id="navbar_plan">
                    <ul id="list_plan">
                        <a href="/plan-selection">Select Plan</a>
                        <a href="/address">Address</a>
                        <a href="/checkout">Checkout</a>
                        <a href="/clothes-selection">Select Clothes</a>
                    </ul>
                </div>
                <h1>Choose your plan</h1>
                <div id="tabsList_plan">
                        <label>Bill me</label>
                        <label className="tab_label_plan" onClick={()=>{setIndex(0)}}>Monthly</label>
                        <label className="tab_label_plan" onClick={()=>{setIndex(1)}}>Yearly</label>
                </div>
                <div id="wrapperPlans_plan">
                    <div className="choicePlans_plan">
                        <h5>Essentials</h5>
                        <h1 hidden={index !==0}>24$ / MONTH</h1>
                        <h1 hidden={index !==1}>276$ / YEAR</h1>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic} alt="icon_acrylic"></img>
                            <label>Affordable price</label>
                        </div>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic} alt="icon_acrylic"></img>
                            <label>Versatile and easy to wear</label>
                        </div>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic} alt="icon_acrylic"></img>
                            <label>Quality clothes</label>
                        </div>
                        <button className="planSelection" onClick={handleClick}>Choose plan</button>
                    </div>
                    <div className="choicePlans_plan">
                        <div id="wrapperElevated">
                            <h5>Elevated</h5>
                            <label id="bestLabel">  BEST! </label>
                        </div>
                        
                        <h1 hidden={index !==0}>50$ / MONTH</h1>
                        <h1 hidden={index !==1}>576$ / YEAR</h1>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic_yellow} alt="icon_acrylic_yellow"></img>
                            <label>Access to latest trends and styles</label>
                        </div>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic_yellow} alt="icon_acrylic_yellow"></img>
                            <label>Stands out from the crowd</label>
                        </div>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic_yellow} alt="icon_acrylic_yellow"></img>
                            <label>High-quality and on-trend</label>
                        </div>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic_yellow} alt="icon_acrylic_yellow"></img>
                            <label>Curated selection of mid-range clothing and accessories</label>
                        </div>
                        <button className="planSelection" onClick={handleClick}>Choose plan</button>
                    </div>
                    <div className="choicePlans_plan">
                        <h5>Deluxe</h5>
                        <h1 hidden={index !==0}>120$ / MONTH</h1>
                        <h1 hidden={index !==1}>1200$ / YEAR</h1>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic_green} alt="icon_acrylic_green"></img>
                            <label>Exclusive items</label>
                        </div>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic_green} alt="icon_acrylic_green"></img>
                            <label>Finest quality clothing and accessories</label>
                        </div>
                        <div className="checkPlans_plan">
                            <img src={icon_acrylic_green} alt="icon_acrylic_green"></img>
                            <label>Unmatched luxury fashion experience</label>
                        </div>
                        <button className="planSelection" onClick={handleClick}>Choose plan</button>
                    </div>
                </div>
                
            </div>
            
        </body>
    )
}

export default PlanSelection