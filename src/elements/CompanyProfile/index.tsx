import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./UI/Menu/menu.css";
import { settings } from "./utils/settings";
import {
  ProcessImg,
  Details,
  CompanyDescription,
  Financial,
  Swot,
  People,
} from "./UI";
import SideBar from "../Profile/UI/SideBar";
import { useSelector } from "react-redux";

const CompanyProfile = () => {
  const [active, setActive] = useState(3);

  const details=useSelector((state:any)=>{
    return state.loginReducerHandler.choosenData
  })

  console.log(details,"data at profile")

  return (
    <>
      <CompanyDescription data={details} />

      <Box className="border-light menu">
        <Slider {...settings}>
          {["Pitch", "Details", "Financial", "SWOT", "People"].map(
            (item, index) => (
              <Box
                className="menu-inner bold"
                key={index}
                onClick={() => setActive(index)}
                sx={{
                  backgroundColor: active === index ? "#FF9A33" : null,
                  color: active === index ? "#FFFFFF" : null,
                }}
              >
                <Typography className="bold size-xs menu-text">
                  {item}
                </Typography>
              </Box>
            )
          )}
        </Slider>
      </Box>
      {active === 0 ? (
        <ProcessImg />
      ) : active === 1 ? (
        <Details />
      ) : active === 2 ? (
        <Financial />
      ) : active === 3 ? (
        <Swot />
      ) : active === 4 ? (
        <People />
      ) : (
        <></>
      )}
      <Box className="align">
        <SideBar className="side-bar-display" />
      </Box>
    </>
  );
};

export default CompanyProfile;
