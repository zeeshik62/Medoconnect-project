import {createStore} from "redux";
import { counterReducer } from "./reducers/counterreducer";
import { combineReducers } from "redux";
import { todoReducer } from "./reducers/TodoReducer";
const rootReducer = combineReducers({
   counter: counterReducer,
    todos:todoReducer
})

export const store=createStore(rootReducer);

