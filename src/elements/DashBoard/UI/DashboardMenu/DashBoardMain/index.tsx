import { Box, Button, Grid, Typography } from "@mui/material";
import SearchBox from "../../SearchBox";
import Recomended from "./Recomended";
import "./dashboardmain.css";
import { Fragment } from "react";
import TopRising from "./TopRising";
import NearYou from "./Nearyou";
import { useSelector } from "react-redux";
import Recently from "./Recently";
import { Link } from "react-router-dom";

const DashBoardMain = () => {
  const recentlyViewed = useSelector((state: any) => {
    return state.loginReducerHandler.recentlyViewed;
  });
  return (
    <>
      <SearchBox />

      <Fragment key={"0"}>
        {/* <Typography className="bold size-sm dash-main-titles">
          {"Recommended"}
        </Typography> */}
        <Box sx={{ display: "flex", p: 4 }} className="btnBox">
          <Typography
            sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
          >
            Recommended
          </Typography>
          <Link to={"/view-recommedned-investor"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EFF3F3 !important",
                height: "60px",
                color: "#138707",
                mt: "10px",
                mr: "20px",
                borderRadius: "0px",
              }}
              className="viewMoreBtn"
            >
              View More
            </Button>
          </Link>
        </Box>

        <Recomended />
        {/* <Typography className="bold size-sm dash-main-titles">
          {"Near You"}
        </Typography> */}
        <Box sx={{ display: "flex", p: 4 }} className="btnBox">
          <Typography
            sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
          >
            Near you
          </Typography>
          <Link to={"/view-nearyou-investor"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EFF3F3 !important",
                height: "60px",
                color: "#138707",
                mt: "10px",
                mr: "20px",
                borderRadius: "0px",
              }}
              className="viewMoreBtn"
            >
              View More
            </Button>
          </Link>
        </Box>
        <NearYou />
        {/* <Typography className="bold size-sm dash-main-titles">
          {"Top Rising"}
        </Typography> */}
        <Box sx={{ display: "flex", p: 4 }} className="btnBox">
          <Typography
            sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
          >
            Top Rising
          </Typography>
          <Link to={"/view-toprising-investor"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EFF3F3 !important",
                height: "60px",
                color: "#138707",
                mt: "10px",
                mr: "20px",
                borderRadius: "0px",
              }}
              className="viewMoreBtn"
            >
              View More
            </Button>
          </Link>
        </Box>
        <TopRising />
        {recentlyViewed.length != 0 && (
          <Typography className="bold size-sm dash-main-titles">
            {/* {"Recently Viewed"} */}
            <Box sx={{ display: "flex", p: 4 }} className="btnBox">
              <Typography
                sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
              >
                Recently Viewed
              </Typography>
              <Link to={"/view-recently-investor"}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#EFF3F3 !important",
                    height: "60px",
                    color: "#138707",
                    mt: "10px",
                    mr: "20px",
                    borderRadius: "0px",
                  }}
                  className="viewMoreBtn"
                >
                  View more
                </Button>
              </Link>
            </Box>
            <Recently />
          </Typography>
        )}
      </Fragment>
    </>
  );
};

export default DashBoardMain;
