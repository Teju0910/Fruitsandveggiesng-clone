import axios from "axios";

export const UserActions = {
    GET_USER_REQUEST: "GET_USER_REQUEST",
    GET_USER_SUCCESS: "GET_USER_SUCCESS",
    GET_USER_FAILURE: "GET_USER_FAILURE",
    PATCH_USER_SUCCESS: "PATCH_USER_SUCCESS",
};

export const getdataRequest = () => ({
    type: UserActions.GET_USER_REQUEST
});

export const getdataSuccess = (data) => ({
    type: UserActions.GET_USER_SUCCESS,
    payload: data
});

export const getdataFailure = () => ({
    type: UserActions.GET_USER_FAILURE
});


export const fetchUser = (id) => (dispatch) => {
    const getdataActionreq = getdataRequest();
    dispatch(getdataActionreq);
    // console.log(`token is`, getState().auth.token);
    return axios({
        url: `http://localhost:5656/user/${id}`,
        method: "GET",
    }).then((res) => {
        // console.log(res.data, "user")
        const getdataActionres = getdataSuccess(res.data);
        dispatch(getdataActionres);
    })
        .catch((err) => {
            const getdataActionerr = getdataFailure();
            dispatch(getdataActionerr);
        });
};


// export const getsingledataSuccess = (data) => ({
//     type: UserActions.GET_SINGLEUSER_SUCCESS,
//     payload: data
// });

// export const getsingleproduct = (id) => (dispatch) => {
//     // console.log(id, "id")
//     axios({
//         url: `http://localhost:5656/user/${id}`,
//         method: "get",
//     })
//         .then((res) => {
//             // console.log(res.data, "id")
//             dispatch(getsingledataSuccess(res.data));
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
// };



