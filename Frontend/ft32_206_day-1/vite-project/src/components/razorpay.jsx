// import React from "react";

// const RazorpayPayment = () => {
//   const handlePayment = () => {
//     // Check if the Razorpay SDK is loaded
//     if (!window.Razorpay) {
//       alert("Razorpay SDK is not loaded. Please check your script.");
//       return;
//     }

//     const options = {
//       key: "rzp_test_cVWAAzggSZe1De", // Replace with your Razorpay API Key
//       amount: 50000, // Amount in paise (50000 paise = 500 INR)
//       currency: "INR",
//       name: "Student Donation",
//       description: "Test Transaction",
//       image: "https://example.com/logo.png", // Optional: Add your logo URL
//       handler: function (response) {
//         // Handle the success response from Razorpay
//         alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//         console.log("Payment Response:", response);
//       },
//       prefill: {
//         name: "Aman Bind", // Prefill customer name
//         email: "aman@example.com", // Prefill customer email
//         contact: "7307752082", // Prefill customer phone number
//       },
//       notes: {
//         address: "Corporate Office",
//       },
//       theme: {
//         color: "#3399cc", // Change the color of the payment modal
//       },
//       modal: {
//         ondismiss: function () {
//           // Handle the case where the user closes the Razorpay Checkout
//           console.log("Payment popup closed by the user.");
//         },
//       },
//     };

//     // Create a new Razorpay instance with the specified options
//     const rzp = new window.Razorpay(options);

//     // Open the Razorpay payment form
//     rzp.open();
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Razorpay Payment Integration</h1>
//       <button onClick={handlePayment} style={buttonStyles}>
//         Pay Now
//       </button>
//     </div>
//   );
// };

// // Inline styles for the button (optional)
// const buttonStyles = {
//   backgroundColor: "#3399cc",
//   color: "white",
//   padding: "10px 20px",
//   fontSize: "16px",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
// };

// export default RazorpayPayment;
