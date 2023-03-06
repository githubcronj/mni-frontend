import axios from "axios";
import { put, takeEvery, call, takeLatest } from "redux-saga/effects";
import {
  GET_LOGIN_FETCH,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAIL,
  getProfile,
  LOGOUT,
  LOGOUT_SUCCESS,
  SUBMIT_SUPPORT_FORM,
  submitSupportForm,
  GETSEARCH_I,
} from "../store/login/actions";
import {
  GET_LOGIN_FETCH_STARTUP,
  GET_LOGIN_SUCCESS_STARTUP,
  GET_LOGIN_FAIL_STARTUP,
  LOGOUT_STARTUP,
  LOGOUT_SUCCESS_STARTUP,
  GETSEARCH_S,
} from "../store/startup/actions";
import {
  GET_REGISTER_FETCH_STARTUP,
  GET_REGISTER_FAIL_STARTUP,
} from "../store/startupRegister/actions";
import {
  GET_REGISTER_FETCH,
  GET_REGISTER_FAIL,
} from "../store/register/actions";
// import { store } from "react-notifications-component";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { cardContentClasses } from "@mui/material";
import {
  getBlog,
  getRecomendedStartup,
  getRisingStartup,
  getInvestorProfileApi,
  getUserProfile,
  getInvProfile,
  InvestorUpdate,
  startupUpdate,
  getInvestorSearchData,
  getRisingStartupS,
  getInvestorSearchDataS,
  fetchStartupDetailsAPI,
  getInvestorSearchDataI,
} from "../Api/api";

export interface ResponseGenerator {
  value?: any;
  status?: string;
  tokenData?: any;
  data?: any;
  savedData?: any;
  type?: any;
  id?: any;
  val?: any;
  profileData?: Array<any>;
}

let url = "http://localhost:9000";

function loginApi(value: any) {
  return fetch("http://localhost:9000/login?key=investor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
}
function loginApiStartup(value: any) {
  return fetch(`${url}/login?key=startup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
}

function* workGetLoginFetch(action: any) {
  const value = action.payload;
  const login: ResponseGenerator = yield call(loginApi, value);
  if (login.status === "OK") {
    if (value.isChecked === true) {
      localStorage.setItem("profile", login.tokenData);
      localStorage.setItem("type", login.type);
      localStorage.setItem("id", login.data.uId);
    } else {
      sessionStorage.setItem("profile", login.tokenData);
      sessionStorage.setItem("type", login.type);
      sessionStorage.setItem("id", login.data.uId);
    }
    yield put({ type: GET_LOGIN_SUCCESS, payload: login.data });
  } else yield put({ type: GET_LOGIN_FAIL, payload: login });
}

function* workGetLoginFetchStartup(action: any) {
  const value = action.payload;
  const login: ResponseGenerator = yield call(loginApiStartup, value);
  if (login.status === "OK") {
    if (value.isChecked === true) {
      localStorage.setItem("profile", login.tokenData);
      localStorage.setItem("type", login.type);
      localStorage.setItem("id", login.data.userId);
    } else {
      sessionStorage.setItem("profile", login.tokenData);
      sessionStorage.setItem("type", login.type);
      sessionStorage.setItem("id", login.data.userId);
    }
    yield put({ type: GET_LOGIN_SUCCESS_STARTUP, payload: login.data });
  } else yield put({ type: GET_LOGIN_FAIL_STARTUP, payload: login });
}

function* logoutHandler() {
  yield put({ type: LOGOUT_SUCCESS });
  localStorage.removeItem("profile");
  localStorage.removeItem("type");
  localStorage.removeItem("id");
  sessionStorage.removeItem("profile");
  sessionStorage.removeItem("type");
  sessionStorage.removeItem("id");
}

function* logoutHandlerStartup() {
  console.log("in logout startup handler -----||");
  yield put({ type: LOGOUT_SUCCESS_STARTUP });
  localStorage.removeItem("profile");
  localStorage.removeItem("type");
  localStorage.removeItem("id");
  sessionStorage.removeItem("profile");
  sessionStorage.removeItem("type");
  sessionStorage.removeItem("id");
}
function registerApi(value: any) {
  return fetch("http://localhost:9000/register?key=investor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
}
function registerApiStartup(value: any) {
  return fetch(`${url}/register?key=startup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
}

function* workGetRegisterFetch(action: any) {
  const value = action.payload;
  const register: ResponseGenerator = yield call(registerApi, value);
  if (register.status === "OK") {
    sessionStorage.setItem("profile", register.tokenData);
    sessionStorage.setItem("type", register.type.key);
    sessionStorage.setItem("id", register.savedData.uId);
    yield put({ type: GET_LOGIN_SUCCESS, payload: register.savedData });
  } else yield put({ type: GET_REGISTER_FAIL, payload: register });
}
function* workGetRegisterFetchStartup(action: any) {
  const value = action.payload;
  const register: ResponseGenerator = yield call(registerApiStartup, value);
  console.log("in saga -->>" + register);
  if (register.status === "OK") {
    sessionStorage.setItem("profile", register.tokenData);
    sessionStorage.setItem("type", register.type);
    console.log("-------JEJEJEJDEFNAIBFNA", register);
    sessionStorage.setItem("id", register.data.userId);
    yield put({ type: GET_LOGIN_SUCCESS_STARTUP, payload: register.data });
  } else yield put({ type: GET_REGISTER_FAIL_STARTUP, payload: register });
}

function* fetchProfile(val: any) {
  let data: ResponseGenerator = yield call(getUserProfile, val);
  let profileData = data.data.data;
  data = data.data.data;
  yield put({ type: GET_LOGIN_SUCCESS, payload: profileData[0] });
  yield put({ type: "GOTUSERPROFILE", data });
}
function* fetchProfileStartup(val: any) {
  let data: ResponseGenerator = yield call(getUserProfile, val);
  data = data.data.data;
  yield put({ type: "GOTSTARTUPPROFILE", data });
}
function* fetchStartupDetails(val: any) {
  let data: ResponseGenerator = yield call(fetchStartupDetailsAPI, val);
  console.log("fetch---StartupDetails---API", data);
  let profileData = data.data.data;
  console.log("fetch---StartupDetails---API-2", data);
  yield put({ type: "GET_STARTUP_DETAILS_SUCCESS", payload: profileData[0] });
}

function* fetchRisingStartup() {
  let data: ResponseGenerator = yield call(getRisingStartup);
  yield put({ type: "TOP_RISING", data });
}
function* fetchRisingStartupS() {
  let data: ResponseGenerator = yield call(getRisingStartupS);
  yield put({ type: "TOP_RISINGS", data });
}
function* fetchGoogleHomepage() {
  let data: ResponseGenerator = yield call(getRisingStartup);
  yield put({ type: "GOOGLE_HOMEPAGE", data });
}

function* fetchBlog() {
  let data: ResponseGenerator = yield call(getBlog);
  yield put({ type: "GETBLOGS", data });
}

function* fetchrecomenderStartups() {
  let data: ResponseGenerator = yield call(getRecomendedStartup);
  console.log("RECOMMENDED STARTUP DATA --->>", data);
  yield put({ type: "GET_REC_STARTUP", data });
}

//startup -->
function* fetchInvestorStartup() {
  let data: ResponseGenerator = yield call(getInvestorProfileApi); //////
  yield put({ type: "GET_INVESTOR", data });
}
function* fetchProfileInv(val: any) {
  let data: ResponseGenerator = yield call(getInvProfile, val);
  data = data.data.data;
  yield put({ type: "GOTINVESTORPROFILE", data });
}

// Main Root function

function* update_Profile(val: any) {
  console.log(val, "this is updated data");
  let data: ResponseGenerator = yield call(InvestorUpdate, val);
  data = data.data;
  yield put({ type: "GET_LOGIN_SUCCESS", payload: data });
}
function* update_Startup_Profile(val: any) {
  console.log(val, "this is startup updated data");
  let data: ResponseGenerator = yield call(startupUpdate, val);
  data = data.data;
  yield put({ type: "GET_LOGIN_SUCCESS_STARTUP", payload: data });
}
//Investor dashboard search
function* InvestorSearch(val: any) {
  console.log(val);
  let data: ResponseGenerator = yield call(getInvestorSearchData, val);
  // data = data.data;
  yield put({ type: "GET_SEARCH", data });
}

function* InvestorSearchS(val: any) {
  console.log(val);
  let data: ResponseGenerator = yield call(getInvestorSearchDataS, val);
  // data = data.data;
  console.log("INVESTOR SEARCH DATA -->> ", data);
  yield put({ type: "GET_SEARCH_S", data });
}

function* InvestorSearchI(val: any) {
  console.log(val);
  let data: ResponseGenerator = yield call(getInvestorSearchData, val);
  // data = data.data;
  console.log("INVESTOR SEARCH DATA -->> ", data);
  yield put({ type: "GET_SEARCH_I", data });
}

// in progress------------------
// function SubmitSupportForm(value: any) {
//   return fetch("http://localhost:9000/register?key=investor", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(value),
//   })
//     .then((response) => response.json())
//     .then((json) => json)
//     .catch((error) => {
//       throw error;
//     });
// }

// Main Root function
export function* rootSaga() {
  yield takeLatest("UPDATE_PROFILE", update_Profile);
  yield takeLatest("UPDATE_STARTUP_PROFILE", update_Startup_Profile);
  yield takeEvery(GET_LOGIN_FETCH, workGetLoginFetch);
  yield takeEvery(GET_LOGIN_FETCH_STARTUP, workGetLoginFetchStartup);
  yield takeEvery(GET_REGISTER_FETCH, workGetRegisterFetch);
  yield takeEvery(GET_REGISTER_FETCH_STARTUP, workGetRegisterFetchStartup);
  yield takeEvery(LOGOUT_STARTUP, logoutHandlerStartup);
  yield takeEvery(LOGOUT, logoutHandler);
  yield takeLatest("UPDATE_PROFILE", update_Profile);
  yield takeEvery("GETRECOMENDEDSTARTUPS", fetchrecomenderStartups);
  yield takeEvery("GETBLOG", fetchBlog);
  yield takeEvery("GOOGLEHOMEPAGEAPI", fetchGoogleHomepage);
  yield takeEvery("TOPRISING", fetchRisingStartup);
  yield takeEvery("TOPRISINGS", fetchRisingStartupS); //////////////////////////
  yield takeEvery("GETPROFILE", fetchProfile);
  yield takeEvery("GETPROFILESTARTUP", fetchProfileStartup);
  yield takeEvery("GET_STARTUP_DETAILS", fetchStartupDetails);
  yield takeEvery("GETINVESTOR", fetchInvestorStartup);
  yield takeEvery("GETPROFILEINV", fetchProfileInv); //////
  //Investor dashboard search
  yield takeEvery("GETSEARCH", InvestorSearch);
  // yield takeEvery(SUBMIT_SUPPORT_FORM, SubmitSupportForm);
  // yield takeEvery(SUBMIT_SUPPORT_FORM, submitSupportForm);
  yield takeEvery(GETSEARCH_S, InvestorSearchS);
  yield takeEvery(GETSEARCH_I, InvestorSearchI);
  yield takeEvery(SUBMIT_SUPPORT_FORM, submitSupportForm);
}
