import { OrderActions } from "./action";

const init = {
    loading: false,
    order: [],
    error: false
};

//{type,payload} =action
export const OrderReducer = (store = init, { type, payload }) => {
    // console.log(payload, "orderpayload")
    switch (type) {
        case OrderActions.GET_ORDER_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case OrderActions.GET_ORDER_SUCCESS: {
            return {
                ...store,
                loading: false,
                order: payload,
                error: false,
            };
        }
        case OrderActions.GET_ORDER_FAILURE: {
            return {
                ...store,
                loading: false,
                error: true
            };
        }
        case OrderActions.POST_ORDER_REQUEST: {
            return {
                ...store,
                loading: true,
                error: false
            };
        }
        case OrderActions.POST_ORDER_SUCCESS: {
            return {
                ...store,
                loading: false,
                order: payload,
                error: false
            };
        }
        case OrderActions.POST_ORDER_FAILURE: {
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