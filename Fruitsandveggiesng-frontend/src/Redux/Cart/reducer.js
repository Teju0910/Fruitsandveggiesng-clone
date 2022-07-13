import { CartActions } from "./action";

const init = {
    loading: false,
    cart: [],
    total: 0,
    error: false
};

//{type,payload} =action
export const CartReducer = (store = init, { type, payload }) => {
    // console.log(payload, "paylead")
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
                cart: payload,
                error: false,
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
                cart: payload,
                total: store.total + (payload.price * payload.quantity),
                error: false
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

// case todosActions.DELETE_TODO_SUCCESS:
//     return {
//         // ...store,
//         todos: store.todos.filter((todos) => { return todos.id !== payload })
//     }

// case todosActions.TOOGLE_TODO_SUCCESS:
//     return {
//         // ...store,
//         todos: store.todos?.map(todo =>
//             (todo.id == payload) ?
//                 { ...todo, status: !todo.status }
//                 : todo
//         )
//     }