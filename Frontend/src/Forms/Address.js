import React from "react";
import "../Styles/Address.css";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { useNavigate } from 'react-router-dom';


function Address() {

  const navigate = useNavigate();

  const Input = (props) => (
    <div className="input">
      <label>{props.label}</label>
      <div className="input-field">
        <input
          style={{ border: "1px solid white" }}
          type={props.type}
          name={props.name}
        />
        <img src={props.imgSrc} />
      </div>
    </div>
  );
  const handleContinue = () => {
    // Retrieve form data
    const formData = {
        firstName: document.querySelector("[name='first_name']").value,
        lastName: document.querySelector("[name='last_name']").value,
        streetAddress: document.querySelector("[name='street_address']").value,
        city: document.querySelector("[name='city']").value,
        state: document.querySelector("[name='state']").value,
        zipCode: document.querySelector("[name='zip_code']").value
    };

    // Retrieve existing users
    let existingUsers = JSON.parse(sessionStorage.getItem('tempUsers')) || [];

    // Find the active user
    const activeUserIndex = existingUsers.findIndex(user => user.isActive);

    // Update the active user's address details
    if (activeUserIndex !== -1) {
        // Access the active user
        const activeUser = existingUsers[activeUserIndex];

        // Create new fields if they don't exist and update them
        activeUser.address = {
            ...activeUser.address, // Retains existing address data if any
            ...formData
        };

        // Update the user in the array
        existingUsers[activeUserIndex] = activeUser;

        // Save updated users back to sessionStorage
        sessionStorage.setItem('tempUsers', JSON.stringify(existingUsers));
        console.log(activeUser)
    }

   
    navigate("/checkout"); 
};

  const Button = (props) => (
    <button className="checkout-btn" type="button" onClick={handleContinue} style={{ width: "20%" }}>
      {props.text}
    </button>
  );

  


  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="container-page">
        <div className="address">
          <div className="address-container">
            <h3 className="heading-3">Shipping Address</h3>
            <div className="row">
              <div className="col">
                <Input label="First Name" type="text" name="first_name" />
              </div>
              <div className="col">
                <Input label="Last Name" type="text" name="last_name" />
              </div>
            </div>
            <Input label="Street Address" type="text" name="street_address" />
            <Input label="City" type="text" name="city" />
            <div className="row">
              <div className="col">
                <Input label="State" type="text" name="state" />
              </div>
              <div className="col">
                <Input label="ZIP Code" type="text" name="zip_code" />
              </div>
            </div>
            <div className="button-div">
              <Button text="Continue"  />
            </div>
          </div>
        </div>
        <div className="image-holder"></div>
      </div>
    </>
  );
}

export default Address;
