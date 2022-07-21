import { UserActions } from "./action";

const init = {
    loading: false,
    user: {},
    error: false,
};


export const UserReducer = (store = init, { type, payload }) => {

    switch (type) {
        case UserActions.GET_USER_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case UserActions.GET_USER_SUCCESS: {
            return {
                ...store,
                loading: false,
                user: payload
            };
        }
        case UserActions.GET_USER_FAILURE: {
            return {
                ...store,
                loading: false,
                error: true
            };
        }

        case UserActions.PATCH_USER_SUCCESS: {
            return {
                ...store,
                loading: false,
                user: payload
            };
        }

        default:
            return store;
    }
}