import { createStore } from "redux";
import { appReducer, initialState } from "../reducers";

const store = createStore(appReducer, initialState);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
