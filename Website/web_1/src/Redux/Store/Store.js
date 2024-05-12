import { createStore } from "redux";
import rootreducer from "../Reducer/Main";
const store = createStore(
    rootreducer
)
export default store;