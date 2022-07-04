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
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Signup({ isOpen, onClose, cancelRef, handelhideshow }) {
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
              <Avatar bg="purple.600" />
              <Heading color="purple.600">Create your account</Heading>
              <Box minW={{ base: "90%", md: "468px" }}>
                <form>
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
                        <Input type="text" placeholder="User Name" />
                      </InputGroup>
                    </FormControl>
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
                        onClick={() => handelhideshow}
                        _hover={{
                          textDecoration: "underline",
                          color: " #000000b8",
                        }}
                      >
                        Signup
                      </Button>
                    </Center>
                  </Stack>
                </form>
              </Box>
            </Stack>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </>
  );
}

export default Signup;
