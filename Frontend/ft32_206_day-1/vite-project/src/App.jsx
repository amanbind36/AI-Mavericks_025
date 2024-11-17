
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home} from "./components/home" 
import LoginForm from "./components/LoginForm"

import "./styles/styles.css"

import { Navbar } from "./components/navbar";
import SignUpForm from "./components/SignUpForm";
import { Landing } from "./components/landing";
import RazorpayPayment from "./components/razorpay";

function App() {
  return (
    <>
     <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUpForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/landing" element={<Landing/>} />
          <Route path="/razorpay" element={<RazorpayPayment/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;