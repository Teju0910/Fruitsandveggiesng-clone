import { Flex, Box, Center, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart, gettotalcartRequest } from "../../Redux/Cart/action";
import SingleCart from "./SingleCart";

export default function CartData() {
  const cart = useSelector((state) => state.Cart.cart);
  const totalpay = useSelector((state) => state.Cart.total);
  const [total, settotal] = useState(0);

  const dispatch = useDispatch();
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
  // console.log(cart, "cart");

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
        <Button bg="#0BC5EA">Proceed to Pay</Button>
      </Box>
    </Flex>
  );
}
