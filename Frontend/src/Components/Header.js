import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt, faMapMarkerAlt, faShoppingCart, faTshirt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../Styles/Header.css';

function Header() {
    // Get the current path from the window's location
    const currentPath = window.location.pathname;

    return (
        <header className="header">
            <div className="logo-container">
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faListAlt} className="icon"/>
                        <a href="/plan-selection" style={{ color: currentPath === '/plan-selection' ? '#d4af37' : 'white' }}>Select Plan</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
                        <a href="/address" style={{ color: currentPath === '/address' ? '#d4af37' : 'white' }}>Address</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                        <a href="/checkout" style={{ color: currentPath === '/checkout' ? '#d4af37' : 'white' }}>Checkout</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faTshirt} className="icon"/>
                        <a href="/clothes-selection" style={{ color: currentPath === '/clothes-selection' ? '#d4af37' : 'white' }}>Select Clothes</a>
                    </li>
                </ul>
            </nav>
            <div className="right-side"></div>
        </header>
    );
}

export default Header;
