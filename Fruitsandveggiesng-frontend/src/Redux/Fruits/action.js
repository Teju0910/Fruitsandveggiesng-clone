import axios from "axios";

export const FruitsActions = {
    GET_FRUITS_REQUEST: "GET_FRUITS_REQUEST",
    GET_FRUITS_SUCCESS: "GET_FRUITS_SUCCESS",
    GET_FRUITS_FAILURE: "GET_FRUITS_FAILURE",
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

export const fetchFruits = (payload) => (dispatch) => {
    console.log(payload, "paylos")
    const getdataActionreq = getdataRequest();
    dispatch(getdataActionreq);
    // console.log(`token is`, getState().auth.token);
    return axios({
        url: "http://localhost:8080/fruits",
        method: "GET",
        params: {
            categories: payload
        }
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


