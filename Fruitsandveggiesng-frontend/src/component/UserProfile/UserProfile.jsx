import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../Redux/User/action";

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.user);

  let userget = JSON.parse(localStorage.getItem("fruitaccessuser"));

  useEffect(() => {
    dispatch(fetchUser(userget._id));
  }, []);

  const handellogout = () => {
    localStorage.setItem("fruitaccesstoken", JSON.stringify(""));
    localStorage.setItem("fruitaccessuser", JSON.stringify(""));
  };
  return (
    <Center py={6} pt={150}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzig_Q4ZdmZnwjL09Q4hLjgK_eJrxoUD1K6g&usqp=CAU"
          }
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {user.email}
        </Text>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          Mobile Number - {user.mobileNumber}
        </Text>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            _focus={{
              bg: "gray.200",
            }}
          >
            Edit
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            onClick={handellogout}
          >
            Logout
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
