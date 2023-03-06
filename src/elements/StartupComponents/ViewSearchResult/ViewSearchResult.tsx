import React, { useEffect, useState } from "react";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import ProfileCard from "../ProfileCard/ProfileCard";
import { cardDataRecomended } from "../ProfileCard/ProfileCardArr";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInvestorProfile } from "../../../store/startup/actions";

export default function ViewSearchResult() {
  const [noData, setNoData] = useState(false);

  const data = useSelector((state: any) => {
    return state.startupReducer.search;
  });
  console.log("MY DATTTTAAAAAAAAA PK ------------>>>>>>>>", data.message);

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
          Search Result
        </Typography>
      </Box>
      {data.message === "404 Not Found" ? (
        <Box sx={{ p: 4 }}>
          <Typography> No data found </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {data.map((item: any) => (
            <Grid item lg={4} md={6} xs={12}>
              <ProfileCard element={item} key={item.id} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
