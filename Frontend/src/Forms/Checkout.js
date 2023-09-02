import React,  {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/Checkout.css'
import icon_acrylic_grey from '../Images/icon-acrylic-grey.png'
import icon_acrylic_green from '../Images/icon-acrylic-green.png'
import visa from '../Images/Visa.png'
import amex from '../Images/Amex.png'
import mastercard from '../Images/Mastercard.png'
import PayPal_icon from '../Images/PayPal_icon.png'
import Footer from '../Components/Footer';



function Checkout() {


    const[index,setIndex] = useState(0);

    const navigate = useNavigate();

    function handleClick(){
        navigate("/clothes-selection")
    }

    return (
        <body>
            <div id="wrapper_checkout">
                <div id="navbar_checkout">
                    <ul id="list_checkout">
                        <a href="/plan-selection">Select Plan</a>
                        <a href="/address">Address</a>
                        <a href="/checkout">Checkout</a>
                        <a href="/clothes-selection">Select Clothes</a>
                    </ul>
                </div>
                <div id="wrapper_infocheckout">
                    <div className="creditcard_checkout" onClick={()=>{setIndex(1)}} >
                        <div id="labelCreditCard_checkout">
                            <img src={icon_acrylic_grey} alt="icon_acrylic_grey" hidden={index !==0}></img>
                            <img src={icon_acrylic_grey}  alt="icon_acrylic_grey" hidden={index !==2}></img>
                            <img src={icon_acrylic_green}  alt="icon_acrylic_green" hidden={index !==1}></img>
                            <label>Add a credit card</label>
                            <img src={amex} alt="amex"></img>
                            <img src={mastercard} alt="mastercard"></img>
                            <img src={visa} alt="visa"></img>
                            <div id="inputCreditCard_checkout" hidden={index !==1}>
                                <div className="inputLabels_checkout">
                                    <label>Card number *</label>
                                    <input type="text" placeholder="1234 5678 9102 3456"></input>
                                </div>
                                <div className="inputLabels_checkout">
                                    <label>Expiry date *</label>
                                    <input type="text" placeholder="MM/YY"></input>
                                </div>
                                <div className="inputLabels_checkout">
                                    <label>Security code *</label>
                                    <input type="text" placeholder="123"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="creditcard_checkout" onClick={()=>{setIndex(2)}} >
                        <div id="iconsPaypal_checkout" >
                            <img src={icon_acrylic_grey} alt="icon_acrylic_grey" hidden={index !==0}></img>
                            <img src={icon_acrylic_grey} alt="icon_acrylic_grey" hidden={index !==1}></img>
                            <img src={icon_acrylic_green} alt="icon_acrylic_green" hidden={index !==2}></img>
                            <label>Add a PayPal account</label>
                            <img src={PayPal_icon} alt="PayPal_icon"></img>
                        </div>
                            
                            <label hidden={index !==2}>Add your PayPal account info after you place your order.</label>

                    </div>
                    <label>By clicking "Place order & Select Clothes" I accept the <a href="/">terms and conditions</a> and I have read the <a href="/">privacy policy</a></label>
                    <button onClick={handleClick}>Place Order & Select Clothes</button>
                </div>
                <Footer></Footer>
            </div>
            
        </body>
    )
}

export default Checkout