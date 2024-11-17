import  { useState } from "react";
import PaymentButton from "./components/PaymentButton";


const Rozarpay = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    contact: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Dynamic Razorpay Payment</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={paymentDetails.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={paymentDetails.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Enter your contact"
          value={paymentDetails.contact}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Enter amount (INR)"
          value={paymentDetails.amount}
          onChange={handleInputChange}
        />
      </form>
      <PaymentButton paymentDetails={paymentDetails} />
    </div>
  );
};

export default Rozarpay;
