import { combineReducers } from "redux";
import { Cartreducer } from "./Reducer";
import {  wishreducer} from "./Reducer";
 const rootreducer = combineReducers({
    Cartreducer,
    wishreducer
 })
 export default rootreducer;