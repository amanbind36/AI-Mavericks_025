import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import './styles/global.css'
import { Appcontextprovider } from './context/context.jsx'




const loadRazorpayScript = () => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  script.onload = () => console.log("Razorpay script loaded");
  script.onerror = () => console.error("Failed to load Razorpay script");
  document.body.appendChild(script);
};

const Root = () => {
  useEffect(() => {
    loadRazorpayScript(); // Load Razorpay script on component mount
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Appcontextprovider>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
    </Appcontextprovider>

   
  </StrictMode>,
)