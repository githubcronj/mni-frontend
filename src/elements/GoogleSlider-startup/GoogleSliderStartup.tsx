import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { SliderContent } from "./SliderContent";
import { Box } from "@mui/material";

export default class GoogleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Box className="googleSlider" sx={{ marginTop: "100px" }}>
        <Slider {...settings}>
          <Box>
            <SliderContent />
          </Box>
          <Box>
            <SliderContent />
          </Box>
          <Box>
            <SliderContent />
          </Box>
          <Box>
            <SliderContent />
          </Box>
          <Box>
            <SliderContent />
          </Box>
          <Box>
            <SliderContent />
          </Box>
          <Box>
            <SliderContent />
          </Box>
          <Box>
            <SliderContent />
          </Box>


          {/* {[1,2,3,4,5,6,8,9,10,11,12].map((item, index) => {
            return <div key={index}>{item} <SliderContent /></div>
          })} */}
        </Slider>
      </Box>
    );
  }
}
