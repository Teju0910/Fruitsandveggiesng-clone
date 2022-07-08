import axios from "axios";

export const CartActions = {
    GET_CART_REQUEST: "GET_CART_REQUEST",
    GET_CART_SUCCESS: "GET_CART_SUCCESS",
    GET_CART_FAILURE: "GET_CART_FAILURE",
    POST_CART_REQUEST: "POST_CART_REQUEST",
    POST_CART_SUCCESS: "POST_CART_SUCCESS",
    POST_CART_FAILURE: "POST_CART_FAILURE",
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
    console.log("hi")
    const getcartActionreq = getcartRequest();
    dispatch(getcartActionreq);

    return axios({
        url: "http://localhost:8080/cartdata",
        method: "GET",
    })
        .then((res) => {
            // console.log(res.data, "res")
            const getcartActionres = getcartSuccess(res.data);
            dispatch(getcartActionres);
        })
        .catch((err) => {
            const getcartActionerr = getcartFailure();
            dispatch(getcartActionerr);
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
    const postcartActionreq = postcartRequest();
    dispatch(postcartActionreq);
    return axios.post("http://localhost:8080/cartcart", payload)
        .then((res) => {
            const postcartActionres = postcartSuccess(res.cart);
            dispatch(postcartActionres);
        })
        .then(() => alert("Added to cart"))
        .catch((err) => {
            const postcartActionerr = postcartFailure();
            dispatch(postcartActionerr);
            alert("Already in cart")
        });
}

export const updateqtychrt = async ({ id, qty }) => {
    // console.log(qty, "oi")
    const res = await axios
        .patch(`http://localhost:8080/cartcart/${id}`, {
            quantity: qty,
        })
        .catch((err) => {
            console.log(err.message);
        });
};


export const deletecart = async (id) => {
    await axios
        .delete(`http://localhost:8080/cartcart/${id}`)
        .then(() => alert("Removed from Cart"));
};