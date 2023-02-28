import {combineReducers, createStore} from "redux";
import dataReducer from "./Reducers/dataReducer";

const reducers = combineReducers({
    data:dataReducer
})


const store = createStore(reducers)

export default store