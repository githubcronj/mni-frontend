import React, { useState } from "react";
import "./Navbar.css";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navLogo from "./img/navLogo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import { Link as Links, Navigate, useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GoogleIcon from "@mui/icons-material/Google";
// import googleLogo from "../img/googleLogo.png";
import googleLogo from "../GoogleSlider/img/googleLogo.png";
import NotificationCard from "../StartupComponents/NotificationList/NotificationCard/NotificationCard";
import UserCard from "../StartupComponents/UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSearchResultS } from "../../store/startup/actions";
import { getSearchResult, getSearchResultI } from "../../store/login/actions";

interface Props {
  window?: () => Window;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "orange",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

interface State {
  name: any;
}

export const Navbar = (props: Props) => {
  const userName: any = useSelector<any>(
    (state) => state.loginReducerHandler?.login[0]?.name
  );
  const companyName: any = useSelector<any>(
    (state) => state.startupReducer?.login[0]?.companyName
  );

  // console.log("company Name ---> " + companyName);

  let toWhere = "";

  const type: any = useSelector<any>((state) => state.loginReducerHandler.type);
  const type2: any = useSelector<any>((state) => state.startupReducer.type);

  let name = "";
  if (type === "investor") {
    name = userName;
    toWhere = "/dashboard";
  } else {
    name = companyName;
    toWhere = "/startup-dashboard";
  }

  const [userShow, setUserShow] = useState(false);
  const [notification, setNotification] = useState(false);

  // const [visible, setVisible] = useState(false);
  const [values, setValues] = React.useState<State>({
    name: "",
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      console.log("MY VALUES --> ", event.target.value);
    };
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleNavigate = (e: any) => {
    console.log("key", e.key);

    if (values.name === "") {
      return null;
    } else if (e.key === "Enter" && type2 === "startup") {
      dispatch(getSearchResultS(values));
      navigate("/search-result-startup");
    } else if (e.key === "Enter" && type === "investor") {
      dispatch(getSearchResultI(values));
      navigate("/search-result");
    }
  };
  return (
    <>
      <AppBar component="nav" className="app-bar">
        <Toolbar sx={{ backgroundColor: "#fff", borderBottom: "none" }}>
          <Box
            className="navbar-home"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="Test"
              className="logo-navbar"
              src={navLogo}
            />

            <Box sx={{ display: { sm: "flex" } }}>
              <Search
                onChange={handleChange("name")}
                onKeyDown={handleNavigate}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Investor Name"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box
              className="grid xs-none"
              sx={{ display: "flex", justifyContent: "space-between", position:{sm:"unset",xs:"absolute"},top:"45px" }}
            >
              <Link to={toWhere} style={{ textDecoration: "none" }}>
                <Box>
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="success"
                  >
                    <Badge>
                      <Box>
                        <HomeIcon className="iconSize"/>
                        <Typography sx={{color:"#000000"}} className="navbarIcons">Home</Typography>
                      </Box>
                    </Badge>
                  </IconButton>
                </Box>
              </Link>
              <Box>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="success"
                >
                  {" "}
                  <Badge>
                      <Link to="/chat" style={{textDecoration:"none"}}>
                      <Box>
                      <MailIcon className="iconSize" color="success"/>
                      <Typography sx={{color:"#000000"}} className="navbarIcons">Message</Typography>
                    </Box>
                      </Link>
                  </Badge>
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="success"
                  onClick={() => setNotification(!notification)}
                >
                  <Badge>
                    <Box>
                      <NotificationsIcon className="iconSize"/>
                      <Typography sx={{color:"#000000"}} className="navbarIcons">Notification</Typography>
                    </Box>
                  </Badge>
                </IconButton>
              </Box>
            </Box>

            <Box>
              <Box className="profile-nav">
                <Button
                  onMouseOver={() => setUserShow(true)}
                  onMouseLeave={() => setUserShow(false)}
                  className="startup-btn"
                  startIcon={<GoogleIcon sx={{ ml: 1 }} />}
                  endIcon={
                    <ExpandMoreIcon
                      className="green icon-none"
                      sx={{ ml: 4 }}
                    />
                  }
                  sx={{ md: { px: 4, py: 1.3 } }}
                >
                  <Typography className="icon-none" sx={{ color: "black" }}>
                    {name}
                  </Typography>
                  {userShow && <UserCard />}
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {notification && <NotificationCard />}
    </>
  );
};
