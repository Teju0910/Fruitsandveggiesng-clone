import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  HStack,
  Box,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Address() {
  let hmac_sha256 = require("crypto-js/hmac-sha256");
  let razorpayOrderId;
  let razorpayPaymentId;
  let razorpaySignature;
  let navigate = useNavigate();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    let x;
    const result = await axios
      .post("http://localhost:5656/orders/create")
      .then((res) => {
        // var { amount, id: order_id, currency } = res.data;
        x = res.data;
        razorpayOrderId = res.data.razorpayOrderId;
        razorpayPaymentId = res.data.razorpayPaymentId;
        razorpaySignature = res.data.razorpaySignature;
        console.log(res.data, "res");
      })
      .catch((err) => {
        console.log(err, "res");
      });
    // console.log(result.data, "trsult")

    // if (!result.data) {
    //   alert("Server error. Are you online?");
    //   return;
    // }

    const { amount, id: order_id, currency } = x;
    console.log("a");

    const options = {
      key: "rzp_test_4KpG1twUj3b4p2",
      amount: amount.toString(),
      currency: currency,
      name: "Fruits and Veggies",
      description: "Test Transaction",
      image:
        "https://razorpay.com/docs/build/browser/static/razorpay-docs-dark.6f09b030.svg",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log("b");
        const result = await axios
          .post("http://localhost:5656/orders/pay", data)
          .then((res) => {
            console.log(res, "data");
            alert("Payment Done");
            navigate("/", { replace: true });
          });
      },
      callback_url: "http://localhost:5656",
      prefill: {
        name: "Tejasvini Patil",
        email: "tvpatil@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Pune",
      },
      theme: {
        color: "#61dafb",
      },
    };
    console.log("d");
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    const asdc = () => {
      console.log("z");
      let generated_signature = hmac_sha256(
        razorpayOrderId + "|" + razorpayPaymentId,
        "rzp_test_4KpG1twUj3b4p2"
      );
      console.log(generated_signature, razorpaySignature, "s");

      if (generated_signature == razorpaySignature) {
        console.log("payment is successful");
      }
    };

    asdc();
  }
  return (
    <Stack mt={100} minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Shipping Address</Heading>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email">
            <FormLabel>Address</FormLabel>
            <Input type="textarea" />
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Zip Code</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>City</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>State</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="password">
            <FormLabel>Country</FormLabel>
            <Input type="text" value={"India"} />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={displayRazorpay}
              colorScheme={"blue"}
              variant={"solid"}
            >
              Proceed to Pay
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://im.whatshot.in/img/2020/Jul/grabox-1595330640.jpg"}
        />
      </Flex>
    </Stack>
  );
}
