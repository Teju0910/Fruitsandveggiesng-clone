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
import { fetchCart, gettotalcartRequest } from "../../Redux/Cart/action";
// import { options } from "../Payment/Payment";
import SingleCart from "./SingleCart";
import { AlertDialogPayment } from "./AlertDialogPayment";
import { Link, useSearchParams, useNavigate } from "react-router-dom";

// key-id-  rzp_test_4KpG1twUj3b4p2
// OVSviQCttEfkGjrjBPxLp3Ui

export default function CartData() {
  const cart = useSelector((state) => state.Cart.cart);
  const totalpay = useSelector((state) => state.Cart.total);
  const [total, settotal] = useState(0);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();



  useEffect(() => {
    if (cart.length == 0) {
      dispatch(fetchCart()).then(() => {
        handeltotal();
      });
    }
    dispatch(fetchCart()).then(() => {
      handeltotal();
    });
  }, []);
  console.log(cart, "cart");

  useEffect(() => {
    if (cart.length !== 0 || total == 0) {
      handeltotal();
    }
  }, [cart.length]);

  const handeltotal = () => {
    for (let i = 0; i < cart.length; i++) {
      let x = cart[i].productId.price * cart[i].productId.quantity;
      settotal((prev) => prev + x);
    }
    dispatch(gettotalcartRequest(total));
  };


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
        <Button bg="#0BC5EA">
          <Link to="/address">Proceed to Pay</Link>
        </Button>
      </Box>
    </Flex>
  );
}
