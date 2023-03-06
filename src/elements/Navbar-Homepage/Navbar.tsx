import React from "react";
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
  Link,
  Popover,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navLogo from "./img/navLogo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import { Dropdown } from "./Dropdown/Dropdown";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import { Link as Links } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
let textStyle = "";
if (window.navigator.platform.indexOf("Mac") > -1) {
  textStyle = "nav-login-btn-text";
}
const navItems = [
  { text: "HOME", url: "/" },
  { text: "INVESTOR", url: "/login" },
  { text: "STARTUP", url: "/startup-login" },
  { text: "PRICING" },
];
// const dropLink = ["Investor", "Startup"];

export const Navbar = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClickk = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openn = Boolean(anchorEl);
  const id = openn ? "simple-popover" : undefined;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState("");
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar component="nav" className="app-bar">
        <Toolbar sx={{ backgroundColor: "#fff", borderBottom: "none" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>

          <Box
            className="navbar-home"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="Test"
              className="logo-navbar"
              src={navLogo}
            />

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item, index) => (
                <Link
                  // className="sitelinks-navbar"
                  // onClick={() => setActive(item.text)}
                  key={index}
                  className="navItems"
                  sx={{
                    mr: { md: 10, sm: 2 },
                    display: "flex",
                    alignItems: "center",
                    color: active === item.text ? "orange" : "black",
                    textDecoration: "none",
                  }}
                  href={item.url}
                >
                  {item.text}
                  {index === 3 ? <ExpandMoreIcon /> : null}

                  {index === 3 ? (
                    <>
                      <Popover
                        id={id}
                        open={openn}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Typography sx={{ p: 2 }}>
                          The content of the Popover.
                        </Typography>
                      </Popover>
                    </>
                  ) : null}
                  {/* {index === 3 ? (
                    <Box className="dropdown-content ">
                      <ListItemButton sx={{}}>
                        <ListItemText
                          primary="Investor"
                          sx={{ color: "#333" }}
                        />
                        <KeyboardArrowRightIcon
                          sx={{ color: "#707070", opacity: "0.7" }}
                        />
                      </ListItemButton>
                      <ListItemButton sx={{}}>
                        <ListItemText
                          primary="Startup"
                          sx={{ color: "#333" }}
                        />
                        <KeyboardArrowRightIcon
                          sx={{ color: "#707070", opacity: "0.7" }}
                        />
                      </ListItemButton>
                    </Box>
                  ) : null} */}
                </Link>
              ))}
            </Box>
            <Box display="flex">
              <Box className="login-btn" display="flex">
                <Button
                  endIcon={<ExpandMoreIcon />}
                  className="nav-login-btn"
                  sx={{
                    //   color: "#333",
                    mr: { md: 3, sm: 2, xs: 2 },
                  }}
                >
                  <Box>Login</Box>
                </Button>
                <Box className="dropdown-content">
                  {/* <Link href="/login">
                    Investor <KeyboardArrowRightIcon />
                  </Link>
                  <Link href="/">
                    Startup <KeyboardArrowRightIcon />
                  </Link> */}
                  <ListItemButton
                    component={Links}
                    to="/login"
                    className="align"
                  >
                    <ListItemText primary="Investor" className="list-link" />
                    <KeyboardArrowRightIcon
                      fontSize="small"
                      sx={{ color: "#707070", opacity: "0.7" }}
                    />
                  </ListItemButton>
                  <ListItemButton
                    component={Links}
                    to="/startup-login"
                    className="align"
                  >
                    <ListItemText primary="Startup" className="list-link" />
                    <KeyboardArrowRightIcon
                      fontSize="small"
                      sx={{ color: "#707070", opacity: "0.7" }}
                    />
                  </ListItemButton>
                </Box>
              </Box>
              <Box className="regBtn">
                {" "}
                <Button
                  component={Links}
                  to="/register"
                  className="nav-register-btn"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" className="dropdown">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box
            component="img"
            alt="Test"
            className="logo-navbar-drawer"
            src={navLogo}
          />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton component="a" href="/">
              <ListItemText primary="HOME" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="INVESTOR" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="STARTUP" />
              <KeyboardArrowRightIcon />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="PRICING" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Investor" />
                  <KeyboardArrowRightIcon />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary="Startup" />
                  <KeyboardArrowRightIcon />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </Box>
    </>
  );
};
