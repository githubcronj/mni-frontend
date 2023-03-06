import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from "./actionTypes";

export interface ILogin {
  email: any;
  password: any;
}

export interface LoginState {
  pending: boolean;
  login: ILogin[];
  error: string | null;
}

export interface FetchLoginSuccessPayload {
  login: ILogin[];
}

export interface FetchLoginFailurePayload {
  error: string;
}

export interface FetchLoginRequest {
  type: typeof FETCH_LOGIN_REQUEST;
}

export type FetchLoginSuccess = {
  type: typeof FETCH_LOGIN_SUCCESS;
  payload: FetchLoginSuccessPayload;
};

export type FetchLoginFailure = {
  type: typeof FETCH_LOGIN_FAILURE;
  payload: FetchLoginFailurePayload;
};

export type LoginActions =
  | FetchLoginRequest
  | FetchLoginSuccess
  | FetchLoginFailure;
