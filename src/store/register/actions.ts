export const GET_REGISTER_FETCH = "GET_REGISTER_FETCH";
export const GET_REGISTER_SUCCESS = "GET_REGISTER_SUCCESS";
export const GET_REGISTER_FAIL = "GET_REGISTER_FAIL";

export const getRegisterFetch = (values: any) => ({
  type: GET_REGISTER_FETCH,
  payload: values,
});
