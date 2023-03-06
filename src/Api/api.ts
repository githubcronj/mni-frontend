import axios from "axios";
import { put } from "redux-saga/effects";

const url = "http://localhost:9000";

export const getUserProfile = (value: any) => {
  return axios
    .get(`http://localhost:9000/investor/details/${value.payload}`)
    .then((res: any) => {
      console.log(res.data.data[0], "responseresponse");
      return res;
    })
    .catch((err: any) => {
      return err;
    });

  // return (
  //     fetch(`http://localhost:9000/getStartupProfile?id=${value.payload}`, {
  //       method: "get"
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   }
  //     })
  //       // .then(handleApiErrors)
  //       .then((response) => response.json())
  //       .then((json) => json)
  //       .catch((error) => {
  //         throw error;
  //       })
  //   );
};
export const getStartupProfile = (value: any) => {
  return axios
    .get(`http://localhost:9000/investor/details/${value.payload}`)
    .then((res: any) => {
      console.log(res.data.data[0], "responseresponse");
      return res;
    })
    .catch((err: any) => {
      return err;
    });
};
export const fetchStartupDetailsAPI = (value: any) => {
  return axios
    .get(`http://localhost:9000/getStartupProfile?id=${value.payload}`)
    .then((res: any) => {
      console.log(res.data.data[0], "FETCH_STARTUP_DETAILS");
      return res;
    })
    .catch((err: any) => {
      return err;
    });
};
export const getInvProfile = (value: any) => {
  return axios
    .get(`http://localhost:9000/investor/profile/${value.payload}`)
    .then((res: any) => {
      // console.log("IN API INVESTOR Profile id --", res);
      return res;
    })
    .catch((err: any) => {
      return err;
    });
};
export const getRisingStartup = () => {
  return fetch("http://localhost:9000/topStartups?key=topStartups")
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => {
      throw error;
    });
};
export const getRisingStartupS = () => {
  return fetch("http://localhost:9000/topStartups?key=investors")
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => {
      throw error;
    });
};

export const getBlog = () => {
  return axios.get("http://localhost:9000/trendingStories").then((res) => {
    return res.data;
  });
};

export const getRecomendedStartup = () => {
  return fetch("http://localhost:9000/topStartups?key=topStartups")
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => {
      throw error;
    });
};
export const getGoogleHomepageApi = () => {
  return fetch("http://localhost:9000/topStartups?key=topStartups")
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => {
      throw error;
    });
};
export const getInvestorProfileApi = () => {
  return axios
    .get("http://localhost:9000/investor/list")
    .then((res: any) => {
      return res;
    })
    .catch((err: any) => {
      return err;
    });

  //     fetch(`http://localhost:9000/investor/list`, {
  //       method: "get"
  //     })
  //       // .then(handleApiErrors)
  //       .then((response) => response.json())
  //       .then((json) => json)
  //       .catch((error) => {
  //         throw error;
  //       })
  //   );
};

// export const fix = (data:any,id:any) => {
//   return axios
//     .put(`${url}/investor/update/${id}`,{...data})
//     .then((res: any) => {
//       return res;
//     })
//     .catch((err: any) => {
//       return err;
//     });
// };

// export const InvestorUpdate = (value: any) => {
//   return axios
//     .put(`${url}/investor/update/${value.payload.id}` )
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err: any) => {
//       return err;
//     });
// };
export const InvestorUpdate = (value: any) => {
  return axios
    .put(`${url}/investor/update/${value.payload.id}`, {
      ...value.payload.data,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err: any) => {
      return err;
    });
};
//strtupEditProfile
export const startupUpdate = (value: any) => {
  return axios
    .put(`${url}/editStartupProfile/${value.payload.id}`, {
      ...value.payload.data,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err: any) => {
      return err;
    });
};

// const searchName = "apple";
// const searchLocation = "delhi";

export const getInvestorSearchData = (value: any) => {
  console.log(
    "VALUES -->>>>>>>>>",
    value.payload.name + " and " + value.payload.location
  );
  return fetch(
    `${url}/investor/searchStartup?name=${value.payload.name}&location=${value.payload.location}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
};

export const getInvestorSearchDataI = (value: any) => {
  console.log("VALUES -->>>>>>>>>", value.payload.name);
  return fetch(`${url}/investor/searchStartup?name=${value.payload.name}}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
};

export const getInvestorSearchDataS = (value: any) => {
  console.log(
    "VALUES -->>>>>>>>>",
    value.payload.name + " and " + value.payload.location
  );
  // return fetch(
  //   `${url}/investor/searchStartup?name=${value.payload.name}&location=${value.payload.location}`,
  //   {
  //     method: "GET",
  //   }
  // )
  return fetch(
    `${url}/investor/search?name=${value.payload.name}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      throw error;
    });
};
