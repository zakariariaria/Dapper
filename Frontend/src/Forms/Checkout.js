import React from "react";
import "../Styles/Checkout.css";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';


function Checkout() {
  const navigate = useNavigate();

  const CheckoutForm = (props) => (
    <div className="checkout">
      <div className="checkout-container">
        <h3 className="heading-3">Credit card checkout</h3>
        <Input label="Cardholder's Name" type="text" name="name" />
        <Input
          label="Card Number"
          type="number"
          name="card_number"
          imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
        />
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
        <img src={props.imgSrc} />
      </div>
    </div>
  );
  const handlePlaceOrder = () => {
    // Retrieve credit card form data
    const cardData = {
      cardholderName: document.querySelector("[name='name']").value,
      cardNumber: document.querySelector("[name='card_number']").value,
      expirationDate: document.querySelector("[name='exp_date']").value,
      cvv: document.querySelector("[name='cvv']").value
    };

    // Retrieve existing users
    let existingUsers = JSON.parse(sessionStorage.getItem('tempUsers')) || [];

    // Find the active user
    const activeUserIndex = existingUsers.findIndex(user => user.isActive);

    // Update the active user's credit card details
    if (activeUserIndex !== -1) {
        // Access the active user
        const activeUser = existingUsers[activeUserIndex];

        // Create or update credit card information
        activeUser.creditCardInfo = {
            ...activeUser.creditCardInfo, // Retains existing card data if any
            ...cardData
        };

        // Update the user in the array
        existingUsers[activeUserIndex] = activeUser;

        // Save updated users back to sessionStorage
        sessionStorage.setItem('tempUsers', JSON.stringify(existingUsers));
        console.log(activeUser)
    }
    

    // Navigate to next step or perform further actions
    navigate("/clothes-selection")
  };

  const Button = (props) => (
    <button className="checkout-btn" onClick={handlePlaceOrder} type="button">
      {props.text}
    </button>
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
  };

  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="container-page">
        <CheckoutForm></CheckoutForm>
        <div className="image-holder2"></div>
      </div>
    </>
  );
}

export default Checkout;
