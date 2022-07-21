import { Flex, Box, Heading, Button, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchCart, gettotalcartRequest } from "../../Redux/Cart/action";
// import { options } from "../Payment/Payment";
import SingleCart from "./SingleCart";
import { AlertDialogPayment } from "./AlertDialogPayment";
import { useNavigate } from "react-router-dom";
import { getsingleproduct } from "../../Redux/Fruits/action";
// key-id-  rzp_test_4KpG1twUj3b4p2
// OVSviQCttEfkGjrjBPxLp3Ui

export default function CartData() {
  const cart = useSelector((state) => state.Cart.cart);
  const totalpay = useSelector((state) => state.Cart.total);
  const [total, settotal] = useState(0);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  console.log(cart, "cart");

  useEffect(() => {
    cart.map((e) => {
      dispatch(getsingleproduct(e.productId));
    });
  }, []);

  // https://www.freecodecamp.org/news/integrate-a-payment-gateway-in-next-js-and-react-with-razorpay-and-tailwindcss/

  // var instance = new Razorpay({
  //   key_id: "rzp_test_4KpG1twUj3b4p2",
  //   key_secret: "OVSviQCttEfkGjrjBPxLp3Ui",
  // });

  // instance.orders.create({
  //   amount: `${total * 100}`,
  //   currency: "INR",
  //   receipt: "receipt#1",
  //   // notes: {
  //   //   key1: "value3",
  //   //   key2: "value2"
  //   // }
  // });

  // console.log(instance.response, "order");

  const options = {
    key: "rzp_test_4KpG1twUj3b4p2",
    amount: `${total * 100}`, //  = INR 1
    name: "Fruites & Veggies",
    description: "Thankyou for your order",
    image:
      "https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv_logo-96x61-1.png",
    handler: function (response) {
      console.log(response, "resp");
      alert(response.razorpay_payment_id);
      // navigate("/", { replace: true });

      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
    },
    prefill: {
      name: "Tejasvini",
      contact: "7894561230",
      email: "demo@demo.com",
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "#F37254",
      hide_topbar: false,
    },
  };
  localStorage.setItem("totalfruitcost", total);
  console.log("total", total);
  console.log("totalpay", totalpay);

  useEffect(() => {
    if (cart === []) {
      dispatch(fetchCart()).then(() => {
        handeltotal();
      });
    }
    dispatch(fetchCart()).then(() => {
      handeltotal();
    });
  }, []);

  const handeltotal = () => {
    cart.map((e) => {
      settotal((prev) => prev + e.price * e.quantity);
    });
    dispatch(gettotalcartRequest(total));
  };

  const openPayModal = (options) => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Flex
      direction={{ sm: "row", md: "row", base: "column-reverse" }}
      justifyContent="space-evenly"
      maxW={{ xl: "1200px" }}
      pt={180}
      m="0 auto"
      // spaceB
      minH="100vh"
    >
      <Box flex={2}>
        {cart.map((p) => (
          <SingleCart key={p.name} data={p} />
        ))}
      </Box>
      <Box
        flex={1}
        // w={{ xl: "max-content", base: "100%" }}
        w={"max-content"}
        p={5}
        mb={5}
        h="max-content"
        fontFamily="cursive"
        textAlign="center"
        border="1px solid #2b88b0bc"
        justifyContent="center"
        borderRadius={10}
        boxShadow="0 0 1px 1px #3d527dbc, 0 1px 1px #20161626"
        _hover={{
          boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        <Heading
          color={" #710363b8"}
          fontFamily="cursive"
          size={{ base: "md", sm: "sm", lg: "md" }}
          mr={10}
          mb={5}
        >
          Cart Summery
        </Heading>
        <Heading
          fontFamily="cursive"
          size={{ base: "md", sm: "sm", lg: "md" }}
          mr={10}
          mb={5}
        >
          Total =Rs.{localStorage.getItem("totalfruitcost")}
        </Heading>
        <Heading
          fontFamily="cursive"
          size={{ base: "md", sm: "sm", lg: "md" }}
          mr={10}
          mb={5}
        >
          Total Cart Items = {cart.length}
        </Heading>
        <Button bg="#0BC5EA" onClick={() => openPayModal(options)}>
          Proceed to Pay
        </Button>
      </Box>
    </Flex>
  );
}
