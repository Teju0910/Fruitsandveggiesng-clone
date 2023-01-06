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
  AlertDescription,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoOrder } from "../../Redux/Order/action";
import { deletecart } from "../../Redux/Cart/action";
const init = {
  building: "",
  zipcode: "",
  city: "",
  state: "",
  country: "India",
};
export default function Address({ cart, amount }) {
  const [address, setaddress] = useState(init);
  const dispatch = useDispatch();
  let userget;
  let user;

  const handel = () => {
    let x = JSON.parse(localStorage.getItem("fruitaccessuser"));
    if (!x || x == "") {
      // alert("Please Login First");
    } else {
      userget = x;
      user = x._id;
      console.log(userget, "grtid");
    }
  };
  handel();

  const handelchange = (e) => {
    let { id, value } = e.target;
    setaddress({ ...address, [id]: value });
  };

  const handelpayment = () => {
    if (
      address.building == "" ||
      address.zipcode == "" ||
      address.city == "" ||
      address.state == ""
    ) {
      alert("Please fill all Address Information");
      return;
    } else {
      displayRazorpay().then((res) => {
        console.log(res, "ree");
      });
      dispatch(addtoOrder({ cart, address, amount, user }));
      dispatch(deletecart("62d64e8120c10042110084af"));
    }
  };

  console.log(address, "add");
  console.log(amount, "amount");

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
      .post("https://fruitsandveggies.herokuapp.com/orders/create", { amount })
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
    console.log(x, "trsult");

    // if (!result.data) {
    //   alert("Server error. Are you online?");
    //   return;
    // }

    const { id: order_id } = x;
    console.log("a");

    const options = {
      key: "rzp_test_4KpG1twUj3b4p2",
      amount: amount.toString(),
      currency: "INR",
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
          .post("https://fruitsandveggies.herokuapp.com/orders/pay", data)
          // .then(() => {
          //   dispatchEvent(addtoOrder({ cart, address, amount }));
          // })
          .then((res) => {
            console.log(res, "data");
            // alert("Payment Done");
            navigate("/waiting", { replace: true });
          });
      },
      callback_url: "https://fruitsandveggies.herokuapp.com",
      prefill: {
        name: userget.name,
        email: userget.email,
        contact: userget.mobileNumber,
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
    <Stack mt={-100} minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"} color="orangered">
            Shipping Address
          </Heading>

          <FormControl id="email">
            <FormLabel>Address</FormLabel>
            <Input type="textarea" onChange={handelchange} id="building" />
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Zip Code</FormLabel>
                <Input type="text" onChange={handelchange} id="zipcode" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>City</FormLabel>
                <Input type="text" onChange={handelchange} id="city" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>State</FormLabel>
                <Input type="text" onChange={handelchange} id="state" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="password">
            <FormLabel>Country</FormLabel>
            <Input type="text" value={"India"} />
          </FormControl>
          <Stack spacing={6}>
            <Button
              onClick={handelpayment}
              colorScheme={"blue"}
              variant={"solid"}
            >
              Proceed to Pay
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
