import { Typography, Box, Container, Grid } from "@mui/material";
import manimg from "./img/manimg.png";
import "./discoverbanner.css";

const DiscoverBanner = () => {
  return (
    <Container className="max-width" sx={{ p: { xs: "0px", sm: "0px" } }}>
      <Grid container className="discover-main-container">
        <Grid item md={6} sm={12} lg={7} xl={7}>
          <Box>
            <Box>
              <Typography variant="h3" className="main-heading">
                Discover top performing Startups <u>to invest in </u>
                <u id="india-text">India</u>
                <Typography className="sub-text">
                  Finding the right startup is easier than ever. Connect with
                  thousands of opportunities in India and lead the next unicorn
                  in India.
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} lg={5} xl={5}>
          <img src={manimg} className="image" alt="man" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DiscoverBanner;
