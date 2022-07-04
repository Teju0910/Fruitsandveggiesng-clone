import React, { useState } from "react";
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
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Signin({ isOpen, onClose, cancelRef, handelhideshow }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef();

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
                <form>
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
                        <Input type="email" placeholder="email address" />
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
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={handleShowClick}
                          >
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
                        onClick={onClose}
                        _hover={{
                          textDecoration: "underline",
                          color: " #000000b8",
                        }}
                      >
                        Login
                      </Button>
                    </Center>
                  </Stack>
                </form>
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
