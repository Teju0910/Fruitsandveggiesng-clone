import axios from "axios";

export const FilterActions = {
    GET_FILTER_REQUEST: "GET_FILTER_REQUEST",
    GET_FILTER_SUCCESS: "GET_FILTER_SUCCESS",
    GET_FILTER_FAILURE: "GET_FILTER_FAILURE",
};

export const getdataRequest = () => ({
    type: FilterActions.GET_FILTER_REQUEST
});

export const getdataSuccess = (data) => ({
    type: FilterActions.GET_FILTER_SUCCESS,
    payload: data
});

export const getdataFailure = () => ({
    type: FilterActions.GET_FILTER_FAILURE
});




