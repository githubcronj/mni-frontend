import React from "react";
import { Button, Card, CardMedia, Toolbar, Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import img from "./img/company.png";
import logo from "./img/logo.png";
// import process from './img/Process.png'
import "./companydescription.css";
import EditIcon from "@mui/icons-material/Edit";
import { LocationOn } from "@mui/icons-material";
import ChatBtn from "../../../../../utils/buttons/ChatBtn";
import ShareBtn from "../../../../../utils/buttons/ShareBtn";
import SideBar from "../../../SideBar";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link as Links } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyDescription = () => {
  const startupData: any = useSelector<any>(
    (state) => state.startupReducer?.login[0]
  );
  // console.log("startup data -->>", startupData);
  return (
    <>
      <Box sx={{ px: { md: "20px" } }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={8} xs={12} md={8}>
            <Card className="company-det-card">
              <CardMedia
                component="img"
                alt="img"
                image={img}
                className="main-comp-img"
              />
              <img src={logo} alt="test" className="main-comp-logo" />
              <Box>
                <Button
                  className="editBtn"
                  component={Links}
                  to="/edit-company-profile"
                >
                  <EditIcon className="edit-icon" />
                </Button>
              </Box>
              <Box className="company-name">
                <Typography variant="h4" className="bold">
                  {startupData?.companyName ? startupData.companyName : "..."}
                </Typography>

                <Typography
                  variant="subtitle1"
                  className="company-det-industry"
                >
                  {startupData?.industry ? startupData.industry : "..."}
                </Typography>
              </Box>
              <Typography variant="subtitle1" className="company-det-descrip">
                {startupData?.companyInfo ? startupData.companyInfo : "..."}
              </Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 6 }}
                sx={{ p: { sm: " 10px 55px", xs: "20px" } }}
              >
                <Grid item lg={3} xs={4} md={4} sm={4}>
                  <Typography
                    variant="h3"
                    className="answer"
                    sx={{ fontSize: { xs: "24px", lg: "38px", md: "38px" } }}
                  >
                    {startupData?.equityOffer ? startupData.equityOffer : "..."}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "13px", md: "16px" } }}
                    className="question1"
                  >
                    EQUITY OFFER
                  </Typography>
                </Grid>
                <Grid item lg={3} xs={4} md={4} sm={4}>
                  <Typography
                    variant="h3"
                    className="answer"
                    sx={{ fontSize: { xs: "24px", lg: "38px", md: "38px" } }}
                    pl={2}
                  >
                    {startupData?.askPrice ? startupData.askPrice : "..."}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "13px", md: "16px" } }}
                    className="question1"
                  >
                    ASK PRICE
                  </Typography>
                </Grid>
                <Grid item lg={3} xs={4} md={4} sm={4}>
                  <Typography
                    variant="h3"
                    className="answer"
                    sx={{ fontSize: { xs: "24px", lg: "38px", md: "38px" } }}
                  >
                    {startupData?.founded ? startupData.founded : "..."}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "13px", md: "16px" } }}
                    className="question1"
                  >
                    FOUNDED
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box className="location-btn align">
                    <LocationOnOutlinedIcon className="green" />
                    <Typography className="book">
                      {startupData?.location ? startupData.location : "..."}
                    </Typography>
                  </Box>
                </Grid>
                {/* <Grid item xs={8} className="align">
                  <Button className="btn bg-green white chat btn-height">
                    Chat
                  </Button>
                  <Button className="btn green bg-white share btn-height">
                    Share
                  </Button>
                </Grid> */}
              </Grid>

              {/* <Toolbar className="location-company">
                <LocationOn color="success" className="location-on" />
                <Typography variant="subtitle1">Banglore, Karnataka</Typography>
              </Toolbar>
              <Toolbar className="Button-company">
                <ChatBtn label="CHAT" />
                <ShareBtn label="Share" />
              </Toolbar> */}
            </Card>
          </Grid>

          <Grid item lg={4} xs={0} md={4} className="comp-sidebar">
            <SideBar className="max-height-sidebar" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default CompanyDescription;
