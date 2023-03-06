import { Container, Typography, Grid, Box, Button } from "@mui/material";
import "./mainbanner.css";
import { banner, bannerimg } from "./img";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const alignBox1 = {
  display: "flex",
  justifyContent: "center",
  mt: { xs: 2, sm: 8 },
};
const MainBanner = () => {
  return (
    <Container className="max-width" sx={{ p: { xs: "0px", sm: "0px" } }}>
      <Grid container sx={{ mt: "50px", position: "relative" }}>
        <Grid item xs={12} md={6} sm={12}>
          <Box className="box-margin">
            <Box className="alignBox">
              <Typography className="fontE2">
                Welcome <u id="investor-text">Investor! </u>
              </Typography>
              <Typography className="fontE3">
                Connect with the brilliant minds behind the top startups in
                India
              </Typography>
            </Box>
            <Box className="btn-container">
              <Button
                variant="contained"
                className="banner-btn mR"
                component={Link}
                to="/login"
              >
                LogIn
              </Button>

              <Button
                variant="contained"
                className="banner-btn reg"
                component={Link}
                to="/investor-register"
              >
                Register
              </Button>
            </Box>
          </Box>

          <img src={bannerimg} alt="test" className="arrow-image" />
        </Grid>

        <Grid item md={6} sm={12}>
          <Box sx={alignBox1}>
            <img alt="test" className="endWidth" src={banner} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default MainBanner;
