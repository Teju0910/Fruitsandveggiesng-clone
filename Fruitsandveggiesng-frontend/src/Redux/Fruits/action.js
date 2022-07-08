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


export const fetchFruits = ({ filter }) => (dispatch) => {
    // console.log(filter, "paylos")
    const getdataActionreq = getdataRequest();
    dispatch(getdataActionreq);
    // console.log(`token is`, getState().auth.token);
    if (filter != "") {
        return axios({
            url: "http://localhost:8080/fruits",
            method: "GET",
            params: {
                categories: filter
            }
        }).then((res) => {
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
            url: "http://localhost:8080/fruits",
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



export const getsingleproduct = async (id, setdata) => {
    console.log(id, "id");
    await axios({
        url: `http://localhost:8080/fruits/${id}`,
        method: "get",
    })
        .then((res) => {
            setdata(res.data);
        })
        .catch((err) => {
            console.log(err.message);
        });
};


