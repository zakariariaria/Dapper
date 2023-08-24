import React,  {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import '../Styles/AccountSettings.css'
import Footer from '../Components/Footer';

function AccountSettings() {
    
    const navigate = useNavigate();

   

    const[index,setIndex] = useState(0);

    return (
        <body>
            <div id="wrapper_account">
                <div className="tabs">
                    <div className="tabsList">
                        <div className="tabHead" onClick={()=>{setIndex(0)}}>
                            <label className="tab_label">Account Info</label>
                        </div>
                        <div className="tabHead" onClick={()=>{setIndex(1)}}>
                            <label className="tab_label">Billing</label>
                        </div>
                    </div>
                </div>

                <div className="wrapper_account_info" hidden={index !=0}>
                    <h2>Account Info</h2>
                    <div className="wrapper_personal_info">
                        <div className="first_line">
                            <label>Personal info</label>
                            <a href="/">Edit</a>
                        </div>
                        <label>placeholder@email.com</label>
                    </div>
                    <div className="wrapper_personal_info">
                        <div className="first_line">
                            <label>Password</label>
                            <a href="/">Edit</a>
                        </div>
                        <label>Current password</label>
                        <label>placeholder</label>
                    </div>
                </div>
                
                <div className="wrapper_account_info" hidden={index !=1}>
                    <h2>Billing</h2>
                    <div className="wrapper_personal_info">
                        <div className="first_line">
                            <label>Payment Method on File</label>
                            <a href="/">Edit</a>
                        </div>
                </div>
                
                </div>
                
            </div>
            <Footer></Footer>
                
            
        </body>
        
    )
}

export default AccountSettings