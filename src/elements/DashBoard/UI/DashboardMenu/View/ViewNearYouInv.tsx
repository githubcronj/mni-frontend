import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Recomended, { StartupCard1 } from "../DashBoardMain/Recomended";

export const ViewNearYouInv = () => {
  const compdata = useSelector((state: any) => {
    return state.loginReducerHandler.topRisingData;
  });

  const location = useSelector((state: any) => {
    return state.loginReducerHandler?.login[0]?.location;
  });
  useEffect(() => {}, []);
  return (
    <div>
      <Link
        to={"/startup-dashboard"}
        style={{ textDecoration: "none", color: "#010101", opacity: "0.8" }}
      >
        <Toolbar className="book opacity">
          BACK <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
        </Toolbar>
      </Link>
      <Box sx={{ display: "flex", pl: 3 }} className="btnBox">
        <Typography
          sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
        >
          Near you
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {compdata.map((ele: any) => {
          if (ele.location === location) {
            return (
              <Grid item lg={4} md={6} xs={12}>
                <StartupCard1 ele={ele} key={ele.id} />
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
};
