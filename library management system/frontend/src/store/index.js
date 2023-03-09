import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
