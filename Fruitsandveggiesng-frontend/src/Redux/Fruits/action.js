import axios from "../../axios/axios";

export const FruitsActions = {
    GET_FRUITS_REQUEST: "GET_FRUITS_REQUEST",
    GET_FRUITS_SUCCESS: "GET_FRUITS_SUCCESS",
    GET_FRUITS_FAILURE: "GET_FRUITS_FAILURE",
    GET_SINGLEFRUITS_SUCCESS: "GET_SINGLEFRUITS_SUCCESS",
    PATCH_FRUITS_SUCCESS: "PATCH_FRUITS_SUCCESS",
};

export const getdataRequest = () => ({
    type: FruitsActions.GET_FRUITS_REQUEST
});

export const getdataSuccess = (data) => ({
    type: FruitsActions.GET_FRUITS_SUCCESS,
    payload: data
});

export const getdataFailure = () => ({
    type: FruitsActions.GET_FRUITS_FAILURE
});


export const fetchFruits = ({ filter }) => (dispatch) => {
    console.log(filter, "paylos")
    const getdataActionreq = getdataRequest();
    dispatch(getdataActionreq);
    // console.log(`token is`, getState().auth.token);
    if (filter != "") {
        return axios({
            url: "/fruitsandveggies",
            method: "GET",
            params: {
                categories: filter
            }
        }).then((res) => {
            console.log(res.data, "res.data")
            const getdataActionres = getdataSuccess(res.data);
            dispatch(getdataActionres);
        })
            .catch((err) => {
                const getdataActionerr = getdataFailure();
                dispatch(getdataActionerr);
            });
    }
    else {
        return axios({
            url: "/fruitsandveggies",
            method: "GET",
        }).then((res) => {
            const getdataActionres = getdataSuccess(res.data);
            dispatch(getdataActionres);
        })
            .catch((err) => {
                const getdataActionerr = getdataFailure();
                dispatch(getdataActionerr);
            });
    }
};


export const getsingledataSuccess = (data) => ({
    type: FruitsActions.GET_SINGLEFRUITS_SUCCESS,
    payload: data
});

export const getsingleproduct = (id) => (dispatch) => {
    // console.log(id, "id")
    axios({
        url: `/fruitsandveggies/${id}`,
        method: "get",
    })
        .then((res) => {
            // console.log(res.data, "id")
            dispatch(getsingledataSuccess(res.data));
        })
        .catch((err) => {
            console.log(err.message);
        });
};



export const updatedatawishlist = ({ id, wish, filter }) => (dispatch) => {
    console.log(id, wish, filter, "o..i")
    axios
        .patch(`/fruitsandveggies/${id}`, {
            isfavoutite: wish,
        })
        .then((res) => {
            // console.log(res.data, "id")
            dispatch(fetchFruits({ filter }));
            dispatch(getsingleproduct(id));
        })
        .catch((err) => {
            console.log(err.message);
        });
};


