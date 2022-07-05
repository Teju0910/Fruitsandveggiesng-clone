import { Flex, Grid, Stack } from "@chakra-ui/react";
import Fruits from "./Fruits/Fruits";
import { useContext, useEffect, useState } from "react";
import { getdata } from "../Home/Data/fetchdata";
import { useDispatch, useSelector } from "react-redux";
import { fetchFruits } from "../../Redux/Fruits/action";

import { FilterComponent } from "./FilterComponent";

export default function Product() {
  const dispatch = useDispatch();
  const filt = useSelector((state) => state.Filter.filter);
  const products = useSelector((state) => state.Fruits.fruits);
  // const filt = useSelector((state) => state.Filter.filter);
  console.log(filt, "sotrese");
  useEffect(() => {
    if (products.length == 0) {
      dispatch(fetchFruits(filt));
    }
  }, [dispatch, products.length, filt]);

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
        {products.map((p) => (
          <Fruits
            key={p.id}
            id={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
          />
        ))}
      </Grid>
    </Flex>
  );
}