import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import '../Styles/Address.css'
import Footer from '../Components/Footer';
import Header from "../Components/Header";



function Address() {



    const [index, setIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const [billingOption, setBillingOption] = useState("Select Billing Option");
    const [showBillingDiv, setShowBillingDiv] = useState(false);

    const [deliveryOption, setDeliveryOption] = useState("Select Delivery Instruction");
    const [showDeliveryDiv, setShowDeliveryDiv] = useState(false);



    return (
        <div><Header></Header>
            <div class="row">
                <div class="col-md-8 mb-4">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Billing details</h5>
                        </div>
                        <div class="card-body">
                            <form>

                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="form7Example1">First name *</label>
                                            <input type="text" id="form7Example1" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="form7Example2">Last name *</label>
                                            <input type="text" id="form7Example2" class="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="form7Example1">Address line 1 * (We don't deliver to PO boxes)</label>
                                            <input type="text" id="form7Example1" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="form7Example2">Address line 2</label>
                                            <input type="text" id="form7Example2" class="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-4">
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="form7Example1">City *</label>
                                            <input type="text" id="form7Example1" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-outline">
                                            <label class="form-label" for="form7Example2">Postal Code *</label>
                                            <input type="text" id="form7Example2" class="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-outline mb-4">
                                    <label class="form-label" for="form7Example6">Phone</label>
                                    <input type="text" id="form7Example2" class="form-control" />
                                </div>


                                <div className="dropdown" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="form-label" htmlFor="billingDropdown">Billing</label>
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                                        {billingOption}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button type="button" className="dropdown-item" onClick={() => { setIndex(0); setBillingOption("Use delivery address"); setShowBillingDiv(false); }}>Use delivery address</button></li>
                                        <li><button type="button" className="dropdown-item" onClick={() => { setIndex(1); setBillingOption("Add a billing address"); setShowBillingDiv(true); }}>Add a billing address</button></li>
                                    </ul>
                                </div>

                                {showBillingDiv && (
                                    <div>
                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label" for="form7Example1">First name *</label>
                                                    <input type="text" id="form7Example1" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label" for="form7Example2">Last name *</label>
                                                    <input type="text" id="form7Example2" class="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label" for="form7Example1">Address line 1 * (We don't deliver to PO boxes)</label>
                                                    <input type="text" id="form7Example1" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label" for="form7Example2">Address line 2</label>
                                                    <input type="text" id="form7Example2" class="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mb-4">
                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label" for="form7Example1">City *</label>
                                                    <input type="text" id="form7Example1" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
                                                    <label class="form-label" for="form7Example2">Postal Code *</label>
                                                    <input type="text" id="form7Example2" class="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="form7Example6">Phone</label>
                                            <input type="text" id="form7Example2" class="form-control" />
                                        </div>
                                    </div>
                                )}

                                <div className="dropdown" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label className="form-label" htmlFor="deliveryDropdown">Delivery Instructions</label>
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" style={{ marginBottom:"1%" }}>
                                        {deliveryOption}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><button type="button" className="dropdown-item" onClick={() => { setCounter(0); setDeliveryOption("Leave with concierge"); setShowDeliveryDiv(false); }}>Leave with concierge</button></li>
                                        <li><button type="button" className="dropdown-item" onClick={() => { setCounter(0); setDeliveryOption("Leave on front porch"); setShowDeliveryDiv(false); }}>Leave on front porch</button></li>
                                        <li><button type="button" className="dropdown-item" onClick={() => { setCounter(0); setDeliveryOption("Leave at front door"); setShowDeliveryDiv(false); }}>Leave at front door</button></li>
                                        <li><button type="button" className="dropdown-item" onClick={() => { setCounter(0); setDeliveryOption("Leave at back door"); setShowDeliveryDiv(false); }}>Leave at back door</button></li>
                                        <li><button type="button" className="dropdown-item" onClick={() => { setCounter(1); setDeliveryOption("Other"); setShowDeliveryDiv(true); }}>Other</button></li>
                                    </ul>
                                </div>

                                {showDeliveryDiv && (

                                    <div class="form-outline mb-4">
                                        <textarea class="form-control" id="form7Example7" rows="4"></textarea>

                                    </div>

                                )}


                                <div class="form-check d-flex justify-content-center mb-2">
                                    <a class="btn btn-primary" href="checkout" role="button" style={{width:"100%", marginRight:"2%"}}>Continue</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mb-4">
                    <div class="card mb-4">
                        <div class="card-header py-3">
                            <h5 class="mb-0">Order Summary</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Box Price
                                    <span>$128</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                    Shipping
                                    <span>15$</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Total amount</strong>
                                        <strong>
                                            <p class="mb-0">(including VAT)</p>
                                        </strong>
                                    </div>
                                    <span><strong>$143</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address