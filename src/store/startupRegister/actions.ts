export const GET_REGISTER_FETCH_STARTUP = "GET_REGISTER_FETCH_STARTUP";
export const GET_REGISTER_SUCCESS_STARTUP = "GET_REGISTER_SUCCESS_STARTUP";
export const GET_REGISTER_FAIL_STARTUP = "GET_REGISTER_FAIL_STARTUP";

export const getRegisterFetchStartup = (values: any) => ({
  type: GET_REGISTER_FETCH_STARTUP,
  payload: values,
});
