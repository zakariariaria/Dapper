import {Route, Routes} from "react-router-dom";
import Login from "./Forms/Login";
import Test from "./Forms/Test";
import Payment from "./Forms/Payment"
import Signup from "./Forms/Signup"
import {useNavigate} from 'react-router-dom';




function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Test />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
