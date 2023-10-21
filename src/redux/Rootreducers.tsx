import { combineReducers } from "redux";
import reduxStore from "./Store";
import reduxSeach from './Store2';

const rootReducer = combineReducers({
    user : reduxStore,
    product : reduxSeach 
})
export default rootReducer;
