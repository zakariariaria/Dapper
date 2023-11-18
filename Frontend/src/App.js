import {Route, Routes} from "react-router-dom";
import Login from "./Forms/Login";
import AccountSettings from "./Forms/AccountSettings"
import Home from "./Forms/Home";
import Payment from "./Forms/Payment";
import Signup from "./Forms/Signup";
import PlanSelection from "./Forms/PlanSelection";
import Address from "./Forms/Address";
import Checkout from "./Forms/Checkout";
import SelectClothes from "./Forms/SelectClothes";
import 'bootstrap/dist/css/bootstrap.min.css';
import BrowseStylists from "./Forms/BrowseStylists";
import ShoppingCart from "./Forms/ShoppingCart"
import ProfilePage from "./Forms/ProfilePage"
import About from "./Forms/About"




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
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/clothes-selection" element={<SelectClothes/>}/>
        <Route path="/browse-stylist" element={<BrowseStylists/>}/>
        <Route path="/shopping-cart" element={<ShoppingCart/>}/>
        <Route path="/profile-page" element={<ProfilePage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
