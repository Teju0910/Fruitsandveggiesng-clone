import { Flex, Grid, Stack } from "@chakra-ui/react";
import Fruits from "./Fruits/Fruits";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFruits } from "../../Redux/Fruits/action";
import { FilterComponent } from "./FilterComponent";

export default function Product() {
  const dispatch = useDispatch();
  const filt = useSelector((state) => state.Filter.filter);
  const products = useSelector((state) => state.Fruits.fruits);

  useEffect(() => {
    if (products?.length === 0) {
      update();
    }
    // update();
  }, [dispatch, filt]);
  console.log(products, "sotrese");

  const update = () => {
    // console.log("updated");
    dispatch(fetchFruits({ filt }));
  };
  return (
    <Flex
      justifyContent="center"
      maxW={{ xl: "1200px" }}
      pt={150}
      m="0 auto"
      minH="100vh"
    >
      <FilterComponent />

      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(250px, 1fr) )"
      >
        {products.data &&
          products.data.map((p) => (
            <Fruits
              alldata={p}
              key={p._id}
              id={p._id}
              name={p.name}
              image={p.image}
              price={p.price}
              isfavoutite={p.isfavoutite}
              update={update}
              filter={filt}
            />
          ))}
      </Grid>
    </Flex>
  );
}
