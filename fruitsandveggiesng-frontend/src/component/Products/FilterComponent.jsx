import {
  Text,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  PhoneIcon,
  Heading,
} from "@chakra-ui/react";
import { VscSearch } from "react-icons/vsc";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { getdataSuccess } from "../../Redux/Filter/action";
import { fetchFruits } from "../../Redux/Fruits/action";

export const FilterComponent = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setfilter] = useState("");

  const searchHandler = () => {
    let search;
    localStorage.setItem("filterfruits", JSON.stringify(filter));
    if (filter) {
      search = {
        categories: filter,
      };
    } else {
      search = undefined;
    }

    setSearchParams(search, { replace: true });
  };

  useEffect(() => {
    searchHandler();
    dispatch(fetchFruits({ filter }));
    dispatch(getdataSuccess({ filter }));
  }, [filter, searchParams]);
  return (
    <Box w={400} m={30}>
      <InputGroup mb={10}>
        <InputRightElement
          pointerEvents="none"
          children={<VscSearch color="gray.300" />}
        />
        <Input
          borderRadius={"none"}
          focusBorderColor="lime"
          placeholder="Search Products..."
        />
      </InputGroup>
      <Box>
        <Heading
          color={"red"}
          as="u"
          size={{ base: "sm", sm: "sm", lg: "sm" }}
          fontFamily="'Finger Paint', cursive"
        >
          PRODUCT CATEGORIES
        </Heading>
        <Text
          _hover={{ color: "red", cursor: "pointer" }}
          _active={{ color: "blue", cursor: "pointer" }}
          p={2}
          value=""
          onClick={() => setfilter("")}
        >
          All (16)
        </Text>
        <hr></hr>
        <Text
          _hover={{ color: "red", cursor: "pointer" }}
          _active={{ color: "blue", cursor: "pointer" }}
          p={2}
          onClick={() => setfilter("Fruits")}
        >
          Fruits (6)
        </Text>
        <hr></hr>
        <Text
          _hover={{ color: "red", cursor: "pointer" }}
          _active={{ color: "blue", cursor: "pointer" }}
          p={2}
          onClick={() => setfilter("HerbsandSpices")}
        >
          Herbs and Spices (5)
        </Text>
        <hr></hr>
        <Text
          _hover={{ color: "red", cursor: "pointer" }}
          _active={{ color: "blue", cursor: "pointer" }}
          p={2}
          onClick={() => setfilter("Vegetables")}
        >
          Vegetables (5)
        </Text>
        <hr></hr>
      </Box>
      {/* <Select placeholder="Select option">
        <option value="A - Z">A to Z</option>
        <option value="Z - A">Z to A</option>
      </Select> */}
    </Box>
  );
};
