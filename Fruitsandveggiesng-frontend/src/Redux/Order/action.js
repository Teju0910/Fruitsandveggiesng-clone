import axios from "axios";

export const OrderActions = {
    GET_ORDER_REQUEST: "GET_ORDER_REQUEST",
    GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS",
    GET_ORDER_FAILURE: "GET_ORDER_FAILURE",
    POST_ORDER_REQUEST: "POST_ORDER_REQUEST",
    POST_ORDER_SUCCESS: "POST_ORDER_SUCCESS",
    POST_ORDER_FAILURE: "POST_ORDER_FAILURE",
    DELETE_ORDER_FAILURE: "DELETE_ORDER_FAILURE",
};

export const getorderRequest = () => ({
    type: OrderActions.GET_ORDER_REQUEST
});

export const getorderSuccess = (order) => ({
    type: OrderActions.GET_ORDER_SUCCESS,
    payload: order
});

export const getorderFailure = () => ({
    type: OrderActions.GET_ORDER_FAILURE
});

export const fetchOrder = ({ userget }) => (dispatch) => {
    console.log("hi", userget)
    let userId = userget
    const getorderActionreq = getorderRequest();
    dispatch(getorderActionreq);
    return axios({
        url: `http://localhost:5656/order/find/${userId}`,
        method: "GET",
    })
        .then((res) => {
            console.log(res.data, "ac.tion")
            // let x = res.data.orderproducts
            const getorderActionres = getorderSuccess(res.data);
            dispatch(getorderSuccess(res.data));
        })
        .catch((err) => {
            const getorderActionerr = getorderFailure();
            dispatch(getorderActionerr);
            // console.log("c")
            console.log(err, "err")
        });
};


export const postorderRequest = () => ({
    type: OrderActions.POST_ORDER_REQUEST
});

export const postorderSuccess = (data) => ({
    type: OrderActions.POST_ORDER_SUCCESS,
    payload: data
});

export const postorderFailure = () => ({
    type: OrderActions.POST_ORDER_FAILURE
});



export const addtoOrder = ({ cart, address, amount, user }) => (dispatch) => {
    console.log(cart, "addtoorder");
    let data = {
        userId: user,
        products: cart,
        amount: amount,
        address: address,
    }
    let isUserpresent = axios({
        url: `http://localhost:5656/order/find/${user}`,
        method: "GET",
    }).then((res) => {
        // console.log(res.data, "addtoorder")
        if (res.data) {
            const postorderActionreq = postorderRequest();
            dispatch(postorderActionreq);
            return axios.post("http://localhost:5656/order", data)
                .then((res) => {
                    const postorderActionres = postorderSuccess(data);
                    dispatch(postorderActionres);
                })
                .then(() => dispatch(fetchOrder({ user })))
                .catch((err) => {
                    // console.log(err)
                    const postorderActionerr = postorderFailure();
                    dispatch(postorderActionerr);

                });
        }
    })
}



export const removeorder = ({ id }) => (dispatch) => {
    // console.log(id, "oi")
    const res = axios
        .put(`http://localhost:5656/order/removeorder`, {
            productId: id,
            userId: "62d64e8120c10042110084af",
        })
        .then(() => {
            dispatch(fetchOrder())
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export const gettotalorderRequest = (total) => ({
    type: OrderActions.GET_TOTALORDER_SUCCESS,
    payload: total
});




