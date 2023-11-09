import React, { useState } from "react";
import "../Styles/AccountSettings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";
import ToastNotification from "../Components/ToastNotification";

const AccountSettings = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("account-general");
  const [showToast, setShowToast] = useState(false);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const handleResendConfirmation = () => {
    setShowToast(true); // To show the toast notification
  };
  const edit_icon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-pencil-square"
        viewBox="0 0 16 16"
      >
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path
          fill-rule="evenodd"
          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
        />
      </svg>
    </>
  );
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
        <img src={props.imgSrc} />
      </div>
    </div>
  );

  const Button = (props) => (
    <button className="checkout-btn" type="button">
      {props.text}
    </button>
  );

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToastNotification
          show={showToast}
          onClose={() => setShowToast(false)}
          message="Your email is not confirmed. Please check your inbox."
        />
      </div>
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <a
                  className={`list-group-item list-group-item-action ${
                    isTabActive("account-general") ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("account-general")}
                >
                  General
                </a>
                <a
                  className={`list-group-item list-group-item-action ${
                    isTabActive("account-change-password") ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("account-change-password")}
                >
                  Change password
                </a>
                <a
                  className={`list-group-item list-group-item-action ${
                    isTabActive("notifications") ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("notifications")}
                >
                  Notifications
                </a>
                <a
                  className={`list-group-item list-group-item-action ${
                    isTabActive("credit-card-info") ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("credit-card-info")}
                >
                  Credit Cards
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    isTabActive("account-general") ? "active show" : ""
                  }`}
                  id="account-general"
                >
                  <div className="card-body">
                    <div
                      className="form-group-edit"
                      style={{ display: "flex", flexDirection: "row", marginBottom:"1rem"}}
                    >
                      <div className="form-group" style={{ width: "50%" }}>
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" disabled={!isNameEditable} />
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-xsm"
                        style={{fontSize:"12px"}}
                        onClick={() => setIsNameEditable(true)}
                      >
                        {edit_icon} Edit Name
                      </button>
                    </div>
                    <div
                      className="form-group-edit"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <div className="form-group" style={{ width: "50%" }}>
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" disabled={!isEmailEditable} />
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-xsm"
                        style={{fontSize:"12px"}}
                        onClick={() => setIsEmailEditable(true)}

                      >
                        {edit_icon} Edit Email
                      </button>
                    </div>
                    <button
                          type="button"
                          onClick={handleResendConfirmation}
                          class="btn btn-dark btn-sm"
                          style={{marginTop:"1rem"}}
                        >
                          Resend confirmation
                        </button>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    isTabActive("account-change-password") ? "active show" : ""
                  }`}
                  id="account-change-password"
                >
                  <div className="card-body pb-2">
                    <div className="form-group" style={{ width: "50%" }}>
                      <label className="form-label">Current password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group" style={{ width: "50%" }}>
                      <label className="form-label">New password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group" style={{ width: "50%" }}>
                      <label className="form-label">Repeat new password</label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    isTabActive("notifications") ? "active show" : ""
                  }`}
                  id="notifications"
                >
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Activity</h6>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Email me when someone comments on my article
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Email me when someone answers on my forum thread
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Email me when someone follows me
                        </span>
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
                        <span className="switcher-label">
                          News and announcements
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Weekly product updates
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes"></span>
                          <span className="switcher-no"></span>
                        </span>
                        <span className="switcher-label">
                          Weekly blog digest
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    isTabActive("credit-card-info") ? "active show" : ""
                  }`}
                  id="credit-card-info"
                >
                  <div className="checkout-container">
                    <Input label="Cardholder's Name" type="text" name="name" />
                    <Input
                      label="Card Number"
                      type="number"
                      name="card_number"
                      imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
                    />
                    <div className="row">
                      <div className="col">
                        <Input
                          label="Expiration Date"
                          type="month"
                          name="exp_date"
                        />
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
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
          &nbsp;
          <button type="button" className="btn btn-default">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
