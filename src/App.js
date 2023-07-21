import {Route, Routes} from "react-router-dom";
import Login from "./Forms/Login";
import Test from "./Forms/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
