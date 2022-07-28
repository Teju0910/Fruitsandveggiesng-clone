import "./Services.css";
import * as React from "react";
import {
  Flex,
  Box,
  Stack,
  Center,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import "../Banners/styles.css";

function Services() {
  return (
    <Box>
      <div className="flotingimg">
        <div className="flotingimg1">
          <img
            src="https://fruitsandveggiesng.com/wp-content/uploads/2021/09/floating_fv_1w.jpg"
            alt=""
          />
        </div>
        <div className="flotingimg2">
          <img
            src="https://fruitsandveggiesng.com/wp-content/uploads/2021/09/floating_fv_2w.jpg"
            alt=""
          />
        </div>
      </div>

      <Center>
        <Flex
          mb={30}
          zIndex="10"
          mt={{ md: "20px", lg: "20px", sm: "10px", base: "10px" }}
          h={{ md: "300", lg: "300", sm: "1000", base: "1000" }}
          w="90%"
          direction={{ md: "row", lg: "row", sm: "column", base: "column" }}
        >
          <Center flex="1" className=".movediv">
            <Box
              boxShadow="inner"
              rounded="md"
              bg="white"
              p={10}
              display={{ md: "flex" }}
              maxWidth="32rem"
              borderWidth={1}
              margin={2}
              height="300px"
              textAlign="center"
              justifyContent="center"
            >
              <Stack
                align={{ base: "center", md: "stretch" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Box>
                  <Image
                    mt={{ md: "20px", lg: "20px", sm: "10px", base: "10px" }}
                    margin="auto"
                    src="https://fruitsandveggiesng.com/wp-content/uploads/2020/06/icon-8.png"
                    alt="Woman paying for a purchase"
                  />
                </Box>
                <Text className="mini" fontSize="30px" color="purple">
                  Fresh Fruits
                </Text>
                <Text> We provide farm-fresh fruits of all kinds </Text>
                <Link
                  my={1}
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                  fontWeight="semibold"
                  href="./products"
                >
                  <Button mt={5} variant="outline">
                    {"Explore More >>"}
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Center>

          <Center flex="1">
            <Box
              boxShadow="inner"
              rounded="md"
              backgroundColor="white"
              p={{ md: 9, lg: 10, base: 7 }}
              display={{ md: "flex" }}
              maxWidth="32rem"
              borderWidth={1}
              margin={2}
              height="300px"
              textAlign="center"
              justifyContent="center"
            >
              <Stack
                align={{ base: "center", md: "stretch" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Box>
                  <Image
                    maxWidth="150px"
                    margin="auto"
                    mt={{ md: "20px", lg: "20px", sm: "10px", base: "10px" }}
                    src="https://fruitsandveggiesng.com/wp-content/uploads/2020/06/icon-10.png"
                    alt="Vegetables"
                  />
                </Box>
                <Text className="mini" fontSize="30px" color="purple">
                  Vegetables
                </Text>
                <Text>We provide rich vegetables packed with Nourishments</Text>
                <Link
                  my={1}
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                  fontWeight="semibold"
                  href="./products"
                >
                  <Button variant="outline">{"Explore More >>"}</Button>
                </Link>
              </Stack>
            </Box>
          </Center>

          <Center flex="1">
            <Box
              boxShadow="inner"
              rounded="md"
              backgroundColor="white"
              p={{ md: 9, lg: 10, base: 7 }}
              display={{ md: "flex" }}
              maxWidth="32rem"
              borderWidth={1}
              margin={2}
              height="300px"
              textAlign="center"
              justifyContent="center"
            >
              <Stack
                align={{ base: "center", md: "stretch" }}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
              >
                <Box>
                  <Image
                    maxWidth="150px"
                    margin="auto"
                    mb="8px"
                    // ml="50px"
                    src="https://fruitsandveggiesng.com/wp-content/uploads/2020/06/icon-9.png"
                    alt="Woman paying for a purchase"
                  />
                </Box>
                <Text className="mini" fontSize="30px" color="purple">
                  Herbs and Spices
                </Text>
                <Text>We stock variety of herbs and aromatic spices </Text>
                <Link
                  my={1}
                  display="block"
                  fontSize="md"
                  lineHeight="normal"
                  fontWeight="semibold"
                  href="./products"
                >
                  <Button variant="outline">{"Explore More >>"}</Button>
                </Link>
              </Stack>
            </Box>
          </Center>
        </Flex>
      </Center>
    </Box>
  );
}

export default Services;
