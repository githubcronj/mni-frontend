import React from "react";
import {
  createTheme,
  colors,
  Button,
  Typography,
  Container,
  Grid,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import "./Chat.css";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import picture from "./img/picture.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "grey",
  //   marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto",
  //   },
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
      width: "20ch",
    },
  },
}));
export const Chat = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    ></Link>,
  ];

  return (
    <Container className="chat-container">
      <Grid container>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Typography fontSize="45px">Messaging</Typography>
            </Grid>
            <Grid item>
              <Typography fontSize="18px">(23 Chats)</Typography>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>

          <Grid container p={2} alignItems="center">
            <Button
              className="btn-ChatSection"
              endIcon={<ArrowForwardIosIcon />}
            >
              <Grid item width="20%" mr={2}>
                <Typography>12 Jan 2022</Typography>
              </Grid>
              <Grid>
                <img src={picture} width="80%" alt="Test" />
              </Grid>
              <Grid item xs={8}>
                <Typography> John Doe </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Lorem ipsum dolor, sit
                </Typography>
              </Grid>
              {/* <Grid item>
                <ArrowForwardIosIcon />
              </Grid> */}
            </Button>
          </Grid>
          <Grid container p={2} alignItems="center">
            <Button
              className="btn-ChatSection"
              endIcon={<ArrowForwardIosIcon />}
            >
              <Grid item width="20%" mr={2}>
                <Typography>12 Jan 2022</Typography>
              </Grid>
              <Grid>
                <img src={picture} width="80%" alt="Test" />
              </Grid>
              <Grid item xs={8}>
                <Typography> John Doe </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Lorem ipsum dolor, sit
                </Typography>
              </Grid>
              {/* <Grid item>
                <ArrowForwardIosIcon />
              </Grid> */}
            </Button>
          </Grid>
          <Grid container p={2} alignItems="center">
            <Button
              className="btn-ChatSection"
              endIcon={<ArrowForwardIosIcon />}
            >
              <Grid item width="20%" mr={2}>
                <Typography>12 Jan 2022</Typography>
              </Grid>
              <Grid>
                <img src={picture} width="80%" alt="Test" />
              </Grid>
              <Grid item xs={8}>
                <Typography> John Doe </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Lorem ipsum dolor, sit
                </Typography>
              </Grid>
              {/* <Grid item>
                <ArrowForwardIosIcon />
              </Grid> */}
            </Button>
          </Grid>
          <Grid container p={2} alignItems="center">
            <Button
              className="btn-ChatSection"
              endIcon={<ArrowForwardIosIcon />}
            >
              <Grid item width="20%" mr={2}>
                <Typography>12 Jan 2022</Typography>
              </Grid>
              <Grid>
                <img src={picture} width="80%" alt="Test" />
              </Grid>
              <Grid item xs={8}>
                <Typography> John Doe </Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  Lorem ipsum dolor, sit
                </Typography>
              </Grid>
              {/* <Grid item>
                <ArrowForwardIosIcon />
              </Grid> */}
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Box className="bg-white" height="80vh" sx={{ position: "relative" }}>
            <Grid container className="container-chat" p={2}>
              <Grid item>
                <img src={picture} width="80%" alt="Test" />
              </Grid>
              <Grid item>
                <Typography>John Doe</Typography>
                <Typography sx={{ color: "#7C7C7C", fontSize: "14px" }}>
                  Google . CEO
                </Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                position: "absolute",
                bottom: "10px",
                left: "10px",
                alignItems: "center",
              }}
            >
              <FormControl sx={{ width: "50%", backgroundColor: "#fff" }}>
                <OutlinedInput
                  sx={{ border: "1px solid #333333" }}
                  placeholder="Type Something"
                />
              </FormControl>

              <SendIcon sx={{ ml: 2 }} fontSize="large" color="warning" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
