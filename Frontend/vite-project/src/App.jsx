
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Home} from "./components/home" 


import "./styles/styles.css"

import { Navbar } from "./components/navbar";

import { Landing } from "./components/landing";
import Rozarpay from "./Rozarpay";
import  Login  from "./pages/login";

import Signup from "./pages/register";


function App() {
  return (
    <>
     <Navbar/>
    
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/landing" element={<Landing/>} />
          <Route path="/Donate" element={<Rozarpay/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;