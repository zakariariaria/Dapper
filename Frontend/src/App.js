import {Route, Routes} from "react-router-dom";
import Login from "./Forms/Login";
import AccountSettings from "./Forms/AccountSettings"
import Home from "./Forms/Home";
import Payment from "./Forms/Payment";
import Signup from "./Forms/Signup";
import PlanSelection from "./Forms/PlanSelection";
import Address from "./Forms/Address";
import {useNavigate} from 'react-router-dom';




function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/account-settings" element={<AccountSettings/>}/>
        <Route path="/plan-selection" element={<PlanSelection/>}/>
        <Route path="/address" element={<Address/>}/>
      </Routes>
    </div>
  );
}

export default App;
