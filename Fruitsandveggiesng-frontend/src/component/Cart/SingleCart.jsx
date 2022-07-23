import {
  Button,
  Image,
  Box,
  HStack,
  Heading,
  Text,
  Center,
  Icon,
  color,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { removecart, fetchCart } from "../../Redux/Cart/action";

// const Fruits = ({ image, name, price }) => {
const SingleCart = ({ data, Getcartdata }) => {
  const dispatch = useDispatch();
  // console.log(data.name, "..");

  return (
    <Center>
      <Flex
        direction={{ sm: "row", md: "row", base: "column" }}
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
          boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        <Icon
          as={ImCross}
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            let id = data._id;
            dispatch(removecart({ id }));
          }}
        />
        <Image
          src={data.productId.image}
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
            {data.productId.name}
          </Heading>
          <Center>
            <Flex>
              Rate - {data.productId.price}
              <Box span color="gray.600" fontSize="sm">
                / unit
              </Box>
            </Flex>
          </Center>
          <Center>
            <Flex>
              Quantity - {data.quantity}
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
              {data.quantity * data.productId.price}
            </Flex>
          </Center>
        </Box>
        <Center>
          <Link
            to={`/products/categories=${data.productId.categories}/${data.productId._id}`}
          >
            <Text as="u" ml={15} color={"blue"} _hover={{ color: "green" }}>
              See more
            </Text>
          </Link>
        </Center>
      </Flex>
    </Center>
  );
};

export default SingleCart;
