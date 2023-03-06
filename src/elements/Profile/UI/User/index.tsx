import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import "../../../utils/styles.css";
import "./user.css";
import EditIcon from "@mui/icons-material/Edit";
import userImage from "./img/userImage.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link as Links } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../../../store/login/actions";

const User = () => {
  const dispatch = useDispatch();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#010101"
      fontSize="14px"
      href="/dashboard"
      sx={{ opacity: "66%" }}
    >
      HOME
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#010101"
      fontSize="14px"
      href="/"
      sx={{ opacity: "66%" }}
    >
      {" "}
    </Link>,
  ];
  // const user = useSelector((state: any) => {
  //   return state.loginReducerHandler.profile;
  // });

  const investorData: any = useSelector<any>(
    (state) => state.loginReducerHandler?.login[0]
  );

  return (
    <Box className="main-container bg-grey">
      <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Button className="edit-btn" component={Links} to="/edit-profile">
        <EditIcon className="edit-icon" />
      </Button>
      <Grid container className="user-sub-container">
        <Grid item>
          <Avatar alt="user" src={userImage} sx={{ width: 112, height: 112 }} />
        </Grid>
        <Grid item xs={12} sm container sx={{ ml: "20px" }}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item sm>
              <Typography variant="h4" className="bold">
                {investorData?.name ? investorData.name : "..."}
              </Typography>
              <Typography
                variant="caption"
                className="bold size-s"
                gutterBottom
              >
                XYZ Company •{" "}
                {investorData?.occupation ? investorData.occupation : "CEO"}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography
                variant="body2"
                color="text.secondary"
                className="book"
              >
                {investorData?.description ? investorData.description : "..."}
              </Typography>
            </Grid>
            <Grid item sm={2} xl={2} lg={2}>
              <Box className="location-btn align">
                <LocationOnOutlinedIcon className="green" />
                <Typography className="book">
                  {" "}
                  {investorData?.location ? investorData.location : "..."}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box className="bg-lightgreen industry-box">
              <Typography variant="subtitle1" component="div" className="book">
                {investorData?.industry
                  ? investorData.industry
                  : "Entrepreneur"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* investorData.areaOfExpertise,investorData.companiesBacked */}
      {[" Area of Expertise"].map((item, index) => (
        <>
          {index === 0 ? <Divider className="divider" /> : null}

          <Box sx={{ mb: 4 }}>
            <Typography
              className="bold user-company-title"
              variant="h4"
              sx={{ m: "20px 0px" }}
            >
              {item}
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 6, sm: 12, md: 12 }}
            >
              {Array.from(Array(investorData?.areaOfExpertise?.length)).map(
                (_, index) => (
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    <Box className="company-box align">
                      <Typography className="book">
                        {investorData?.areaOfExpertise[index]}
                      </Typography>
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
          <Divider className="divider" />
        </>
      ))}
      {["Companies Backend"].map((item, index) => (
        <>
          {index === 0 ? <Divider className="divider" /> : null}

          <Box sx={{ mb: 4 }}>
            <Typography
              className="bold user-company-title"
              variant="h4"
              sx={{ m: "20px 0px" }}
            >
              {item}
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 6, sm: 12, md: 12 }}
            >
              {Array.from(Array(investorData?.companiesBacked?.length)).map(
                (_, index) => (
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    <Box className="company-box align">
                      <Typography className="book">
                        {investorData?.companiesBacked[index]}
                      </Typography>
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
          <Divider className="divider" />
        </>
      ))}
    </Box>
  );
};

export default User;
