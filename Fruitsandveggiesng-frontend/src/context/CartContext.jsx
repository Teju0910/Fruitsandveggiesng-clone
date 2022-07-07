import React from "react";
import { createContext, useState } from "react";
import { useContext, useEffect } from "react";
import { deletecart, getcartdata } from "../component/Home/Data/fetchdata";
import { addtocart } from "../component/Home/Data/fetchdata";

export const CartContext = React.createContext();
export const CartContextProvider = ({ children }) => {
  const [cartcount, setcartcount] = useState(0);
  const [cart, setcart] = useState([]);
  const [total, settotal] = useState(0);

  // useEffect(() => {
  //   getcartdata(setcart, setcartcount);
  //   cart.map((e) => {
  //     settotal((prev) => prev + e.price);
  //   });
  // }, []);

  return (
    <CartContext.Provider
      // value={{ deletecart, addtocart, cart, cartcount, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
