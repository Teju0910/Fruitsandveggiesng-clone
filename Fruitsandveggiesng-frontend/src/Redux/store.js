import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import { FruitsReducer } from "./Fruits/reducer";

import thunk from "redux-thunk";
import { CartReducer } from "./Cart/reducer";

const rootReducers = combineReducers({
    Fruits: FruitsReducer,
    Cart: CartReducer
})

export const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
);
//createStore for me store whith this reducer
console.log("initial todos", store.getState())
