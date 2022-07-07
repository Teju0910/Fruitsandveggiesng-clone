import axios from "axios";

export const CartActions = {
    GET_CART_REQUEST: "GET_CART_REQUEST",
    GET_CART_SUCCESS: "GET_CART_SUCCESS",
    GET_CART_FAILURE: "GET_CART_FAILURE",
    POST_CART_REQUEST: "POST_CART_REQUEST",
    POST_CART_SUCCESS: "POST_CART_SUCCESS",
    POST_CART_FAILURE: "POST_CART_FAILURE",
};

export const getdataRequest = () => ({
    type: CartActions.GET_CART_REQUEST
});

export const getdataSuccess = (data) => ({
    type: CartActions.GET_CART_SUCCESS,
    payload: data
});

export const getdataFailure = () => ({
    type: CartActions.GET_CART_FAILURE
});

export const fetchCart = () => (dispatch) => {
    const getdataActionreq = getdataRequest();
    dispatch(getdataActionreq);
    // console.log(`token is`, getState().auth.token);
    return axios({
        url: "http://localhost:8080/cartdata",
        method: "GET",
    })
        .then((res) => {
            const getdataActionres = getdataSuccess(res.data);
            dispatch(getdataActionres);
        })
        .catch((err) => {
            const getdataActionerr = getdataFailure();
            dispatch(getdataActionerr);
        });
};


export const postdataRequest = () => ({
    type: CartActions.POST_CART_REQUEST
});

export const postdataSuccess = (data) => ({
    type: CartActions.POST_CART_SUCCESS,
    payload: data
});

export const postdataFailure = () => ({
    type: CartActions.POST_CART_FAILURE
});

export const addtoCart = (payload) => (dispatch) => {
    const postdataActionreq = postdataRequest();
    dispatch(postdataActionreq);
    return axios.post("http://localhost:8080/cartdata", payload)
        .then((res) => {
            const postdataActionres = postdataSuccess(res.data);
            dispatch(postdataActionres);
        })
        .then(() => alert("Added to cart"))
        .catch((err) => {
            const postdataActionerr = postdataFailure();
            dispatch(postdataActionerr);
            alert("Already in cart")
        });
}


