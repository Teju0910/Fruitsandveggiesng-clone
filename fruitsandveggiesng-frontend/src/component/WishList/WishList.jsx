import { Flex, Grid, Center } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFruits } from "../../Redux/Fruits/action";
import Fruits from "../Products/Fruits/Fruits";

export default function WishList() {
  const dispatch = useDispatch();
  const filt = useSelector((state) => state.Filter.filter);
  const products = useSelector((state) => state.Fruits.fruits);

  useEffect(() => {
    if (products?.length === 0) {
      update();
    }
    // update();
  }, [dispatch, filt]);
  // console.log(products, "sotrese");

  const update = () => {
    console.log("updated");
    dispatch(fetchFruits({ filt }));
  };

  console.log(products, "wish");
  return (
    <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: "1200px" }}
      pt={150}
      m="0 auto"
      minH="100vh"
    >
      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
        {products.data &&
          products.data.map(
            (p) =>
              p.isfavoutite == true && (
                <Fruits
                  alldata={p}
                  key={p.name}
                  id={p._id}
                  name={p.name}
                  image={p.image}
                  price={p.price}
                  isfavoutite={p.isfavoutite}
                  filter={filt}
                />
              )
          )}
      </Grid>
    </Flex>
  );
}
