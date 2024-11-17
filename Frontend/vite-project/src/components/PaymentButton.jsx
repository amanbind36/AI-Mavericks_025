const PaymentButton = ( paymentDetails ) => {
  const handlePayment = () => {
    const { name, email, contact, amount } = paymentDetails;

    // if (!name || !email || !contact || !amount) {
    //   alert("Please fill all the fields");
    //   return;
    // }

    const options = {
      key: "rzp_test_cVWAAzggSZe1De",
      amount: amount * 100, // Convert INR to paise
      currency: "INR",
      name: name,
      description: "Dynamic Payment",
      handler: (response) => {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
        console.log("Payment response:", response);
      },
      prefill: {
        name: name,
        email: email,
        contact: contact,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button onClick={handlePayment}>Pay Now</button>;
};

export default PaymentButton;




