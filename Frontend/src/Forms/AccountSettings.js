import React, { useState } from 'react';
import "../Styles/AccountSettings.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Components/Navbar";

const AccountSettings = () => {
    // State to keep track of the active tab
    const [activeTab, setActiveTab] = useState('account-general');

    // Function to handle tab click
    const handleTabClick = (newActiveTab) => {
        setActiveTab(newActiveTab);
    };

    // Function to determine if a tab is active
    const isTabActive = (tabName) => activeTab === tabName;

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

    return (
        <div>
            <Navbar></Navbar>
            <div className="container light-style flex-grow-1 container-p-y">
                <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
                <div className="card overflow-hidden">
                    <div className="row no-gutters row-bordered row-border-light">
                        <div className="col-md-3 pt-0">
                            <div className="list-group list-group-flush account-settings-links">
                                <a
                                    className={`list-group-item list-group-item-action ${isTabActive('account-general') ? 'active' : ''}`}
                                    onClick={() => handleTabClick('account-general')}
                                >
                                    General
                                </a>
                                <a
                                    className={`list-group-item list-group-item-action ${isTabActive('account-change-password') ? 'active' : ''}`}
                                    onClick={() => handleTabClick('account-change-password')}
                                >
                                    Change password
                                </a>
                                <a
                                    className={`list-group-item list-group-item-action ${isTabActive('notifications') ? 'active' : ''}`}
                                    onClick={() => handleTabClick('notifications')}
                                >
                                    Notifications
                                </a>
                                <a
                                    className={`list-group-item list-group-item-action ${isTabActive('credit-card-info') ? 'active' : ''}`}
                                    onClick={() => handleTabClick('credit-card-info')}
                                >
                                    Credit Cards
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content">
                                <div className={`tab-pane fade ${isTabActive('account-general') ? 'active show' : ''}`} id="account-general">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">E-mail</label>
                                            <input type="text" className="form-control mb-1"/>
                                            <div className="alert alert-warning mt-3">
                                                Your email is not confirmed. Please check your inbox.<br />
                                                <a href="javascript:void(0)">Resend confirmation</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${isTabActive('account-change-password') ? 'active show' : ''}`} id="account-change-password">

                                    <div className="card-body pb-2">
                                        <div className="form-group">
                                            <label className="form-label">Current password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">New password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Repeat new password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>

                                </div>
                                <div className={`tab-pane fade ${isTabActive('notifications') ? 'active show' : ''}`} id="notifications">
                                    <div className="card-body pb-2">
                                        <h6 className="mb-4">Activity</h6>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Email me when someone comments on my article</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Email me when someone answers on my forum thread</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Email me when someone follows me</span>
                                            </label>
                                        </div>
                                    </div>
                                    <hr className="border-light m-0" />
                                    <div className="card-body pb-2">
                                        <h6 className="mb-4">Application</h6>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">News and announcements</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Weekly product updates</span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="switcher">
                                                <input type="checkbox" className="switcher-input" />
                                                <span className="switcher-indicator">
                                                    <span className="switcher-yes"></span>
                                                    <span className="switcher-no"></span>
                                                </span>
                                                <span className="switcher-label">Weekly blog digest</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane fade ${isTabActive('credit-card-info') ? 'active show' : ''}`} id="credit-card-info">
                                    <div className="checkout-container" >
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
                                        <Button text="Add Credit Card" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="text-right mt-3" id="bottom-buttons">
                    <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
                    <button type="button" className="btn btn-default">Cancel</button>
                </div>

            </div>
        </div>
    );
};

export default AccountSettings;
