import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProfileCard.css";
import {
  getProfileInv,
  getInvestorProfile,
  saveRecentlyViewed,
} from "../../../store/startup/actions";
import { getInvProfile } from "../../../Api/api";
import { Link, Navigate, useNavigate } from "react-router-dom";
// interface props {
//   cardData: any;
//   element?: any;
// }
const ProfileCard = (props: any) => {
  const isLoggedIn = useSelector<any>(
    (state) => state.startupReducer.isLoggedIn
  );
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  // const compdata = useSelector((state: any) => {
  //   console.log("stateCHECK--->", state.loginReducerHandler.investorProfile);
  //   return state.loginReducerHandler.investorProfile;
  // });
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProfileInv("2e8e2a95-4371-4c42-a26f-dd73b92fa134"));
  //   dispatch(getInvestorProfile());
  // }, []);
  let { element, cardData } = props;
  // console.log("IN ELEMENT priyanka", element);
  const dispatch = useDispatch();

  const handelRoute = (e: any) => {
    e.preventDefault();
    dispatch(getProfileInv(element));
    dispatch(saveRecentlyViewed(element));
    navigate("/user-profile");
  };

  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          border: { sm: "1.5px solid #cccccc", xs: "none" },
          p: { md: 3, sm: 5, xs: 3 },
          width: { md: "90%" },
        }}
        onClick={handelRoute}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Avatar
              src={cardData?.img ? cardData.img : ""}
              className="profileImg"
            />
            <Avatar
              src={cardData?.companyImg ? cardData.companyImg : ""}
              className="companyImg"
              sx={{ width: "70px", height: "70px" }}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "600",
                textAlign: "center",
                color: "#010101",
              }}
            >
              {/* {cardData.name} */}
              {element.name}
            </Typography>
            <Typography sx={{ color: "#010101" }}>
              {/* {cardData.designation} <span>&#8226;</span> {cardData.company} */}
              Google <span>&#8226; </span>
              {element.occupation ? element.occupation : "CEO"}
              {element.company}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button sx={{ textTransform: "none" }} className="connectBtn">
            Connect
          </Button>
        </Box>
      </Box>
      {element.subscription && (
        <Typography
          className="memberShipStartup"
          sx={{
            position: "absolute",
            backgroundColor: "#101010",
            color: "#FFF",
            borderRadius: "30px 0px 0px 30px",
            width: "fit-content",
          }}
        >
          {element.subscription}
        </Typography>
      )}
    </Grid>
  );
};
export default ProfileCard;
