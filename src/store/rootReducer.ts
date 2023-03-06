import { combineReducers } from "redux";
import loginReducerHandler from "./login/reducer";
import registerReducerHandler from "./register/reducer";
import startupReducer from "./startup/reducer";
import startupReducerRegistration from "./startupRegister/reducer";

const rootReducer = combineReducers({
  loginReducerHandler,
  registerReducerHandler,
  startupReducer,
  startupReducerRegistration,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
