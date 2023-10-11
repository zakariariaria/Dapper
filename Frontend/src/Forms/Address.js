import React from 'react';
import "../Styles/Address.css";
import Header from "../Components/Header";
import Navbar from '../Components/Navbar';


function Address() {

      const Input = (props) => (
        <div className="input">
          <label>{props.label}</label>
          <div className="input-field">
            <input style={{border:"1px solid white"
}}  type={props.type} name={props.name} />
            <img src={props.imgSrc}/>
          </div>
        </div>
      );
      
      const Button = (props) => (
        <button className="checkout-btn" type="button" style={{width:"20%"}}>{props.text}</button>
      );
    
      
      
      
      
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
  <div className='container-page'>
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
        <div className='button-div'>
        <Button  text="Continue" />
        </div>
      </div>
    </div>
    <div className='image-holder'></div>
    </div>
    </>
  );
}

export default Address;
