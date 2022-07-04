import { Carousel } from "react-carousel-minimal";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FiPlus, FiMinus, FiHeart } from "react-icons/fi";
import { AiTwotoneHeart } from "react-icons/ai";
import "../../Home/Banners/styles.css";
import axios from "axios";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Text,
  Link,
  Stack,
  Button,
  Center,
} from "@chakra-ui/react";
import "./SingleProduct.css";
import { Wishbtn } from "../Wishbtn";
import { CartContext } from "../../../context/CartContext";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../Redux/Cart/action";

const SingleProduct = () => {
  const [pro, setpro] = useState([]);
  const [qty, setqty] = useState(1);
  const [wish, setwish] = useState(false);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    getsingleData();
  }, [wish]);

  const getsingleData = async () => {
    let data = await axios
      .get(`http://localhost:8080/fruits/${id}`)
      .then((res) => {
        setpro(res.data);
      });
  };

  const handleQty = (value, qty) => {
    if (qty <= 1 && value == "-1") {
      alert("Quantity cant be 0");
      return;
    }
    if (qty > 4 && value == "1") {
      alert("You can't buy more than 5 Products");
      return;
    }
    setqty((prev) => prev + value);
    // updatecartqty(value, id);
  };
  return (
    <Box
      p={{ base: "10", md: "20", sm: "10", xs: "10" }}
      pt={40}
      m={{ base: "40", md: "40", sm: "10", xs: "10", lg: "50" }}
      pl={{ base: "10", lg: "20" }}
      bg="#FFF5F7"
      borderRadius={20}
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Box>
          <Carousel
            data={[
              {
                image: `${pro.image}`,
              },
              {
                image: `${pro.image}`,
              },
              {
                image: `${pro.image}`,
              },
            ]}
            time={3000}
            width={{ base: "1000px", md: "500px" }}
            height="400px"
            // captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "10px auto",
            }}
          />
        </Box>
        <Box p={10} textAlign="center" justifyContent="center">
          <Flex>
            <Heading as="h1" size="2xl" id="title" p={8} color="purple">
              {pro.name}
            </Heading>
            <Wishbtn id={pro.id} />
          </Flex>

          <Heading as="h6" size="sm" m={3} className="mrp">
            MRP : Rs.{pro.mrp}
          </Heading>
          <Heading as="h1" size="md" ml={3} className="price">
            Price : Rs.{pro.price}
          </Heading>
          <Heading as="h6" size="xs" m={3} className="save">
            SAVE UP To : {pro.mrp}%
          </Heading>

          <Center p={3}>
            <IconButton
              aria-label="Add to friends"
              onClick={() => handleQty(1, qty)}
              icon={<FiPlus />}
              m={3}
            />
            <Text fontSize="xl">{qty}</Text>
            <IconButton
              m={3}
              aria-label="Add to friends"
              onClick={() => handleQty(-1, qty)}
              icon={<FiMinus />}
            />
          </Center>

          <Text m={3}>Standard: 02 Jun, 9:00AM - 1:30PM</Text>

          <Button
            m={{ base: "5", md: "30" }}
            // m={5}
            size="md"
            height="48px"
            fontFamily="cursive"
            width="200px"
            bg="#0BC5EA"
            _hover={{ bg: "#f30000", color: "white" }}
            onClick={() => dispatch(addtoCart(pro))}
          >
            Add to Cart
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
// direction={{ base: "column", md: "row" }}
export default SingleProduct;
