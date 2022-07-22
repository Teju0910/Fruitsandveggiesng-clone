import React, { useState, useRef } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Text,
  useDisclosure,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  DrawerContent,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Signin({ isOpen, onClose, cancelRef, handelhideshow }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const ref = useRef();
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();

  const submitlogin = async () => {
    axios
      .post("http://localhost:5656/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res, "res");
        alert("Login successfully");
        // dispatch(addToken(res.data.token));
        // dispatch(userData(res.data.user));
        localStorage.setItem(
          "fruitaccesstoken",
          JSON.stringify(res.data.token)
        );
        localStorage.setItem("fruitaccessuser", JSON.stringify(res.data.user));
        // navigate("/");
        onClose();
      })
      .catch((err) => {
        console.log(err);
        alert("Please try with another email or password");
      });
    // .then({
    //   onClose,
    // });
  };

  return (
    <>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar bg="purple.500" />
              <Heading color="purple.400">Login </Heading>
              <Box minW={{ base: "90%", md: "468px" }}>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input
                        type="email"
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="email address"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<CFaLock color="gray.300" />}
                      />
                      <Input
                        onChange={(e) => setpass(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="right">
                      <Link>forgot password?</Link>
                    </FormHelperText>
                  </FormControl>
                  <Text
                    color=" #0b057ab8"
                    onClick={handelhideshow}
                    _hover={{
                      textDecoration: "underline",
                      color: " #057a72b8",
                    }}
                  >
                    Create New Account
                  </Text>
                  <Center>
                    <Button
                      borderRadius={0}
                      type="submit"
                      variant="solid"
                      bg="purple.600"
                      color="white"
                      width="70%"
                      // onClick={onClose}
                      _hover={{
                        textDecoration: "underline",
                        color: " #000000b8",
                      }}
                      onClick={() => {
                        submitlogin();
                      }}
                    >
                      Login
                    </Button>
                  </Center>
                </Stack>
              </Box>
            </Stack>
            <Box>
              New to us?
              {/* <Button
                color="purple.600"
                href="#"
                variant="ghost"
                onClick={handelhideshow}
              >
                Sign Up
              </Button> */}
              <Link color={"blue.400"} onClick={handelhideshow}>
                Sign Up
              </Link>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </>
  );
}

export default Signin;
