import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { addtowishlist, deletewishlist } from "../../Redux/Wishlist/action";
import {
  fetchFruits,
  getsingleproduct,
  updatedatawishlist,
} from "../../Redux/Fruits/action";

export const Wishbtn = ({ isfavoutite, id, alldata, update, filter }) => {
  // console.log(isfavoutite, id, "isfavoutite");
  const [wish, setwish] = useState(isfavoutite);
  const onefruit = useSelector((state) => state.Fruits.onefruit);
  const dispatch = useDispatch();
  // console.log(id, wish, filter, "oi");
  useEffect(() => {
    // console.log("ue1");
    // update();
    dispatch(getsingleproduct(id));
  }, [wish]);

  return (
    <Box
      zIndex="15"
      width="40px"
      _hover={{
        cursor: "pointer",
      }}
    >
      {!isfavoutite ? (
        <img
          _hover={{
            boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
            cursor: "pointer",
          }}
          src="https://img.icons8.com/ios/50/000000/hearts--v1.png"
          height="10px"
          onClick={() => {
            setwish(!wish);
            dispatch(updatedatawishlist({ id, wish, filter }));
          }}
        />
      ) : (
        <img
          _hover={{
            boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
            cursor: "pointer",
          }}
          src="https://img.icons8.com/color/48/000000/hearts.png"
          height="10px"
          onClick={() => {
            setwish(!isfavoutite);
            dispatch(updatedatawishlist({ id, wish, filter }));
          }}
        />
      )}
    </Box>
  );
};
