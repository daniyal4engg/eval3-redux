import { fetchUsers } from "./app/reducer";
import { app } from "./app/reducer";
import redux from "redux";
import { applyMiddleware } from "redux";
const combineReducers = redux.combineReducers;
import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

const rootReducer = combineReducers({ ap: app, auth: authReducer });
const thunkMiddleware = require("redux-thunk").default;
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUsers());
