import * as React from "react";
import { Box } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { SliderContent } from "./SliderContent";
import "./Slider.css";
const GoogleSlider = () => {
  const data = useSelector((state: any) => {
    return state.loginReducerHandler.topRisingData;
  });
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Box>
      <Slider
        {...settings}
        // slidesToShow={3}
        swipeToSlide={true}
        // focusOnSelect={true}
      >
        {data.map((ele: any) => (
          <SliderContent ele={ele} key={ele.id} />
        ))}
      </Slider>
    </Box>
  );
};

export default GoogleSlider;
