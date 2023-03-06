import React from "react";
import { Button, Card, CardMedia, Toolbar, Typography } from "@mui/material";
import { Box, Grid } from "@mui/material";
import img from "./img/company.png";
import logo from "./img/logo.png";
// import process from './img/Process.png'
import "./companydescription.css";
import { LocationOn } from "@mui/icons-material";
import ChatBtn from "../../../utils/buttons/ChatBtn";
import ShareBtn from "../../../utils/buttons/ShareBtn";
import SideBar from "../../../Profile/UI/SideBar";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const CompanyDescription = (props: any) => {
  let { data } = props;
  console.log("COMPANY INFO HERE", data?.companyInfo);
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

              <Box className="company-name">
                <Typography variant="h4" className="bold">
                  {data?.companyName ? data.companyName : "..."}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="company-det-industry"
                >
                  {data?.industry ? data.industry : "Technology"}
                </Typography>
              </Box>
              <Typography variant="subtitle1" className="company-det-descrip">
                {data?.companyInfo ? data.companyInfo : "..."}
              </Typography>
              <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 6 }}
                sx={{ p: " 10px 55px" }}
                style={{ justifyContent: "space-between" }}
              >
                <Grid item lg={3} xs={4} md={4} sm={4}>
                  <Typography
                    variant="h3"
                    className="answer"
                    sx={{ fontSize: { xs: "30px", lg: "38px", md: "38px" } }}
                  >
                    {data?.equityOffer ? data.equityOffer : "..."}%
                  </Typography>
                  <Typography variant="h6" className="question">
                    EQUITY OFFER
                  </Typography>
                </Grid>
                <Grid item lg={5} xs={4} md={4} sm={4}>
                  <Typography
                    variant="h3"
                    // className="answer"
                    // style={{width:"260px"}}
                    sx={{
                      fontSize: { xs: "30px", lg: "38px", md: "38px" },
                      width: { lg: "270px" },
                      marginRight: 0,
                    }}
                    pl={2}
                  >
                    {data?.askPrice ? `₹ ${data.askPrice}` : "₹ ..."}
                  </Typography>
                  <Typography variant="h6" className="question">
                    ASK PRICE
                  </Typography>
                </Grid>
                <Grid item lg={3} xs={4} md={4} sm={4}>
                  <Typography
                    variant="h3"
                    // className="answer"
                    style={{ padding: 0 }}
                    sx={{
                      fontSize: { xs: "30px", lg: "38px", md: "38px" },
                      width: { lg: "230px" },
                      padding: { lg: "0px" },
                    }}
                  >
                    {data?.createdAt ? `${data.createdAt.slice(0, 10)}` : "..."}
                  </Typography>
                  <Typography variant="h6" className="question">
                    FOUNDED
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box className="location-btn align">
                    <LocationOnOutlinedIcon className="green" />
                    <Typography className="book">
                      {data?.location ? data.location : "..."}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={8} className="align">
                  <Button className="btn bg-green white chat btn-height">
                    Chat
                  </Button>
                  <Button className="btn green bg-white share btn-height">
                    Share
                  </Button>
                </Grid>
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
