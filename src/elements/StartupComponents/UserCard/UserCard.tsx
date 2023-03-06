import React, { FC, useState } from "react";
import "./UserCard.css";
import userimg from "../../../Assets/image/userimg.png";
import point from "../../../Assets/image/point.svg";
import forwardArrow from "../../../Assets/image/forwardArrow.svg";
import Divider from "@mui/material/Divider";
import LogoutCard from "../../LogoutCard/LogoutCard";
import {
  Container,
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

interface wall {
  setConnected?: any;
  username?: string;

  img?: string;
}

const UserCard: FC<wall> = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const investorData: any = useSelector<any>(
    (state) => state.loginReducerHandler?.login[0]
  );
  const startupData: any = useSelector<any>(
    (state) => state.startupReducer?.login[0]
  );

  const type: any = useSelector<any>((state) => state.loginReducerHandler.type);
  let name = "";
  let location = "";
  let toWhere = "";
  let toProfile = "";

  if (type === "investor") {
    name = investorData?.name;
    location = investorData?.location;
    toWhere = "/edit-profile";
    toProfile = "/profile";
  } else {
    name = startupData?.companyName;
    location = startupData?.location;
    toWhere = "/edit-profile-startup";
    toProfile = "/startup-profile";
  }

  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1300",
        right: "10px",
        top: "40px",
      }}
    >
      <Container>
        <Card
          sx={{
            width: "300px",
            // boxShadow: "5px 10px 5px 10px #dddddd",
            padding: "10px 15px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              className="userimg"
              src={props.img ? props.img : userimg}
              alt="img"
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  flex: "1 0 auto",
                }}
              >
                <Typography
                  sx={{ fontSize: "20px", textTransform: "none" }}
                  variant="subtitle1"
                >
                  {name ? name : "Please, Sign In!"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#FF9A33",
                      textTransform: "none",
                    }}
                  >
                    Premium
                  </Typography>
                  <Box>
                    <img className="point" src={point} alt="point" />
                  </Box>

                  <Typography sx={{ fontSize: "14px", textTransform: "none" }}>
                    {location}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Box>
          <Box
            sx={{
              marginBottom: "10px",
            }}
          >
            <Link to={toProfile} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  backgroundColor: "#FF9A33 !important",
                  width: "100%",
                  textTransform: "none",
                }}
              >
                View Profile
              </Button>
            </Link>
            <Link to={toWhere} style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#138707 !important",
                  color: "#ffffff",
                  width: "100%",
                  marginTop: "5px",
                  textTransform: "none",
                }}
              >
                Edit Profile
              </Button>
            </Link>
          </Box>
          <Divider />
          <Link to={"/pricing"} style={{ textDecoration: "none" }}>
            <Box
              className="wrapper"
              sx={{
                display: "flex",

                justifyContent: "space-between",
                borderBottom: "1px solid #00000014",
                padding: "10px 0px",
                textTransform: "none",
              }}
            >
              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                Upgrade to Premium
              </Typography>

              <img src={forwardArrow} alt="img" />
            </Box>
          </Link>
          <Link to={"/change-password"} style={{ textDecoration: "none" }}>
            <Box
              className="wrapper"
              sx={{
                display: "flex",

                justifyContent: "space-between",
                borderBottom: "1px solid #00000014",
                padding: "10px 0px",
                textTransform: "none",
              }}
            >
              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                Change Password
              </Typography>
              <img src={forwardArrow} alt="img" />
            </Box>
          </Link>
          <Link to={"/support"} style={{ textDecoration: "none" }}>
            <Box
              className="wrapper"
              sx={{
                display: "flex",

                justifyContent: "space-between",
                borderBottom: "1px solid #00000014",
                padding: "10px 0px",
              }}
            >
              <Box sx={{ display: "flex", textTransform: "none" }}>
                <Typography
                  color="text.secondary"
                  component="div"
                  className="btntext4"
                >
                  Support
                </Typography>
              </Box>

              <img src={forwardArrow} alt="img" />
            </Box>
          </Link>
          <Box
            className="wrapper"
            sx={{
              display: "flex",

              justifyContent: "space-between",
              borderBottom: "1px solid #00000014",
              padding: "10px 0px",
            }}
          >
            <Typography
              sx={{ color: "orange", textTransform: "none" }}
              className="btntext"
              onClick={handleOpen}
            >
              Logout
            </Typography>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <LogoutCard />
            </Modal>
          </Box>
        </Card>
      </Container>
    </div>
  );
};
export default UserCard;
