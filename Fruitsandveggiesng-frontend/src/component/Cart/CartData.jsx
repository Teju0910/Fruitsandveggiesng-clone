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
import { AlertDialogPayment } from "./AlertDialogPayment";
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
    dispatch(fetchCart()).then(() => {
      handeltotal();
    });
  };

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
      <Box flex={2}>
        {cart.map((p) => (
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
        <Address />
        {/* <Button
          bg="#0BC5EA"
          onClick={() => {
            dispatch(addtoOrder({ cart }));
          }}
        >
          Add address
        </Button> */}
      </Box>
    </Flex>
  );
}
