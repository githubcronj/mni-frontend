import { Box } from "@mui/system";
import { Link, Typography, Grid } from "@mui/material";
import React from "react";
import { StartupCard1 } from "../TopStartup/SCard";
import { Data } from "../TopStartup/CardDataArray";

function TopStartUpPage() {
  return (
    <>
      <Box>
        <Link
          id="Navigation"
          sx={{ textDecoration: "none", color: "#010101", opacity: "0.75" }}
        >
          HOME &gt;
        </Link>
      </Box>
      <Typography
        sx={{
          fontSize: "55px",
          borderBottom: "solid 3px #ff9a33",
          width: "490px",
        }}
      >
        Top Rising Startups
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Data.map((item) => (
          <Box>
            <Grid item xs={2} sm={4} md={4}>
              <StartupCard1 cardData={item} key={item.id} />
            </Grid>
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default TopStartUpPage;
