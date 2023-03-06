import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import "./registerbanner.css";
import { stockbrokers, livestartups, successdeals } from "./img";
import { Link } from "react-router-dom";
const RegisterBanner = () => {
  const items = [
    { img: stockbrokers, text: "Potential Investors", amt: 250 },
    { img: livestartups, text: "Live Startups", amt: 1000 },
    { img: successdeals, text: "Successful Deals", amt: 50 },
  ];
  return (
    <Container className="max-width" sx={{ p: { xs: "0px", sm: "0px" } }}>
      <Grid container className="main-reg-container" mt={2}>
        <Grid xs={12}>
          <Box className="heading-align">
            <Typography className="heading">
              Help India build the next <u> Unicorn! </u>
            </Typography>
            <Typography variant="caption" className="sub-heading">
              Become part of the <b>MAKE NEW INDIA</b> community today.
            </Typography>
          </Box>
        </Grid>

        <Grid container className="box-style" spacing={3}>
          {items.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              key={index}
              className="item-container"
            >
              <img src={item.img} key={index} className="icon" />
              <Box textAlign="center">
                <Typography variant="h2" className="icon-text">
                  {item.amt}
                </Typography>
                <Typography variant="caption" className="icon-caption">
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid
          xs={12}
          sm={12}
          className="reg-btn-container"
          justifyContent="center"
          display="flex"
        >
          <Button
            variant="contained"
            className="register-btn"
            component={Link}
            to="/register"
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterBanner;
