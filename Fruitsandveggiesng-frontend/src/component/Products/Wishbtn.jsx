import {
  addtowishlist,
  deletewishlist,
  getsingleproduct,
  modifiywishlist,
} from "../Home/Data/fetchdata";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export const Wishbtn = ({ id }) => {
  const [wish, setwish] = useState(false);
  const [pro, setpro] = useState({});
  // console.log(pro, "p");

  useEffect(() => {
    modifiywishlist(pro.id, wish);
    getsingleproduct(id, setpro);
  }, [wish]);

  return (
    <Box zIndex="15" width="40px">
      {!wish ? (
        <img
          _hover={{
            boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          src="https://img.icons8.com/ios/50/000000/hearts--v1.png"
          height="10px"
          onClick={() => {
            setwish(!wish);
            modifiywishlist(pro.id, wish);
            addtowishlist(pro);
          }}
        />
      ) : (
        <img
          _hover={{
            boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          src="https://img.icons8.com/color/48/000000/hearts.png"
          height="10px"
          onClick={() => {
            setwish(!wish);
            modifiywishlist(pro.id, wish);
            deletewishlist(pro.id);
          }}
        />
      )}
    </Box>
  );
};
