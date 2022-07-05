import { FilterActions } from "./action";

const init = {
    loading: false,
    filter: "",
    error: false
};


export const FilterReducer = (store = init, { type, payload }) => {

    switch (type) {
        case FilterActions.GET_FILTER_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case FilterActions.GET_FILTER_SUCCESS: {
            return {
                ...store,
                loading: false,
                filter: payload
            };
        }
        case FilterActions.GET_FILTER_FAILURE: {
            return {
                ...store,
                loading: false,
                error: true
            };
        }

        default:
            return store;
    }
}