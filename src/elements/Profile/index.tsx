import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import SideBar from "./UI/SideBar";
import User from "./UI/User";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Profile = () => {
  const isLoggedIn = useSelector<any>(
    (state) => state.loginReducerHandler.isLoggedIn
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);

  return (
    <Grid
      container
      sx={{ m: { xs: 0, sm: 0, md: 2, lg: 2 } }}
      columnSpacing={2}
    >
      <Grid item xs={12} md={8} sm={12} className="padding align">
        <User />
      </Grid>
      <Grid item xs={12} md={4} sm={12} className="align">
        <SideBar />
      </Grid>
    </Grid>
  );
};

export default Profile;
