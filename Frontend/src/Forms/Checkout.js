import React from 'react';
import "../Styles/Checkout.css";
import Header from "../Components/Header";
import Navbar from '../Components/Navbar';


function Checkout() {

 
   
      const CheckoutForm = (props) => (
       <div className="checkout">
          <div className="checkout-container" >
           <h3 className="heading-3">Credit card checkout</h3>
           <Input label="Cardholder's Name" type="text" name="name" />
           <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
            <div className="row">
              <div className="col">
                <Input label="Expiration Date" type="month" name="exp_date" />
              </div>
              <div className="col">
                <Input label="CVV" type="number" name="cvv" />
              </div>
            </div>
            <Button text="Place order" />
          </div>
       </div>
      );
      
      const Input = (props) => (
        <div className="input">
          <label>{props.label}</label>
          <div className="input-field">
            <input type={props.type} name={props.name} />
            <img src={props.imgSrc}/>
          </div>
        </div>
      );
      
      const Button = (props) => (
        <button className="checkout-btn" type="button">{props.text}</button>
      );
      const Basket = () => {
        return (
            <div className="basket-container">
                <h3 className="heading-3">Your Basket</h3>
                <ul className="basket-items">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <p className="total-price">Total Price: $XXX.XX</p>
            </div>
        );
    }
      
      
      
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
  <div className='container-page'>
    <CheckoutForm></CheckoutForm>
    <div className='image-holder2'></div>
   
    </div>
    </>
  );
}

export default Checkout;
