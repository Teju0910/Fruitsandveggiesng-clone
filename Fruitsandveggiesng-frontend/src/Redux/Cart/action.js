import axios from "axios";

export const CartActions = {
    GET_CART_REQUEST: "GET_CART_REQUEST",
    GET_CART_SUCCESS: "GET_CART_SUCCESS",
    GET_CART_FAILURE: "GET_CART_FAILURE",
    POST_CART_REQUEST: "POST_CART_REQUEST",
    POST_CART_SUCCESS: "POST_CART_SUCCESS",
    POST_CART_FAILURE: "POST_CART_FAILURE",
    DELETE_CART_FAILURE: "DELETE_CART_FAILURE",
    GET_TOTALCART_SUCCESS: "GET_TOTALCART_SUCCESS",
};

export const getcartRequest = () => ({
    type: CartActions.GET_CART_REQUEST
});

export const getcartSuccess = (cart) => ({
    type: CartActions.GET_CART_SUCCESS,
    payload: cart
});

export const getcartFailure = () => ({
    type: CartActions.GET_CART_FAILURE
});

export const fetchCart = () => (dispatch) => {
    // console.log("hi")
    const getcartActionreq = getcartRequest();
    dispatch(getcartActionreq);

    return axios({
        url: "http://localhost:8080/cartdata",
        method: "GET",
    })
        .then((res) => {
            // console.log(res.data, "responde")
            const getcartActionres = getcartSuccess(res.data);
            console.log("a", getcartActionres)
            dispatch(getcartSuccess(res.data));
            console.log("b")
        })
        .catch((err) => {
            const getcartActionerr = getcartFailure();
            dispatch(getcartActionerr);
            console.log("c")
            console.log(err, "err")
        });
};


export const postcartRequest = () => ({
    type: CartActions.POST_CART_REQUEST
});

export const postcartSuccess = (data) => ({
    type: CartActions.POST_CART_SUCCESS,
    payload: data
});

export const postcartFailure = () => ({
    type: CartActions.POST_CART_FAILURE
});

export const addtoCart = (payload) => (dispatch) => {
    // console.log(payload, "addtocart")
    const postcartActionreq = postcartRequest();
    dispatch(postcartActionreq);
    return axios.post("http://localhost:8080/cartdata", payload)
        .then((res) => {
            const postcartActionres = postcartSuccess(payload);
            dispatch(postcartActionres);
        })
        .then(() => alert("Added to cart"))

        .catch((err) => {
            console.log(err)
            const postcartActionerr = postcartFailure();
            dispatch(postcartActionerr);
            alert("Already in cart")
        });
}

export const updateqtychrt = async ({ id, qty }) => {
    // console.log(qty, "oi")
    const res = await axios
        .patch(`http://localhost:8080/cartdata/${id}`, {
            quantity: qty,
        })
        .catch((err) => {
            console.log(err.message);
        });
};


export const deletecart = (id) => (dispatch) => {
    axios
        .delete(`http://localhost:8080/cartdata/${id}`)
        .then(() => alert("Removed from Cart"));
};


export const gettotalcartRequest = (total) => ({
    type: CartActions.GET_TOTALCART_SUCCESS,
    payload: total
});

// export const carttotalprice = (payload) => (dispatch) => {

//     return axios.post("http://localhost:8080/carttotal", payload)
//         .then((res) => {
//             const carttotalActionres = gettotalcartRequest(payload);
//             dispatch(carttotalActionres);
//         })

//         .catch((err) => {
//             console.log(err)

//         });
// }


