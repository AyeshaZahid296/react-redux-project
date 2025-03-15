import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers, {});
// this is store.js

export default store;