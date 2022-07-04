import axios from "axios";
import React, { createContext, useReducer } from "react";

const initState = {
  products: null,
  isLoading: false,
  isLoading: false,
};

export const ProductContext = createContext();
export const ProductDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "Get_Product_Request":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "Get_Product_Responce":
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload.products,
      };
    case "Get_Product_Error":
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: null,
      };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ProductDispatchContext.Provider value={dispatch}>
      <ProductContext.Provider value={state}>
        {children}
      </ProductContext.Provider>
    </ProductDispatchContext.Provider>
  );
};

export const getdata = (dispatch) => {
  console.log(dispatch, "dispatch");
  dispatch({
    type: "Get_Product_Request",
  });

  axios({
    url: "http://localhost:8080/fruits",
    method: "get",
  })
    .then((response) => {
      dispatch({
        type: "Get_Product_Responce",
        payload: {
          products: response.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: "Get_Product_Error",
      });
    });
};
export default ProductContextProvider;
