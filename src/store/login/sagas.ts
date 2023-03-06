// import axios from "axios";
// import { all, call, put, takeLatest } from "redux-saga/effects";

// import { fetchLoginFailure, fetchLoginSuccess } from "./actions";
// import { FETCH_LOGIN_REQUEST } from "./actionTypes";
// import { ILogin } from "./types";
// // let token = "";
// const getLogin = () =>
//   axios
//     .post<ILogin[]>("http://localhost:9000/login?key=investor")
//     .then((response) => {
//       return response;
//     });

// // console.log(response.data.message);
// // token = response.data.tokenData;
// // localStorage.setItem("token", response.data.tokenData);

// /*
//   Worker Saga: Fired on FETCH_TODO_REQUEST action
// */
// // function* fetchLoginSaga() {
// //   try {
// //     const response = yield call(getLogin);
// //     yield put(
// //       fetchLoginSuccess({
// //         login: response.data,
// //       })
// //     );
// //   } catch (e: any) {
// //     yield put(
// //       fetchLoginFailure({
// //         error: e.message,
// //       })
// //     );
// //   }
// // }

// /*
//   Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
//   Allows concurrent increments.
// */
// function* loginSaga() {
//   yield all([takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga)]);
// }

// export default loginSaga;

import React from "react";

export const sagas = () => {
  return sagas;
};
