import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faPaypal, faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from "../Components/Header";

function Checkout() {
    const [activeTab, setActiveTab] = useState('credit-card');

    return (
        <div><Header></Header>
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card ">
                        <div className="card-header">
                            <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'credit-card' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('credit-card')}>
                                            <FontAwesomeIcon icon={faCreditCard} /> Credit Card
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                                            onClick={() => setActiveTab('paypal')}>
                                            <FontAwesomeIcon icon={faPaypal} /> Paypal
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div id="credit-card" className={`tab-pane fade ${activeTab === 'credit-card' ? 'show active' : ''} pt-3`}>
                                    <form role="form" onsubmit="event.preventDefault()">
                                        <div class="form-group"> <label for="username">
                                            <h6>Card Owner</h6>
                                        </label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control " /> </div>
                                        <div class="form-group"> <label for="cardNumber">
                                            <h6>Card number</h6>
                                        </label>
                                            <div class="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required />
                                                <div class="input-group-append"> <span class="input-group-text text-muted" style={{display:"flex", flexDirection:"row", gap:"5%", width:"100%", height:"100%"}}> <FontAwesomeIcon icon={faCcVisa} ></FontAwesomeIcon> <FontAwesomeIcon icon={faCcMastercard} ></FontAwesomeIcon> <FontAwesomeIcon icon={faCcAmex} ></FontAwesomeIcon> </span> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <div class="form-group"> <label><span class="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                </span></label>
                                                    <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required /> <input type="number" placeholder="YY" name="" class="form-control" required /> </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                                    <h6>CVV <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon></h6>
                                                </label> <input type="text" required class="form-control" /> </div>
                                            </div>
                                        </div>
                                        <div class="card-footer"> <button type="button" class="subscribe btn btn-primary btn-block shadow-sm" style={{width:"100%"}}> Confirm Payment </button> </div>
                                    </form>
                                </div>
                                <div id="paypal" className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''} pt-3`}>
                                    <h6 class="pb-2">Select your paypal account type</h6>
                                    <div class="form-group "> <label class="radio-inline"> <input type="radio" name="optradio" checked /> Domestic </label> <label class="radio-inline"> <input type="radio" name="optradio" class="ml-5" />International </label></div>
                                    <p> <button type="button" class="btn btn-primary "><i class="fab fa-paypal mr-2"></i> Log into my Paypal</button> </p>
                                    <p class="text-muted"> Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected back to the website to view details of your order. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Checkout;
