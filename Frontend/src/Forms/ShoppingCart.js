import React, { useState } from "react";
import "../Styles/ShoppingCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";
import pants from "../Images/pants.jpg";
import ShoppingItems from "../Components/ShoppingItems.js";


const ShoppingCart = () => {

	const items = [
		{
		  id: 'item1',
		  name: 'Shirt',
		  description: 'Cotton T-shirt',
		  price: 44.00,
		  imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp'
		},
		{
			id: 'item1',
			name: 'Shirt',
			description: 'Cotton T-shirt',
			price: 44.00,
			imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp'
		  },
		  {
			id: 'item1',
			name: 'Shirt',
			description: 'Cotton T-shirt',
			price: 44.00,
			imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp'
		  },
		// ... other items
	  ];
	  

	  
	  return (
		<>
		  <Navbar />
		  <div className="cart-header">
        <h2>Welcome to <span className="highlight">Your Return Cart</span></h2>
        <p className="cart-instructions">Discover the ease of returns and exchanges with us.</p>
        <p className="cart-message">Fancy something? <strong>Mark your favorites</strong> and the <strong>total price</strong> will be ready for you.</p>
      </div>
		  <ShoppingItems items={items} />
		</>
	  );
	};
	

export default ShoppingCart;
