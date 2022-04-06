import { createStore } from "redux";
import { loginReducer } from "../reducers";

const store = createStore(loginReducer, { accessToken: "" });

export default store;
