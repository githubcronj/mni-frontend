import React, { useState, useEffect } from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import "../../DashBoard/UI/DashboardMenu/DashboardMenu.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StartupCardHome } from "../StartupHomePage/StartupHomePage";
import CompanyProfileStartup from "../../StartupComponents/ProfilePage/CompanyProfile";
import NetWorkStartup from "../../StartupComponents/Network-Startup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { useDispatch } from "react-redux";
import { getStartupDetails } from "../../../store/startup/actions";
import {
  getInvestorProfile,
  getProfileInv,
} from "../../../store/startup/actions";

const StartupDashboard = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("profile") && !sessionStorage.getItem("profile"))
      navigate("/", { replace: true });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("id"))
      dispatch(getStartupDetails(localStorage.getItem("id")));
    if (sessionStorage.getItem("id"))
      dispatch(getStartupDetails(sessionStorage.getItem("id")));
  }, []);

  const isLoggedIn = useSelector<any>(
    (state) => state.startupReducer.isLoggedIn
  );
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  //---------------------------------------------------------
  // const dispatch = useDispatch();

  // const data = useSelector((state: any) => {
  //   return state.loginReducerHandler;
  // });

  // // const isLoggedIn = useSelector<any>(
  // //   (state) => state.loginReducerHandler.isLoggedIn
  // // );
  // const profile = useSelector<any>((state) => state.loginReducerHandler);
  // console.log("PROFILE ---->>>", profile);
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(getInvestorProfile());
  //     dispatch(getProfileInv(data?.login[0]?.uId));
  //   }
  // }, [isLoggedIn]);

  // let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <Grid sx={{ position: "relative" }}>
        <Toolbar
          className="book opacity"
          sx={{ fontSize: { md: "16px", sm: "14px", xs: "12px" } }}
        >
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "#010101", opacity: "0.8" }}
          >
            HOME{" "}
          </Link>{" "}
          <ArrowForwardIosIcon sx={{ fontSize: { sm: "14px", xs: "12px" } }} />
          <Link
            to={"/startup-login"}
            style={{ textDecoration: "none", color: "#010101", opacity: "0.8" }}
          >
            LOGIN
          </Link>
        </Toolbar>

        <Typography
          sx={{
            position: { md: "absolute", xs: "unset" },
            fontSize: { sm: "42px", xs: "32px" },
            fontWeight: "600",
            ml: 2,
          }}
        >
          Startup
        </Typography>
      </Grid>
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

      {active === 0 ? (
        <StartupCardHome />
      ) : active === 1 ? (
        <CompanyProfileStartup />
      ) : (
        <NetWorkStartup />
      )}
    </>
  );
};

export default StartupDashboard;
