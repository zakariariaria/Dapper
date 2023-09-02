import React,  {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Address.css'
import Footer from '../Components/Footer';

function Address() {
    
    const navigate = useNavigate();

    function handleClick(){
        navigate("/checkout")
    }

    const[index,setIndex] = useState(0);
    const[counter,setCounter] = useState(0);

    return (
        <body>
            <div id="wrapper_address">
                <div id="navbar_address">
                    <ul id="list_address">
                        <a href="/plan-selection">Select Plan</a>
                        <a href="/address">Address</a>
                        <a href="/checkout">Checkout</a>
                        <a href="/clothes-selection">Select Clothes</a>
                    </ul>
                </div>
                <div id="wrapperWrappers_address">
                    <div id="wrapperInfo_address">
                            <label >Please provide your address to see available delivery dates</label>
                            
                            <div className="wrapperInputRows_address">
                                <div className="labelInputs_address">
                                    <label>First name *</label>
                                    <input type="text"></input>
                                </div>
                                <div className="labelInputs_address">
                                    <label>Last name *</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="wrapperInputRows_address">
                                <div className="labelInputs_address">
                                    <label>Address line 1 (We don't deliver to PO boxes) *</label>
                                    <input type="text"></input>
                                </div>
                                <div className="labelInputs_address">
                                    <label>Address line 2</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="wrapperInputRows_address">
                                <div className="labelInputs_address">
                                    <label>City *</label>
                                    <input type="text"></input>
                                </div>
                                <div className="labelInputs_address">
                                    <label>Postal code *</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="labelInputs_address">
                                    <label>Phone *</label>
                                    <input type="text"></input>
                            </div>
                            <div className="labelInputs_address">
                                    <label>Billing</label>
                                    <select id="billingOptions">
                                        <option value="" onClick={()=>{setIndex(0)}}>Use delivery address</option>
                                        <option value="" onClick={()=>{setIndex(1)}}>Add a billing address</option>
                                    </select>
                                    
                            <div id="wrapperInfo_billingAddress" hidden={index !==1}>
                            <h3>Billing address</h3>
                            
                            <div className="wrapperInputRows_address">
                                <div className="labelInputs_address">
                                    <label>First name *</label>
                                    <input type="text"></input>
                                </div>
                                <div className="labelInputs_address">
                                    <label>Last name *</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="wrapperInputRows_address">
                                <div className="labelInputs_address">
                                    <label>Address line 1 (We don't deliver to PO boxes) *</label>
                                    <input type="text"></input>
                                </div>
                                <div className="labelInputs_address">
                                    <label>Address line 2</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="wrapperInputRows_address">
                                <div className="labelInputs_address">
                                    <label>City *</label>
                                    <input type="text"></input>
                                </div>
                                <div className="labelInputs_address">
                                    <label>Postal code *</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="labelInputs_address">
                                    <label>Phone *</label>
                                    <input type="text"></input>
                            </div>
                            </div>
                            </div>
                            <div className="labelInputs_address">
                                    <label>Delivery instructions</label>
                                    <select id="deliveryInstructions">
                                        <option value="" onClick={()=>{setCounter(0)}}>Leave with concierge</option>
                                        <option value="" onClick={()=>{setCounter(0)}}>Leave on front porch</option>
                                        <option value="" onClick={()=>{setCounter(0)}}>Leave at front door</option>
                                        <option value="" onClick={()=>{setCounter(0)}}>Leave at back door</option>
                                        <option value="" onClick={()=>{setCounter(1)}}>Other</option>
                                    </select>
                                    <input type="text" hidden={counter !==1}></input>
                                    <button onClick={handleClick}>Continue</button>
                            </div>
                            
                            
                    </div>
                    <div id="wrapperSummary_address">
                        <h3>Order summary</h3>
                        <div className="wrapperPrice">
                            <label>Box price</label>
                            <label>128$</label>
                        </div>
                        <div className="wrapperPrice">
                            <label>Shipping</label>
                            <label>15$</label>
                        </div>
                        <div className="wrapperPrice">
                            <label>First box total</label>
                            <label>143$</label>
                        </div>
                        
                    
                    </div>
                </div>

                
            
                <Footer></Footer>
            </div>
            
        </body>
    )
}

export default Address