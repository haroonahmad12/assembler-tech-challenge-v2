import { combineReducers } from "redux";

import authReducer from "./auth-reducer/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
