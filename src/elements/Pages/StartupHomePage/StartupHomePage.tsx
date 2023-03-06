import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import ProfileCard from "../../StartupComponents/ProfileCard/ProfileCard";
import {
  cardData,
  cardDataRecomended,
} from "../../StartupComponents/ProfileCard/ProfileCardArr";
import { graphCard } from "../../StartupComponents/GraphCards/GraphCardArr";
import GraphCards from "../../StartupComponents/GraphCards/GraphCards";
import "./StartupHome.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getInvestorProfile,
  getProfileInv,
  saveRecentlyViewed,
  topRisingStartupS,
} from "../../../store/startup/actions";

const responsive = {
  desktop: {
    breakpoint: { max: 1536, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
  },
  mobilenew: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

// interface cardData {
//   cardData?: any;
//   ele?: any;
// }
export const StartupCardHome = (props: any) => {
  const dispatch = useDispatch();

  const compdata2 = useSelector((state: any) => {
    return state.startupReducer.recentlyViewed;
  });

  const compdata = useSelector((state: any) => {
    return state.startupReducer.investorProfile;
  });

  //near you -->>
  const location = useSelector((state: any) => {
    return state.startupReducer?.login[0]?.location;
  });

  //top rising
  const topRising = useSelector((state: any) => {
    return state.startupReducer.topRisingDataS;
  });

  useEffect(() => {
    dispatch(getInvestorProfile());
    dispatch(topRisingStartupS());
  }, []);

  return (
    <>
      <Grid>
        <Grid container spacing={3} sx={{ pb: 2 }}>
          {graphCard.map((item) => (
            <Grid
              item
              md={4}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                ml: { sm: 0, xs: 2 },
                mr: { sm: 0, xs: 2 },
              }}
            >
              <GraphCards cardData={item} key={item.id} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid className="carousalGrid">
        <Box sx={{ display: "flex", p: 4 }} className="btnBox">
          <Typography
            sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
          >
            Recommended
          </Typography>
          <Link to={"/view-recommendation"}>
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

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {compdata.map((ele: any) => (
            <Box className="startup-card-container">
              {/* <Link to={"/user-profile"} style={{ textDecoration: "none" }}> */}
              <ProfileCard element={ele} key={ele.id} />
              {/* </Link> */}
            </Box>
          ))}
        </Carousel>
      </Grid>

      <Grid className="carousalGrid">
        <Box sx={{ display: "flex", p: 4 }} className="btnBox">
          <Typography
            sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
          >
            Near You
          </Typography>
          <Link to={"/view-near-you"}>
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

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {/* {compdata.map((ele: any) => (
            <Box className="startup-card-container">
              <ProfileCard element={ele} key={ele.id} cardData={undefined} />
            </Box>
          ))} */}
          {compdata.map((ele: any) => {
            if (ele.location === location) {
              return (
                <Box className="startup-card-container">
                  <ProfileCard element={ele} key={ele.id} />
                </Box>
              );
            }
          })}
        </Carousel>
      </Grid>

      <Grid className="carousalGrid">
        <Box sx={{ display: "flex", p: 4 }} className="btnBox">
          <Typography
            sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
          >
            Top Rising
          </Typography>
          <Link to={"/view-top-rising"}>
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

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {topRising.map((ele: any) => (
            <Box className="startup-card-container">
              <ProfileCard element={ele} key={ele.id} />
            </Box>
          ))}
        </Carousel>
      </Grid>

      <Grid className="carousalGrid">
        <Box sx={{ display: "flex", p: 4 }} className="btnBox">
          <Typography
            sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
          >
            Recently Viewed
          </Typography>
          <Link to={"/view-recently-viewed"}>
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

        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {compdata2.map((ele: any) => (
            <Box className="startup-card-container">
              <ProfileCard element={ele} key={ele.id} />
            </Box>
          ))}
        </Carousel>
      </Grid>
    </>
  );
};
