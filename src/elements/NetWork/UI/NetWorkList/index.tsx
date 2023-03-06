import { Box, Breadcrumbs, Grid, Stack, Typography, Link } from "@mui/material";
import FormButton from "../../../utils/buttons/SuccessButton";
import "./networklist.css";
import PeopleIcon from "@mui/icons-material/People";
import NetWorkCard from "../NetWorkCard";
import { Link as Links } from "react-router-dom";

const NetWorkList = () => {
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
      href="/login"
      sx={{ opacity: "66%" }}
    >
      LOGIN
    </Link>,
  ];
  return (
    <>
      <Box className="main-container bg-grey box">
        <Stack spacing={2} className="top-bar bg-grey">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Grid container>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Typography className="size-sm light my-network-text">
              My Network
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={6} lg={6}>
            <FormButton
              className="req-btn bold"
              label="Request List"
              startIcon={<PeopleIcon className="opacity" fontSize="large" />}
              component={Links}
              to="/request-list"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
          mt={3}
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={6} key={index}>
              <NetWorkCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NetWorkList;
