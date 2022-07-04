import { CartActions } from "./action";

const init = {
    loading: false,
    cart: [],
    error: false
};

//{type,payload} =action
export const CartReducer = (store = init, { type, payload }) => {

    switch (type) {
        case CartActions.GET_CART_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case CartActions.GET_CART_SUCCESS: {
            return {
                ...store,
                loading: false,
                cart: payload
            };
        }
        case CartActions.GET_CART_FAILURE: {
            return {
                ...store,
                loading: false,
                error: true
            };
        }
        case CartActions.POST_CART_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case CartActions.POST_CART_SUCCESS: {
            return {
                ...store,
                loading: false,
                cart: payload
            };
        }
        case CartActions.POST_CART_FAILURE: {
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