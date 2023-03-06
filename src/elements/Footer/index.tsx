import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, Grid, Link as Links } from "@mui/material";
import footerimg from "./img/footerimg.png";
import icons from "./img/icons.svg";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 5 }} py={{ xs: 5, sm: 8 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3} className="header-container">
            <Box
              component="img"
              alt="Test"
              className="footer-img"
              src={footerimg}
            />
            <Box>
              <Typography className="bold">Make New India.com</Typography>
              <Typography variant="body1" className="body">
                Finding the right startup and fundraising is easier than ever in
                India
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                startIcon={<EmailIcon className="email-icon" />}
                size="large"
                className="support-btn sm"
                component={Link}
                to="/support"
              >
                Support
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={2} className="footer-title-container">
            <Box>
              <Typography className="footer-titles">Investor</Typography>
            </Box>
            <Box>
              <Links href="/investor-register" color="inherit" className="link">
                Sign Up
              </Links>
            </Box>
            <Box>
              <Links href="/login" color="inherit" className="link">
                Member Login
              </Links>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Box>
              <Typography className="footer-titles">Start Up</Typography>
            </Box>
            <Box>
              <Links href="/startup-register" color="inherit" className="link">
                Sign Up
              </Links>
            </Box>
            <Box>
              <Links href="/startup-login" color="inherit" className="link">
                Member Login
              </Links>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={2} lg={2}>
            <Box>
              <Typography className="footer-titles">Privacy & you</Typography>
            </Box>

            <Box>
              <Links href="/term-of-use" color="inherit" className="link">
                Terms of use
              </Links>
            </Box>
            <Box>
              <Links href="/privacy" color="inherit" className="link">
                Privacy Policy
              </Links>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Box>
              <Typography className="footer-titles">Pricing</Typography>
            </Box>
            <Box>
              <Links href="/pricing-investor" color="inherit" className="link">
                Investor
              </Links>
            </Box>
            <Box>
              <Links href="/pricing" color="inherit" className="link">
                Start Up
              </Links>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          className="header-container"
          sx={{ mt: { xs: "40px", sm: "40px", md: 0, lg: 0 } }}
        >
          <Grid
            item
            sm={12}
            xs={12}
            className="support-btn-container"
            display={{ md: "none" }}
            textAlign={{ sm: "start" }}
          >
            <Button
              variant="contained"
              startIcon={<EmailIcon className="email-icon " />}
              size="large"
              className="support-btn"
              sx={{ width: { sm: "40%" } }}
              component={Link}
              to="/support"
            >
              Support
            </Button>
          </Grid>

          <Grid item sm={8} xs={12} md={4} textAlign={{ sm: "start" }}>
            <Typography variant="button" className="contact-text">
              CONTACT US
            </Typography>
            <Typography className="email-text">
              Support@makenewindia.com
            </Typography>
          </Grid>
          <Grid
            item
            sm={8}
            xs={12}
            md={4}
            className="credit-container"
            display={{ xs: "none", sm: "none", md: "flex", xl: "flex" }}
          >
            <Typography className="credit-text">
              &reg; 2022 All Rights Reserved
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12} md={4}>
            <Box component="img" src={icons} />
          </Grid>
          <Grid
            item
            sm={12}
            xs={12}
            display={{ sm: "flex", md: "none", xs: "flex" }}
            justifyContent={{ xs: "center", sm: "center" }}
          >
            <Typography>&reg; 2022 All Rights Reserved</Typography>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
