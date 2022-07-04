import { Select, Box } from "@chakra-ui/react";

export const FilterComponent = () => {
  return (
    <Box w={200} m={50}>
      <Select placeholder="Select option">
        <option value="A - Z">A to Z</option>
        <option value="Z - A">Z to A</option>
      </Select>
    </Box>
  );
};
