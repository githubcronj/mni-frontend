import React from "react";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid,
  Link,
  Modal,
  Popover,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import "../../../utils/styles.css";
import "./user.css";
import user from "../img/user.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link as Links } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  lineHeight: 2,
};
const User = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClosee = () => setOpenModal(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const compdata = useSelector(
    (state: any) => state.loginReducerHandler.invProfile
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseBoth = () => {
    setOpenModal(false);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="#010101"
      fontSize="14px"
      href="/startup-dashboard"
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
      sx={{ opacity: "66% " }}
    >
      {" "}
    </Link>,
  ];
  // const startupInvestorProfile: any = useSelector<any>(
  //   (state) => state.startupReducerRegistration?.login[0]
  // );
  const startupInvestorProfile: any = useSelector<any>(
    (state) => state.startupReducer.getProfileData
  );
  console.log("abfvdghsc", startupInvestorProfile);
  return (
    <Box className="main-container bg-grey" sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      {/* <Button className="edit-btn" component={Links} to="/edit-profile">
        <EditIcon className="edit-icon" />
      </Button> */}

      <Grid container spacing={2} className="user-sub-container">
        <Grid
          item
          xs={4}
          sm={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            alt="user"
            src={user}
            sx={{ width: { sm: 112, xs: 100 }, height: { sm: 112, xs: 100 } }}
          />
        </Grid>
        <Grid item xs={8} sm={9} sx={{ position: "relative" }}>
          <Grid>
            <Grid sx={{ pt: 2 }}>
              <Typography
                sx={{ fontSize: { sm: "34px", xs: "21px" } }}
                className="bold"
              >
                {startupInvestorProfile?.name
                  ? startupInvestorProfile.name
                  : "..."}
              </Typography>
              <Typography
                sx={{ fontSize: { sm: "18px", xs: "13px" } }}
                variant="caption"
                className="bold "
                gutterBottom
              >
                Google •
                {startupInvestorProfile?.occupation
                  ? startupInvestorProfile.occupation
                  : "CEO"}
              </Typography>
            </Grid>

            <Box
              className="bg-lightgreen industry-box"
              sx={{
                position: "absolute",
                right: 0,
                top: { sm: "40%", xs: "90%" },
              }}
            >
              <Typography variant="subtitle1" component="div" className="book">
                {startupInvestorProfile?.industry
                  ? startupInvestorProfile.industry
                  : "Entrepreneur"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ ml: { md: "25%", xs: 0 } }}>
        <Grid>
          <Typography variant="body2" color="text.secondary" className="book">
            {startupInvestorProfile?.description
              ? startupInvestorProfile.description
              : "..."}
          </Typography>
        </Grid>
        <Grid sx={{ mt: 4, mb: 4 }}>
          <Box className="location-btn align">
            <LocationOnOutlinedIcon className="green" />
            <Typography className="book">
              {startupInvestorProfile?.location
                ? startupInvestorProfile.location
                : "..."}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container mb={4} lg={8}>
        <Grid item xs={6} lg={5} md={5}>
          <Button
            onClick={handleClick}
            className="connect-Btn bg-green btnProfile"
            sx={{ color: "white", textTransform: "none" }}
          >
            Connect
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Box
              textAlign="center"
              sx={{ px: 1, py: 2, lineHeight: "normal", m: 1 }}
              className="popover-connect"
            >
              <Box display="flex" alignItems="center">
                <CloseIcon
                  onClick={handleClose}
                  sx={{ color: "orange", mr: 2 }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: "18px", xl: "20px" },
                    fontFamily: "bold",
                  }}
                >
                  Want to add a note to your invitation?
                </Typography>
              </Box>
              <Typography
                sx={{
                  p: 2,
                  fontStyle: "italic",
                  className: "poppins-italic",
                  fontSize: { xs: "13px", xl: "16px" },
                }}
              >
                Send connection with a note
              </Typography>
              <Button
                onClick={handleClose}
                sx={{ mr: 2 }}
                className="btn-connect bg-green"
              >
                No, Send Connect
              </Button>
              <Button onClick={handleOpen} className="btn-connect bg-green">
                Yes
              </Button>
            </Box>
          </Popover>
          <Modal
            open={openModal}
            // onClose={handleClosee}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box display="flex" alignItems="center">
                <CloseIcon
                  onClick={handleClosee}
                  sx={{ color: "orange", mr: 2 }}
                />
                <Typography fontFamily="bold" fontSize="20px">
                  Enter your Note
                </Typography>
              </Box>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="Type Something..."
                style={{ width: 640, padding: 20 }}
              />
              <Button
                onClick={handleCloseBoth}
                sx={{ display: "flex", float: "right", width: "23%" }}
                className="btn-connect bg-green"
              >
                Send
              </Button>
            </Box>
          </Modal>
        </Grid>
        <Grid item xs={4} lg={4} md={4}>
          <Button
            className="shareBtn bg-white btnProfile"
            sx={{ color: "green", textTransform: "none" }}
          >
            Share
          </Button>
        </Grid>
      </Grid>
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
              {Array.from(
                Array(startupInvestorProfile?.areaOfExpertise.length)
              ).map((_, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Box className="company-box align">
                    <Typography className="book">
                      {startupInvestorProfile?.areaOfExpertise[index]}
                    </Typography>
                  </Box>
                </Grid>
              ))}
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
              {Array.from(
                Array(startupInvestorProfile?.companiesBacked.length)
              ).map((_, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>
                  <Box className="company-box align">
                    <Typography className="book">
                      {startupInvestorProfile?.companiesBacked[index]}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Divider className="divider" />
        </>
      ))}
    </Box>
  );
};

export default User;
