import { Box, Button, Grid, Typography } from "@mui/material";
import googleround from "./img/googleround.png";
import "./networkcard.css";
const NetWorkCard = () => {
  return (
    <Grid container mt={2} p={2} className="bg-white">
      <Grid item xs={2} sm={2} md={2} xl={2} lg={2}>
        <Box component="img" src={googleround} className="max-width img-box" />
      </Grid>
      <Grid
        item
        xs={7}
        sm={8}
        md={8}
        xl={8}
        lg={8}
        className="company-desc-container"
      >
        <Box sx={{ p: "10px" }}>
          <Typography className="size-s bold network-company-text">
            Company Name
          </Typography>
          <Typography
            variant="body1"
            className="size-xs book network-industry-text"
          >
            Industry Location
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} sm={2}>
        <Box sx={{ display: "block" }}>
          <Button className="btn white bg-orange" fullWidth>
            Chat
          </Button>
          <Button className=".rmv-btn btn orange" fullWidth>
            Remove
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NetWorkCard;
