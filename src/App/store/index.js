import reducer from "./reducer";
import { createStore } from "redux";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DETOOLS__EXTENSION__()
);
export default store;
