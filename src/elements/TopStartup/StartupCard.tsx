import { Typography, Box, Button, Grid } from "@mui/material";
import React from "react";
import { SCard } from "./SCard";
import "./StartupCard.css";

function StartupCard() {
  return (
    <Grid className="rootGrid">
      <Box
        id="card-header"
        sx={{
          mt: "20px",
          ml: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography id="startup-heading" sx={{ maxWidth: "40%" }}>
          Top Rising Startups
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#EFF3F3",
            height: "60px",
            color: "#138707",
            mt: "10px",
            mr: "20px",
            borderRadius: "0px",
          }}
          className="view-more-btn"
        >
          View More
        </Button>
      </Box>

      <Box>
        <SCard />
      </Box>
    </Grid>
  );
}

export default StartupCard;
