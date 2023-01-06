import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Center,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

const Labo = () => {
  return (
    <Container maxW={"7xl"} p="15">
      <Center>
        <Heading
          as="h1"
          p="8"
          color={" #777777"}
          fontFamily="'Finger Paint', cursive"
          w={"70%"}
          fontWeight={"500"}
        >
          Producing The Finest and Good Taste Farm-fresh Foods at Unbeatable
          Prices
        </Heading>
      </Center>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://fruitsandveggiesng.com/wp-content/uploads/2020/05/s-lab_small.jpeg"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading
            fontWeight={"500"}
            size={{ base: "md", sm: "md", lg: "lg" }}
            color={" #35AF6A"}
            fontFamily="'Finger Paint', cursive"
          >
            From our farms in Jos, Plateau (Nigeria), to happy homes and shelves
            for over a decade!
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            When it comes to fresh fruits, vegetables, spices and herbs, we are
            the preferred choice. At Fruits & Veggies, we carefully source our
            wide range of farm-fresh produce from our farms, from select growers
            and markets daily
          </Text>
          <Heading size={"sm"}>Steve Bawa</Heading>
          <img
            width={"100px"}
            src="https://fruitsandveggiesng.com/wp-content/uploads/2020/06/signature-2.png"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Labo;
