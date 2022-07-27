import {
  Button,
  Image,
  Box,
  Stack,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Wishbtn } from "../Wishbtn";
import { useSelector } from "react-redux";

const Fruits = ({ id, name, image, price, isfavoutite, alldata, update }) => {
  const filt = useSelector((state) => state.Filter.filter);
  var filterfruits = JSON.parse(localStorage.getItem("filterfruits"));

  return (
    <Stack
      width={280}
      p={5}
      fontFamily="cursive"
      textAlign="center"
      border="1px solid #eff2f8bd"
      justifyContent="center"
      // borderRadius={10}
      boxShadow="0 0 1px 1px #eff2f8bd, 0 1px 1px rgba(0, 0, 0, .15)"
      _hover={{
        boxShadow: "0 0 1px 2px #f6af2bb9, 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      {/* <Link to={`/fruits/${id}`}> */}
      <Image
        src={image}
        alt=""
        height={160}
        width="100%"
        justifyContent="center"
      />
      <Box>
        <Heading
          color=" #000000b8"
          size="2sm"
          textTransform="capitalize"
          fontFamily="cursive"
          _hover={{
            color: " #057a72b8",
          }}
        >
          {name}
        </Heading>
        <Box>
          {/* Rate - {price} */}
          {/* <Box as="span" color="gray.600" fontSize="sm">
            / unit
          </Box> */}
          <Center mt={3}>
            <Wishbtn
              id={id}
              isfavoutite={isfavoutite}
              alldata={alldata}
              update={update}
              filter={filt}
            />
            <Link to={`/products/categories=${filterfruits}/${id}`}>
              <Text as="u" ml={15} color={"blue"} _hover={{ color: "green" }}>
                See more
              </Text>
            </Link>
          </Center>
        </Box>
      </Box>
      {/* </Link> */}
    </Stack>
  );
};

export default Fruits;
