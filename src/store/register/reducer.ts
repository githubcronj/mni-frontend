import { GET_REGISTER_SUCCESS, GET_REGISTER_FAIL } from "./actions";

const initialState = {
  register: [],
  error: null,
  isLoggedIn: false,
  token: "",
  type: "",
};
const registerReducerHandler = (state = initialState, action: any) => {
  // console.log("in register reducer ---> ", action.payload);
  switch (action.type) {
    case GET_REGISTER_SUCCESS: // not in use
      return {
        ...state,
        // register: action.register,
        isLoggedIn: true,
        error: null,
        type: "investor",
      };
    case GET_REGISTER_FAIL:
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

export default registerReducerHandler;
