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
  Text,
  Link,
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Signup({ isOpen, onClose, cancelRef, handelhideshow }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const [username, setusername] = useState("");
  const ref = useRef();
  const handleShowClick = () => setShowPassword(!showPassword);
  const navigate = useNavigate();


  const submitsignup = async () => {
    axios
      .post("http://localhost:5656/register", {
        name: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res, "res");
        alert("Signup successfully");
        handelhideshow();
        // navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        alert("Please try with another email or password");
      });
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
              <Avatar bg="purple.600" />
              <Heading color="purple.600">Create your account</Heading>
              <Box minW={{ base: "90%", md: "468px" }}>
                <Stack
                  mt={2}
                  spacing={4}
                  p="2rem"
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
                        type="text"
                        onChange={(e) => setusername(e.target.value)}
                        placeholder="User Name"
                      />
                    </InputGroup>
                  </FormControl>
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        onChange={(e) => setpass(e.target.value)}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Stack pt={3} mb={5}>
                    <Text align={"center"}>
                      Already a user?{" "}
                      <Link color={"blue.400"} onClick={handelhideshow}>
                        Login
                      </Link>
                    </Text>
                  </Stack>
                  <Center>
                    <Button
                      borderRadius={0}
                      type="submit"
                      variant="solid"
                      bg="purple.600"
                      color="white"
                      width="70%"
                      // onClick={() => handelhideshow}
                      _hover={{
                        textDecoration: "underline",
                        color: " #000000b8",
                      }}
                      onClick={() => {
                        submitsignup();
                      }}
                    >
                      Signup
                    </Button>
                  </Center>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </>
  );
}

export default Signup;
