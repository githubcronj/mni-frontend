export const GET_LOGIN_FETCH_STARTUP = "GET_LOGIN_FETCH_STARTUP";
export const GET_LOGIN_SUCCESS_STARTUP = "GET_LOGIN_SUCCESS_STARTUP";
export const GET_LOGIN_FAIL_STARTUP = "GET_LOGIN_FAIL_STARTUP";
export const LOGOUT_STARTUP = "LOGOUT_STARTUP";
export const LOGOUT_SUCCESS_STARTUP = "LOGOUT_SUCCESS_STARTUP";
export const RECENTLY_VIEWED = "RECENTLY_VIEWED";
export const TOP_RISING = "TOP_RISING";
export const GETSEARCH_S = "GETSEARCH_S";
export const GET_STARTUP_DETAILS = "GET_STARTUP_DETAILS";
export const GET_STARTUP_DETAILS_SUCCESS = "GET_STARTUP_DETAILS_SUCCESS";

export const getLoginFetchStartup = (values: any) => ({
  type: GET_LOGIN_FETCH_STARTUP,
  payload: values,
});

export const logoutStartup = () => ({
  type: LOGOUT_STARTUP,
});

export const getStartupDetails = (id: any) => {
  return {
    type: "GET_STARTUP_DETAILS",
    payload: id,
  };
};

export const getInvestorProfile = () => {
  return {
    type: "GETINVESTOR",
  };
};
export const getProfileInv = (id: any) => {
  return {
    type: "GETPROFILEINV",
    payload: id,
  };
};

export const topRisingStartupS = () => {
  return {
    type: "TOPRISINGS",
  };
};

export const saveRecentlyViewed = (data: any) => {
  return {
    type: RECENTLY_VIEWED,
    payload: data,
  };
};

export const getSearchResultS = (values: any) => {
  return {
    type: GETSEARCH_S,
    payload: values,
  };
};
export const updateStartupProfile = (data: any, id: any) => {
  return {
    type: "UPDATE_STARTUP_PROFILE",
    payload: { data, id },
  };
};
