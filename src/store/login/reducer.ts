import { es } from "date-fns/locale";
import { GET_LOGIN_SUCCESS, LOGOUT_SUCCESS, GET_LOGIN_FAIL } from "./actions";

// import { GET_LOGIN_SUCCESS, GET_LOGIN_FAIL } from "./actions";

// const initialState: login[] = [];
const initialState: any = {
  login: [],
  error: null,
  type: "",
  isLoggedIn: false,
  token: localStorage.getItem("token"), // not in use
  topRisingData: [],
  blogs: [],
  recomendedStartups: [],
  profile: {},
  choosenData: {},
  choosenStartupData: {},
  recentlyViewed: [],
  search: [],
};

const loginReducerHandler = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        login: [action.payload],
        isLoggedIn: true,
        error: null,
        type: "investor",
      };
    case GET_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload.message.toUpperCase(),
        type: "",
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: [],
        isLoggedIn: false,
        type: "",
      };

    case "GOOGLE_HOMEPAGE": {
      return { ...state, topRisingData: action.data };
    }
    case "GETBLOGS": {
      return { ...state, blogs: action.data.data };
    }
    case "GET_REC_STARTUP": {
      return { ...state, recomendedStartups: action.data };
    }

    case "GOTUSERPROFILE": {
      return { ...state, profile: action.data[0] };
    }
    case "GOTSTARTUPPROFILE": {
      console.log("Action.data[0] reducer -->> ", action.data[0]);
      return { ...state, profile: action.data[0] };
    }
    // Investor dashboard search --------
    case "GET_SEARCH": {
      return { ...state, search: action.data.data };
    }
    case "GET_SEARCH_I": {
      console.log("in reducer of investor SEARCJ -->>>" , action.data.data);
      return { ...state, search: action.data.data};
    }
    // ---------------------------------------
    case "TOP_RISING": {
      return { ...state, topRisingData: action.data };
    }
    case "SAVE_CHOOSEN_DATA": {
      return { ...state, choosenData: action.payload };
    }
    case "SAVE_CHOOSENSTARTUP_DATA": {
      return { ...state, choosenStartupData: action.payload };
    }
    case "RECENTLY_VIEWED": {
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
    case "UPDATED_INVESTOR_PROFILE": {
      return { ...state, login: [...state.login, ...action.data] };
    }
    default:
      return state;
  }
};

export default loginReducerHandler;
