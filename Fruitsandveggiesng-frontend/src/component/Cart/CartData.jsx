import {
  Flex,
  Box,
  Heading,
  Button,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  fetchCart,
  gettotalcartRequest,
  removecart,
} from "../../Redux/Cart/action";
// import { options } from "../Payment/Payment";
import SingleCart from "./SingleCart";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { addtoOrder } from "../../Redux/Order/action";
import Address from "../Address/Address";
// key-id-  rzp_test_4KpG1twUj3b4p2
// OVSviQCttEfkGjrjBPxLp3Ui

export default function CartData() {
  const cart = useSelector((state) => state.Cart.cart);
  const totalpay = useSelector((state) => state.Cart.total);
  const [total, settotal] = useState(0);
  const dispatch = useDispatch();

  let userget;

  useEffect(() => {
    if (cart.length == 0) {
      Getcartdata();
    }
    Getcartdata();
  }, []);
  // console.log(cart, "cart");

  useEffect(() => {
    if (cart.length !== 0 || total == 0) {
      handeltotal();
    }
  }, [cart.length]);

  const Getcartdata = () => {
    dispatch(fetchCart({ userget })).then(() => {
      handeltotal();
    });
  };

  const handel = () => {
    let x = JSON.parse(localStorage.getItem("fruitaccessuser"));
    if (!x || x == "") {
      // alert("Please Login First");
    } else {
      userget = x._id;
      console.log(userget, "grtid");
    }
  };
  handel();

  const handeltotal = () => {
    let tot = 0;
    for (let i = 0; i < cart.length; i++) {
      let x = cart[i].productId.price * cart[i].quantity;
      tot += x;
    }
    settotal(tot);
    dispatch(gettotalcartRequest(total));
  };

  return (
    <Flex
      direction={{ sm: "row", md: "row", base: "column-reverse" }}
      justifyContent="space-evenly"
      maxW={{ xl: "1200px" }}
      pt={150}
      m="0 auto"
      // spaceB
      minH="100vh"
    >
      {cart.length == 0 && (
        <Center>
          <img
            width={400}
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </Center>
      )}
      <Box flex={2}>
        {cart &&
          cart.map((p) => (
            <SingleCart key={p.name} data={p} Getcartdata={Getcartdata} />
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
        border="1px solid #63ffd3bb"
        justifyContent="center"
        borderRadius={10}
        boxShadow="0 0 1px 1px #17d791bb, 0 1px 1px #ebd2d225"
        _hover={{
          boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        <Heading
          color={" #ff09c6b8"}
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
          {/* {settotal((prev) => prev + total)} */}
          Total = {total},{/* Total = {totalpay} */}
        </Heading>
        <Heading
          fontFamily="cursive"
          size={{ base: "md", sm: "sm", lg: "md" }}
          mr={10}
          mb={5}
        >
          Total Cart Items = {cart.length}
        </Heading>
        <hr></hr>
        <Address cart={cart} amount={total} />
      </Box>
    </Flex>
  );
}
