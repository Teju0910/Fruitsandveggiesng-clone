import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import { FruitsReducer } from "./Fruits/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { CartReducer } from "./Cart/reducer";
import { FilterReducer } from "./Filter/reducer";
import { UserReducer } from "./User/reducer";
import { OrderReducer } from "./Order/reducer";

const rootReducers = combineReducers({
    Fruits: FruitsReducer,
    Filter: FilterReducer,
    Cart: CartReducer,
    User: UserReducer,
    Order: OrderReducer,
})


export const store = createStore(rootReducers, composeWithDevTools(
    // rootReducers,
    applyMiddleware(thunk),
    // other store enhancers if any
));


// export const store = createStore(
//     rootReducers,
//     applyMiddleware(thunk)

// );
//createStore for me store whith this reducer
console.log("initial todos", store.getState())
