import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faMapMarkerAlt, faShoppingCart, faTshirt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../Styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <p>logo</p>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faListAlt} className="icon"/>
                        <a href="/plan-selection">Select Plan</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
                        <a href="/address">Address</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                        <a href="/checkout">Checkout</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faTshirt} className="icon"/>
                        <a href="/clothes-selection">Select Clothes</a>
                    </li>
                </ul>
            </nav>
            <div className="right-side"></div>
        </header>
    );
}

export default Header;