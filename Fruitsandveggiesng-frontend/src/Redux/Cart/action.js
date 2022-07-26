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

export const fetchCart = ({ userget }) => (dispatch) => {
    // console.log("hi")
    const getcartActionreq = getcartRequest();
    dispatch(getcartActionreq);
    return axios({
        url: `http://localhost:5656/cart/find/${userget}`,
        method: "GET",
    })
        .then((res) => {
            console.log(res.data.cartproducts, "action")
            // let x = res.data.cartproducts
            const getcartActionres = getcartSuccess(res.data.cartproducts);
            dispatch(getcartSuccess(res.data.cartproducts));
        })

        .catch((err) => {
            const getcartActionerr = getcartFailure();
            dispatch(getcartActionerr);
            // console.log("c")
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

export const addtoCart = ({ id, qty, userget }) => (dispatch) => {
    console.log(id, qty, userget, "addtocart");
    let data = {
        userId: userget,
        cartproducts: [
            {
                productId: id,
                quantity: qty,
            }
        ]
    }
    let isUserpresent = axios({
        url: `http://localhost:5656/cart/find/${userget}`,
        method: "GET",
    }).then((res) => {
        console.log(res.data)
        if (res.data == null) {
            const postcartActionreq = postcartRequest();
            dispatch(postcartActionreq);
            return axios.post("http://localhost:5656/cart", data)
                .then((res) => {
                    console.log(data)
                    const postcartActionres = postcartSuccess(data);
                    dispatch(postcartActionres);
                })
                .then(() => alert("Added to cart"))
                .then(() => {
                    dispatch(fetchCart({ userget }))
                })
                .catch((err) => {
                    console.log(err)
                    const postcartActionerr = postcartFailure();
                    dispatch(postcartActionerr);
                    alert("Already in cart")
                });
        }
        else {
            console.log("s")
            return axios.patch("http://localhost:5656/cart", data)
                .then((res) => {
                    console.log(data)
                    if (res.data.message) {
                        console.log(res.data.message)
                        alert(res.data.message)
                    }
                    else {
                        const postcartActionres = postcartSuccess(data);
                        dispatch(postcartActionres);
                        alert("Added to cart...")
                    }
                })
                .then(() => {
                    dispatch(fetchCart({ userget }))
                })
                .catch((err) => {
                    console.log(err)
                    const postcartActionerr = postcartFailure();
                    dispatch(postcartActionerr);
                });
        }
    })
}

export const removecart = ({ id, userget }) => (dispatch) => {
    // console.log(id, "oi")
    const res = axios
        .put(`http://localhost:5656/cart/removecart`, {
            productId: id,
            userId: userget,
        })
        .then(() => {
            dispatch(fetchCart())
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export const deletecart = () => (dispatch) => {
    const res = axios
        .delete(`http://localhost:5656/cart`)
        .then(() => {
            dispatch(fetchCart())
        })
        .catch((err) => {
            console.log(err.message);
        });
};

export const gettotalcartRequest = (total) => ({
    type: CartActions.GET_TOTALCART_SUCCESS,
    payload: total
});




