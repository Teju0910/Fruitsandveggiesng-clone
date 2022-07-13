import { FruitsActions } from "./action";

const init = {
    loading: false,
    fruits: [],
    onefruit: {},
    error: false,
};


export const FruitsReducer = (store = init, { type, payload }) => {

    switch (type) {
        case FruitsActions.GET_FRUITS_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case FruitsActions.GET_FRUITS_SUCCESS: {
            return {
                ...store,
                loading: false,
                fruits: payload
            };
        }
        case FruitsActions.GET_FRUITS_FAILURE: {
            return {
                ...store,
                loading: false,
                error: true
            };
        }

        case FruitsActions.GET_SINGLEFRUITS_SUCCESS: {
            return {
                ...store,
                loading: false,
                onefruit: payload
            };
        }

        case FruitsActions.PATCH_FRUITS_SUCCESS: {
            return {
                ...store,
                loading: false,
                onefruit: payload
            };
        }

        default:
            return store;
    }
}