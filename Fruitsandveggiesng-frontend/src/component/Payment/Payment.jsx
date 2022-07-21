export const options = {
  key: "rrzp_test_4KpG1twUj3b4p2",
  amount: "100", //  = INR 1
  name: "Fruits & Veggies",
  description: "some description",
  image:
    "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv_logo-96x61-1.png",
  handler: function (response) {
    alert(response.razorpay_payment_id);
  },
  prefill: {
    name: "Tejasvini",
    contact: "9999999999",
    email: "demo@demo.com",
  },
  notes: {
    address: "some address",
  },
  theme: {
    color: "#9ef354",
    hide_topbar: false,
  },
};

//    const openPayModal = (options) => {
//     var rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

// export default Payment;
