import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { cardData } from "../ProfileCard/ProfileCardArr";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ViewNearYou() {
  const compdata = useSelector((state: any) => {
    return state.startupReducer.investorProfile;
  });

  const location = useSelector((state: any) => {
    return state.startupReducer?.login[0]?.location;
  });
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
          Near You
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {compdata.map((item: any) => {
          if (item.location === location) {
            return (
              <Grid item lg={4} md={6} xs={12}>
                <ProfileCard element={item} key={item.id} />
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
}
