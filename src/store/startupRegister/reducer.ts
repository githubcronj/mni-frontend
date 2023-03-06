import {
  GET_REGISTER_SUCCESS_STARTUP,
  GET_REGISTER_FAIL_STARTUP,
} from "./actions";

const initialState = {
  register: [],
  error: null,
  isLoggedIn: false,
  token: "",
  type: "",
};
const startupReducerRegistration = (state = initialState, action: any) => {
  console.log("in register reducer ---> ", action.type);
  switch (action.type) {
    case GET_REGISTER_SUCCESS_STARTUP: // not in use
      return {
        ...state,
        // register: action.register,
        isLoggedIn: true,
        error: null,
        type: "startup",
      };
    case GET_REGISTER_FAIL_STARTUP:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload.message.toUpperCase(),
        type: "",
      };
    default:
      return state;
  }
};

export default startupReducerRegistration;
