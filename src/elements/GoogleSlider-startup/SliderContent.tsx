import React from "react";
import "./Slider.css";
import { Typography } from "@mui/material";
// import GoogleIcon from "@mui/icons-material/Google";
import { Box, Container } from "@mui/system";
import googleLogo from "./img/googleLogo.png";

export const SliderContent = () => {
  return (
    <Container sx={{ backgroundColor: "#EFF3F3", padding: "10%" }}>
      <Box sx={{ borderRight: "1px solid #010101A8" }}>
        <Typography
          variant="h3"
          className="googleName"
          sx={{
            fontSize: "24px",
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
          />{" "}
          Google
        </Typography>

        <Box display="flex" gap="5%">
          <Typography
            variant="body2"
            className="googleInner"
            sx={{
              fontSize: "14px",
              backgroundColor: "#fff",
              width: "35%",
              padding: "5px",
              borderRadius: "5px",
              opacity: "60%",
            }}
          >
            Tourism
          </Typography>
          <Typography
            variant="body2"
            className="googleInner"
            sx={{
              fontSize: "14px",
              backgroundColor: "#fff",
              width: "39%",
              padding: "5px",
              borderRadius: "5px",
              opacity: "60%",
            }}
          >
            Banglore
          </Typography>
        </Box>

        <Box display="flex" gap="10%">
          <Typography
            variant="body2"
            sx={{
              opacity: "60%",
              fontSize: "14px",
            }}
          >
            Equity Offered
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#138707",
              fontWeight: "bold",
            }}
          >
            20.5%
          </Typography>
        </Box>
        <Box display="flex" gap="25%">
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
            ₹ 10L
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
