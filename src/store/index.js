import reducer from "./reducer/index";
import {
  createStore
} from "redux";

const store = createStore(reducer);
export default store;