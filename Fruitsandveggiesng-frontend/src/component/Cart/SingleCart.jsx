import {
  Button,
  Image,
  Box,
  Stack,
  Heading,
  Text,
  Center,
  Icon,
  color,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

// const Fruits = ({ image, name, price }) => {
const SingleCart = ({ data }) => {
  console.log(data.name, "..");
  return (
    <Stack
      width={300}
      p={5}
      fontFamily="cursive"
      textAlign="center"
      border="1px solid #eff2f8bd"
      justifyContent="center"
      borderRadius={10}
      boxShadow="0 0 1px 1px #eff2f8bd, 0 1px 1px rgba(0, 0, 0, .15)"
      _hover={{
        boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      {/* <Link to={`/fruits/${id}`}> */}
      <Icon
        as={ImCross}
        onClick={() => {
          // deletecart(id);
        }}
      />
      <Image
        src={data.image}
        alt=""
        ml={10}
        height={200}
        justifyContent="center"
      />

      <Box>
        <Heading
          color=" #3109d3b8"
          size="md"
          textTransform="capitalize"
          fontFamily="cursive"
          _hover={{
            color: " #057a72b8",
          }}
        >
          {data.name}
        </Heading>
        <Box>
          Rate - {data.price}
          <Box color="gray.600" fontSize="sm">
            / unit
          </Box>
          <Center>
            {/* <Link to={`/fruits/${data.id}`}>
              <Button variant="ghost">See more</Button>
            </Link> */}
          </Center>
        </Box>
      </Box>
      {/* </Link> */}
    </Stack>
  );
};

export default SingleCart;
