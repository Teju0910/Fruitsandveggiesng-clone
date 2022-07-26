import { Flex, Box, Heading, Image, Text, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { fetchOrder } from "../../Redux/Order/action";
import { createPath } from "react-router-dom";

export default function MyOrders() {
  const order = useSelector((state) => state.Order.order);
  const dispatch = useDispatch();
  let userget = JSON.parse(localStorage.getItem("fruitaccessuser"))._id;
  console.log(userget, "userget");

  useEffect(() => {
    console.log("z");
    if (order.length == 0 || order == []) {
      console.log("a");
      dispatch(fetchOrder(userget));
      console.log("b");
    } else {
      console.log("c");
      dispatch(fetchOrder(userget));
      console.log("d");
    }
  }, []);

  console.log(order, "order");

  return (
    <Box>
      <Center>
        <Heading>MY ORDERS</Heading>
      </Center>
      <Center border={"1px solid #20ba63"} ml={50} mr={50}>
        <Flex p={5}>
          <Box>
            {order.length > 0 &&
              order[0].products.map((p) => (
                <Center>
                  <Flex
                    direction={{ sm: "row" }}
                    w={"max-content"}
                    mb={5}
                    p={5}
                    fontFamily="cursive"
                    textAlign="center"
                    border="1px solid #eff2f8bd"
                    justifyContent="center"
                    borderRadius={10}
                    boxShadow="0 0 1px 1px #eff2f8bd, 0 1px 1px #f7f7f726"
                    _hover={{
                      boxShadow:
                        "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                  >
                    <Image
                      src={p.productId.image}
                      alt=""
                      p={2}
                      ml={10}
                      height={100}
                      justifyContent="center"
                    />

                    <Box>
                      <Heading
                        color="orangered"
                        size="sm"
                        textTransform="capitalize"
                        fontFamily="cursive"
                        _hover={{
                          color: " #057a72b8",
                        }}
                      >
                        {p.productId.name}
                      </Heading>
                      <Center>
                        <Flex>
                          Rate - {p.productId.price}
                          <Box span color="gray.600" fontSize="sm">
                            / unit
                          </Box>
                        </Flex>
                      </Center>
                      <Center>
                        <Flex>
                          Quantity - {p.quantity}
                          <Box span color="gray.600" fontSize="sm">
                            Kg
                          </Box>
                        </Flex>
                      </Center>
                      <Center>
                        <Flex>
                          Total Price -
                          <Box span color="gray.600" fontSize="sm">
                            Rs
                          </Box>
                          {p.quantity * p.productId.price}
                        </Flex>
                      </Center>
                    </Box>
                  </Flex>
                </Center>
              ))}
          </Box>
          <Box p={10}>
            <Text>
              <span style={{ color: "Red" }}>Booking Time :- </span>
              {order[0] && order[0].createdAt}
            </Text>
            <Text>
              <span style={{ color: "Red" }}>Total Paid :-</span>{" "}
              {order[0] && order[0].amount}
            </Text>
            <Text>
              <span style={{ color: "Red" }}> Address :-</span>{" "}
            </Text>
            <Text>
              <span style={{ color: "#0e8843" }}>building/House No -</span>
              {order[0] && order[0].address.building}
            </Text>
            <Text>
              <span style={{ color: "#0e8843" }}>City -</span>
              {order[0] && order[0].address.city}
            </Text>
            <Text>
              <span style={{ color: "#0e8843" }}> State -</span>
              {order[0] && order[0].address.state}
            </Text>
            <Text>
              <span style={{ color: "#0e8843" }}> PinCode -</span>
              {order[0] && order[0].address.zipcode}
            </Text>
            <Text>
              <span style={{ color: "#0e8843" }}> Status -</span>
              Order Booked
            </Text>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}
