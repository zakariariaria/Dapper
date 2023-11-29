import React, { useState, useEffect } from "react";
import "../Styles/AccountSettings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Components/Navbar";
import ToastNotification from "../Components/ToastNotification";
import { useNavigate } from "react-router-dom";

const AccountSettings = () => {

  const handleAddCardSubmit = (event) => {
    event.preventDefault();
  
    const cardName = event.target.cardName.value.trim();
    const cardNumber = event.target.cardNumber.value.trim();
    const expDate = event.target.expDate.value.trim();
    const cvv = event.target.cvv.value.trim();
  
    const isCardNumberValid = cardNumber.length === 16; 
    const isExpDateValid = /^\d{4}-\d{2}$/.test(expDate); 
    const isCvvValid = cvv.length === 3; 
  
    if (!isCardNumberValid || !isExpDateValid || !isCvvValid) {
      return;
    }
  
    
    setCreditCard({
      cardName,
      cardNumber,
      expDate,
      cvv,
    });
  
    let existingUsers = JSON.parse(sessionStorage.getItem("tempUsers")) || [];
    const activeUserIndex = existingUsers.findIndex((user) => user.isActive);
  
    if (activeUserIndex !== -1) {
      existingUsers[activeUserIndex].creditCardInfo = {
        cardholderName: cardName,
        cardNumber: cardNumber,
        expirationDate: expDate,
        cvv: cvv,
      };
      sessionStorage.setItem("tempUsers", JSON.stringify(existingUsers));
    }
  
    // Hide the add card form
    setShowAddCard(false);
  };
  const [showAddCard, setShowAddCard] = useState(false);

  const [creditCard, setCreditCard] = useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });
  const [activeTab, setActiveTab] = useState("account-general");
  const [showToast, setShowToast] = useState(false);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
const [passwordError, setPasswordError] = useState("");

const handleRepeatNewPasswordChange = (e) => {
  setRepeatNewPassword(e.target.value);
};

const handleDeleteCard = () => {
  setCreditCard({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  let existingUsers = JSON.parse(sessionStorage.getItem("tempUsers")) || [];
  const activeUserIndex = existingUsers.findIndex((user) => user.isActive);
  if (activeUserIndex !== -1) {
    existingUsers[activeUserIndex].creditCardInfo = {};
    sessionStorage.setItem("tempUsers", JSON.stringify(existingUsers));
  }
};

  const handleResendConfirmation = () => {
    setShowToast(true); // To show the toast notification
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  

  useEffect(() => {
    const existingUsers = JSON.parse(sessionStorage.getItem("tempUsers")) || [];
    const activeUser = existingUsers.find((user) => user.isActive);
  
    if (activeUser) {
      setUserData({
        firstName: activeUser.firstName || "",
        lastName: activeUser.lastName || "",
        email: activeUser.email || "",
        password: activeUser.password || "",
      });

      if (activeUser.creditCardInfo) {
        setCreditCard({
          cardName: activeUser.creditCardInfo.cardholderName || "",
          cardNumber: activeUser.creditCardInfo.cardNumber || "",
          expDate: activeUser.creditCardInfo.expirationDate || "",
          cvv: activeUser.creditCardInfo.cvv || "",
        });
      }
    }
  }, []);

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreditCardChange = (e) => {
    const { name, value } = e.target;
    setCreditCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Check if new password and repeat password match
    if (newPassword && newPassword !== repeatNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
  
    let existingUsers = JSON.parse(sessionStorage.getItem("tempUsers")) || [];
    const activeUserIndex = existingUsers.findIndex((user) => user.isActive);
  
    if (activeUserIndex !== -1) {
      // Update the active user's data with the current state
      existingUsers[activeUserIndex] = {
        ...existingUsers[activeUserIndex],
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        // Update password only if a new one has been entered
        password: newPassword ? newPassword : existingUsers[activeUserIndex].password,
        // Update credit card data
        creditCardInfo: {
          cardholderName: creditCard.cardName,
          cardNumber: creditCard.cardNumber,
          expirationDate: creditCard.expDate,
          cvv: creditCard.cvv,
        },
      };
  
      // Save the updated users back to sessionStorage
      sessionStorage.setItem("tempUsers", JSON.stringify(existingUsers));
  
      // Clear the new password fields after successful update and reset the edit states
      setNewPassword("");
      setRepeatNewPassword("");
      setPasswordError("");
      setIsNameEditable(false);
      setIsEmailEditable(false);
  
      // Optionally, reload the page to reflect changes
      window.location.reload();
    }
  };
  
  
  
  

  const show_icon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-eye"
        viewBox="0 0 16 16"
      >
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
      </svg>
    </>
  );

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

  const [showPassword, setShowPassword] = useState(false); // Add state for showing/hiding password

  // Function to toggle showing/hiding the password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTabClick = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  // Function to determine if a tab is active
  const isTabActive = (tabName) => activeTab === tabName;

  const Input = ({ label, type, name, value, onChange, imgSrc }) => (
    <div className="input">
      <label>{label}</label>
      <div className="input-field">
        <input 
          type={type} 
          name={name} 
          value={value} 
          onChange={onChange} 
        />
        {imgSrc && <img src={imgSrc} alt="Input field icon" />}
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
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "1rem",
                      }}
                    >
                      <div className="form-group" style={{ width: "50%" }}>
                        <label className="form-label"> First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={userData.firstName}
                          onChange={handleInputChange}
                          disabled={!isNameEditable}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-xsm"
                        style={{ fontSize: "12px" }}
                        onClick={() => setIsNameEditable(true)}
                      >
                        {edit_icon} Edit
                      </button>
                    </div>
                    <div
                      className="form-group-edit"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "1rem",
                      }}
                    >
                      <div className="form-group" style={{ width: "50%" }}>
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastName"
                          onChange={handleInputChange}
                          value={userData.lastName}
                          disabled={!isNameEditable}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-xsm"
                        style={{ fontSize: "12px" }}
                        onClick={() => setIsNameEditable(true)}
                      >
                        {edit_icon} Edit
                      </button>
                    </div>
                    <div
                      className="form-group-edit"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <div className="form-group" style={{ width: "50%" }}>
                        <label className="form-label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={userData.email}
                          onChange={handleInputChange}
                          disabled={!isEmailEditable}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-xsm"
                        style={{ fontSize: "12px" }}
                        onClick={() => setIsEmailEditable(true)}
                      >
                        {edit_icon} Edit
                      </button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <button
                          type="button"
                          onClick={handleResendConfirmation}
                          className="btn btn-dark btn-sm"
                          style={{ whiteSpace: "nowrap", marginTop: "1rem" }}
                        >
                          Resend confirmation
                        </button>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <button
                          type="button"
                          onClick={() => navigate("/plan-selection")}
                          className="btn btn-dark btn-sm"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          Manage Plan
                        </button>
                      </div>
                    </div>
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
                      <div
                        className="input-group"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          name="password"
                          value={userData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-xsm"
                        style={{ fontSize: "12px" }}
                        onClick={toggleShowPassword}
                      >
                        {show_icon} Show
                      </button>
                    </div>
                    <div className="form-group" style={{ width: "50%" }}>
                      <label className="form-label">New password</label>
                      <input
  type="password"
  className="form-control"
  value={newPassword}
  onChange={handleNewPasswordChange}
/>                    </div>
                    <div className="form-group" style={{ width: "50%" }}>
                      <label className="form-label">Repeat new password</label>
                      <input
  type="password"
  className="form-control"
  value={repeatNewPassword}
  onChange={handleRepeatNewPasswordChange}
/>                    </div>
{
  passwordError && <div className="error-message">{passwordError}</div>
}

                  </div>
                </div>

              
                <div className={`tab-pane fade ${isTabActive("credit-card-info") ? "active show" : ""}`} id="credit-card-info">
        {!showAddCard ? (
          <div>
            <h5>Credit Card Information:</h5>
            <p>Cardholder's Name: {creditCard.cardName}</p>
            <p>Card Number: {creditCard.cardNumber}</p>
            <p>Expiration Date: {creditCard.expDate}</p>
            <p>CVV: {creditCard.cvv}</p>
            <button className="btn btn-danger" onClick={handleDeleteCard}>Delete Card</button>
            <button className="btn btn-primary" onClick={() => setShowAddCard(true)}>Add New Card</button>
          </div>
        ) : (
          <form onSubmit={handleAddCardSubmit} className="checkout-container">
            <div className="input">
              <label>Cardholder's Name</label>
              <input 
                type="text" 
                name="cardName" 
                value={creditCard.cardName}
                onChange={handleCreditCardChange}
                required 
              />
            </div>
            <div className="input">
              <label>Card Number</label>
              <input 
                type="text" 
                name="cardNumber" 
                value={creditCard.cardNumber}
                onChange={handleCreditCardChange}
                required 
              />
            </div>
            <div className="input">
              <label>Expiration Date</label>
              <input 
                type="month" 
                name="expDate" 
                value={creditCard.expDate}
                onChange={handleCreditCardChange}
                required 
              />
            </div>
            <div className="input">
              <label>CVV</label>
              <input 
                type="text" 
                name="cvv" 
                value={creditCard.cvv}
                onChange={handleCreditCardChange}
                required 
              />
            </div>
            <button type="submit" className="btn btn-success">Save Card</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowAddCard(false)}>Cancel</button>
          </form>
        )}
      </div>


              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3" id="bottom-buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSaveChanges}
          >
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
