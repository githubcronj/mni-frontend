import React from "react";
import "./Slider.css";
import { Typography } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
import { Box, Container } from "@mui/system";
import googleLogo from "./img/googleLogo.png";
import { useSelector } from "react-redux";

interface cardData {
  cardData?: any;
  ele?: any;
  data?: any;
}
export const SliderContent = (props: cardData) => {
  let { ele } = props;

  return (
    <Container
      className="sliderDiv"
      sx={{ backgroundColor: "#EFF3F3", padding: "10%" }}
    >
      <Box sx={{ borderRight: "1px solid #010101A8" }}>
        <Typography
          variant="h3"
          className="googleName"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <Box
            component="img"
            alt="Test"
            className="googleIcon"
            src={googleLogo}
            sx={{ width: "20px", marginRight: "15px" }}
          />
          {ele.companyName}
        </Typography>

        <Box display="flex" gap="5%" sx={{ mb: 2 }}>
          <Typography
            variant="body2"
            className="googleInner"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              opacity: "60%",
            }}
          >
            {ele.industry}
          </Typography>
          <Typography
            variant="body2"
            className="googleInner"
            sx={{
              fontSize: "14px",
              backgroundColor: "#fff",
              padding: "5px",
              borderRadius: "5px",
              opacity: "60%",
            }}
          >
            {ele.location}
          </Typography>
        </Box>

        <Box display="flex" gap="17%">
          <Typography
            variant="body2"
            sx={{
              opacity: "60%",
              fontSize: "14px",
            }}
          >
            Equity Offer
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#138707",
              fontWeight: "bold",
            }}
          >
            {ele.equityOffer}
          </Typography>
        </Box>
        <Box display="flex" gap="20%">
          <Typography
            variant="body2"
            sx={{
              opacity: "60%",
              fontSize: "14px",
            }}
          >
            Ask Price
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#138707",
              fontWeight: "bold",
            }}
          >
            {ele.askPrice}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
