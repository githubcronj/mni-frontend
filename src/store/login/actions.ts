import { DataArrayRounded } from "@mui/icons-material";

export const GET_LOGIN_FETCH = "GET_LOGIN_FETCH";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAIL = "GET_LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const SUBMIT_SUPPORT_FORM = "SUBMIT_SUPPORT_FORM";
export const GETSEARCH_I = "GETSEARCH_I";

export const getLoginFetch = (values: any) => ({
  type: GET_LOGIN_FETCH,
  payload: values,
});

export const logout = () => ({
  type: LOGOUT,
});

export const getProfile = (id: any) => {
  return {
    type: "GETPROFILE",
    payload: id,
  };
};
//------------------GET STARTUP PROFILE ------------------------
export const getProfileStartup = (id: any) => {
  return {
    type: "GETPROFILESTARTUP",
    payload: id,
  };
};
//----------------------------------------------------------------------
export const topRisingStartup = () => {
  return {
    type: "TOPRISING",
  };
};

export const getGoogleHomepage = () => {
  return {
    type: "GOOGLEHOMEPAGEAPI",
  };
};
export const getBlogs = () => {
  return {
    type: "GETBLOG",
  };
};

export const getRecomendedStartups = () => {
  return {
    type: "GETRECOMENDEDSTARTUPS",
  };
};
export const submitSupportForm = () => {
  return {
    type: "SUBMIT_SUPPORT_FORM",
  };
};

export const saveChoosenData=(data:any)=>{
  return ({
    type:"SAVE_CHOOSEN_DATA",
    payload:data
  })
}
export const saveChoosenStartupData=(data:any)=>{
  return ({
    type:"SAVE_CHOOSENSTARTUP_DATA",
    payload:data
  })
}

export const saveRecentlyViewed = (data: any) => {
  return {
    type: "RECENTLY_VIEWED",
    payload: data,
  };
};

export const updateInvestorProfile = (data: any, id: any) => {
  return {
    type: "UPDATE_PROFILE",
    payload: { data, id },
  };
};

//In investor flow's search -->>
export const getSearchResult = (values: any) => {
  return {
    type: "GETSEARCH",
    payload: values,
  };
};
export const getSearchResultI = (values: any) => {
  return {
    type: GETSEARCH_I,
    payload: values,
  }
}

//Startup -->
// export const getInvestorProfile=()=>{
//   return({
//     type: "GETINVESTOR" 
//   })
// }
// export const getProfileInv=(id:any)=>{
//   return({
//     type: "GETPROFILEINV" , payload:id
//   })
// }
