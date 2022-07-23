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

export const fetchOrder = () => (dispatch) => {
    // console.log("hi")
    const getorderActionreq = getorderRequest();
    dispatch(getorderActionreq);
    return axios({
        url: "http://localhost:5656/order/find/62d64e8120c10042110084af",
        method: "GET",
    })
        .then((res) => {
            console.log(res.data.orderproducts, "action")
            // let x = res.data.orderproducts
            const getorderActionres = getorderSuccess(res.data.orderproducts);
            dispatch(getorderSuccess(res.data.orderproducts));
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



export const addtoOrder = ({ cart }) => (dispatch) => {
    console.log(cart, "addtoorder");
    let data = {
        userId: "62d64e8120c10042110084af",
        orderproducts: cart,
    }
    let isUserpresent = axios({
        url: "http://localhost:5656/order/find/62d64e8120c10042110084af",
        method: "GET",
    }).then((res) => {
        console.log(res.data)
        if (res.data == null) {
            const postorderActionreq = postorderRequest();
            dispatch(postorderActionreq);
            return axios.post("http://localhost:5656/order", data)
                .then((res) => {
                    const postorderActionres = postorderSuccess(data);
                    dispatch(postorderActionres);
                })
                .then(() => alert("Added to order"))
                .catch((err) => {
                    // console.log(err)
                    const postorderActionerr = postorderFailure();
                    dispatch(postorderActionerr);
                    alert("Already in order")
                });
        }
        else {
            console.log("s")
            return axios.patch("http://localhost:5656/order", data)
                .then((res) => {
                    if (res.data.message) {
                        console.log(res.data.message)
                        alert(res.data.message)
                    }
                    else {
                        const postorderActionres = postorderSuccess(data);
                        dispatch(postorderActionres);
                        alert("Added to order...")
                    }
                })
                .then(() => {
                    dispatch(fetchOrder())
                })
                .catch((err) => {
                    console.log(err)
                    const postorderActionerr = postorderFailure();
                    dispatch(postorderActionerr);
                    alert("Already in order...")
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




