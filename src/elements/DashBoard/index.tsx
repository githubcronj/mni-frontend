import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import "./UI/DashboardMenu/DashboardMenu.css";
import NetWork from "../NetWork";
import { Navigate, useNavigate } from "react-router-dom";
import DashBoardMain from "./UI/DashboardMenu/DashBoardMain";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  getRecomendedStartups,
  getLoginFetch,
} from "../../store/login/actions";

const Dashboard = () => {
  const [active, setActive] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem("profile") && !sessionStorage.getItem("profile"))
      navigate("/", { replace: true });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("id"))
      dispatch(getProfile(localStorage.getItem("id")));
    if (sessionStorage.getItem("id"))
      dispatch(getProfile(sessionStorage.getItem("id")));
  }, []);

  const data = useSelector((state: any) => {
    return state.loginReducerHandler;
  });

  const isLoggedIn = useSelector<any>(
    (state) => state.loginReducerHandler.isLoggedIn
  );
  const profile = useSelector<any>((state) => state.loginReducerHandler);
  console.log("PROFILE ---->>>", profile);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getRecomendedStartups());
      dispatch(getProfile(data?.login[0]?.uId));
    }
  }, [isLoggedIn]);

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  // useEffect(() => {
  //   dispatch(getProfile("02021583-57e4-4695-9d98-915cdaa68fb1"));
  //   dispatch(getRecomendedStartups());
  // }, []);
  return (
    <>
      {active === 1 ? (
        <Navigate to="/profile" />
      ) : (
        <Grid container justifyContent="center">
          <Grid item className="dashboardMain">
            {["Dashboard", "Profile", "Network"].map((item, index) => (
              <Grid
                className="dashboard-inner bold"
                key={index}
                onClick={() => setActive(index)}
                sx={{
                  backgroundColor: active === index ? "#FF9A33" : null,
                  color: active === index ? "#FFFFFF" : null,
                }}
              >
                {item}
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
      {active === 0 ? <DashBoardMain /> : active === 2 ? <NetWork /> : <></>}
    </>
  );
};

export default Dashboard;
