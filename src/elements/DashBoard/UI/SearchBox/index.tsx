import {
  Box,
  Button,
  Grid,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./searchbox.css";
import "../../../utils/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResult } from "../../../../store/login/actions";
import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import SearchResult from "./SearchResult/SearchResult";
interface State {
  name: any;
  location: any;
}
const SearchBox = () => {
  const [visible, setVisible] = useState(false);
  const [values, setValues] = React.useState<State>({
    name: "",
    location: "",
  });
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const dispatch = useDispatch();
  const handleNavigate = () => {
    if (values.name === "" && values.location === "") {
      return null;
    } else {
      dispatch(getSearchResult(values));
      setVisible(!visible);
    }
    // Navigate("/search-result");
  };
  return (
    <>
      <Box className="path-container white">
        <Toolbar className="book opacity">
          HOME <ArrowForwardIosIcon fontSize="small" /> LOGIN
        </Toolbar>
        <Grid container className="search-main-container ">
          <Grid item xs={12} sm={12} md={12} xl={2} lg={2}>
            <Typography variant="h3" className="light size-l">
              Search
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} md={5} xl={3} lg={3} sx={{ mr: 3 }}>
            <InputBase
              onChange={handleChange("name")}
              startAdornment={<SearchIcon fontSize="large" />}
              placeholder="Company Name or industry"
              className="input medium"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={6}
            xl={3}
            lg={3}
            sx={{ mr: { xs: 3 }, mt: { xs: 2, sm: 0 } }}
          >
            <InputBase
              onChange={handleChange("location")}
              startAdornment={<LocationOnOutlinedIcon fontSize="large" />}
              className="input medium"
              placeholder="location"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            xl={2}
            lg={2}
            sx={{ mr: { xs: 3 }, mt: { xs: 2, sm: 0 } }}
            display="flex"
            justifyContent="center"
          >
            {/* <Link to="/search-result"> */}
            <Button
              onClick={handleNavigate}
              className="search button bg-green white medium alignments"
              sx={{ textDecoration: "none" }}
            >
              Search
            </Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Box>
      {visible && <SearchResult />}
    </>
  );
};

export default SearchBox;
