import {
  GET_LOGIN_SUCCESS_STARTUP,
  GET_LOGIN_FAIL_STARTUP,
  LOGOUT_SUCCESS_STARTUP,
  RECENTLY_VIEWED,
  GET_STARTUP_DETAILS_SUCCESS,
} from "./actions";

const initialState: any = {
  login: [],
  error: null,
  isLoggedIn: false,
  token: localStorage.getItem("token"), // not in use
  type: "",
  investorProfile: [],
  inProfile: {},
  recentlyViewed: [],
  topRisingDataS: [],
  search: [],
};

const startupReducer = (state = initialState, action: any) => {
  console.log(
    "data received in startupReducer --->",
    action.type,
    action.payload
  );
  switch (action.type) {
    case GET_LOGIN_SUCCESS_STARTUP:
      return {
        ...state,
        login: [action.payload],
        isLoggedIn: true,
        error: null,
        type: "startup",
      };
    case GET_STARTUP_DETAILS_SUCCESS:
      return {
        ...state,
        login: [action.payload],
        isLoggedIn: true,
        error: null,
        type: "startup",
      };
    case GET_LOGIN_FAIL_STARTUP:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload.message.toUpperCase(),
        type: "",
      };
    case LOGOUT_SUCCESS_STARTUP:
      console.log("in logout success startup --->>>");
      return {
        ...state,
        login: [],
        isLoggedIn: false,
        type: "",
      };
    case "GET_INVESTOR": {
      console.log(" IN REDUCER action.data --> reducer", action.data.data);
      return { ...state, investorProfile: action.data.data.data };
    }
    case "GOTINVESTORPROFILE": {
      return { ...state, inProfile: action.data.data };
    }
    case "GETPROFILEINV": {
      return { ...state, getProfileData: action.payload };
    }
    case "TOP_RISINGS": {
      return { ...state, topRisingDataS: action.data };
    }
    case "GET_SEARCH_S": {
      console.log("my reducer for search", action.data);
      return { ...state, search: action.data };
    }
    case RECENTLY_VIEWED: {
      let flag: any = false;
      if (state.recentlyViewed.length == 0) {
        return {
          ...state,
          recentlyViewed: [action.payload, ...state.recentlyViewed],
        };
      } else {
        for (let i: any = 0; i < state.recentlyViewed.length; i++) {
          if (state.recentlyViewed[i]._id == action.payload._id) {
            break;
          } else if (
            state.recentlyViewed[i]._id != action.payload._id &&
            i == state.recentlyViewed.length - 1
          ) {
            flag = true;
          }
        }
        if (flag) {
          return {
            ...state,
            recentlyViewed: [action.payload, ...state.recentlyViewed],
          };
        } else {
          return { ...state, recentlyViewed: state.recentlyViewed };
        }
      }
    }
    default:
      return state;
  }
};

export default startupReducer;
