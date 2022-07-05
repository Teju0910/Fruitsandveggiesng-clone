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

export const FilterComponent = () => {
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
        <Text p={2}>All (5)</Text>
        <hr></hr>
        <Text p={2}>Fruits (5)</Text>
        <hr></hr>
        <Text p={2}>Herbs and Spices (3)</Text>
        <hr></hr>
        <Text p={2}>Vegetables (3)</Text>
        <hr></hr>
      </Box>
      {/* <Select placeholder="Select option">
        <option value="A - Z">A to Z</option>
        <option value="Z - A">Z to A</option>
      </Select> */}
    </Box>
  );
};
