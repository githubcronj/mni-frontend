import { Box, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { cardData } from "../ProfileCard/ProfileCardArr";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ViewTopRising() {
  const topRising = useSelector((state: any) => {
    return state.startupReducer.topRisingDataS;
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
          Top Rising
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {topRising.map((item: any) => (
          <Grid item lg={4} md={6} xs={12}>
            <ProfileCard element={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
