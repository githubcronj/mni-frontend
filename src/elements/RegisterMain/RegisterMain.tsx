import React from "react";
import { Box, Container } from "@mui/system";
import "./RegisterMain.css";
import { Button, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import regBg from "./img/reg-bg2.svg";
import { Link as Links } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
}

export const RegisterMain = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      fontSize="14px"
      href="/"
      onClick={handleClick}
      sx={{ opacity: "66%" }}
    >
      HOME
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      fontSize="14px"
      href="/"
      onClick={handleClick}
      sx={{ opacity: "66%" }}
    ></Link>,
  ];
  return (
    <>
      <Container className="RegContainer">
        <Box className="RegisterBg">
          <Box>
            <Stack spacing={2}>
              <Breadcrumbs
                sx={{ opacity: "66%" }}
                separator="›"
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Box>
          <Box className="RegInner">
            <Typography
              className="RegTitle"
              variant="h1"
              fontSize="74px"
              color="#138707"
              width="60%"
            >
              Let’s Create the Next Unicorn!
            </Typography>
          </Box>
          <Box>
            <Typography
              className="RegTitle2"
              variant="h5"
              fontSize="26px"
              sx={{ opacity: "75%" }}
            >
              What describes you the best?
            </Typography>
          </Box>

          <Box className="button-Reg">
            <Button
              className="reg-button"
              sx={{ backgroundColor: "#FF9A33" }}
              component={Links}
              to="/startup-register"
            >
              Startup
            </Button>
            <Button
              className="reg-button inv"
              sx={{ backgroundColor: "#138707" }}
              component={Links}
              to="/investor-register"
            >
              Investor
            </Button>
          </Box>
          <Box
            component="img"
            alt="Test"
            className="reg-bg2"
            src={regBg}
            sx={{ width: "23%" }}
          />
        </Box>
      </Container>
    </>
  );
};
