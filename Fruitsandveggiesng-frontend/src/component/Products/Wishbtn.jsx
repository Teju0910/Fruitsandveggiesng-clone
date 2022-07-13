import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { addtowishlist, deletewishlist } from "../../Redux/Wishlist/action";
import {
  getsingleproduct,
  updatedatawishlist,
} from "../../Redux/Fruits/action";

export const Wishbtn = ({ isfavoutite, id, alldata, update }) => {
  // console.log(isfavoutite, id, "isfavoutite");
  const [wish, setwish] = useState(isfavoutite);
  const onefruit = useSelector((state) => state.Fruits.onefruit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsingleproduct(id));
  }, [dispatch, wish]);

  return (
    <Box zIndex="15" width="40px">
      {!isfavoutite ? (
        <img
          _hover={{
            boxShadow: "0 0 1px 2px #e90ac4bb, 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          src="https://img.icons8.com/ios/50/000000/hearts--v1.png"
          height="10px"
          onClick={() => {
            setwish(!wish);
            dispatch(updatedatawishlist({ id, wish })).then(() => {
              console.log("hi", update());
              update();
            });
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
            setwish(!isfavoutite);
            dispatch(updatedatawishlist({ id, wish }));
          }}
        />
      )}
    </Box>
  );
};
