import { Box, Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import "./networklist.css";
import NetWorkCard from "../NetWorkCard";

const NetWorkList = () => {

  return (
    <>
      <Box className="main-container bg-grey box">
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
