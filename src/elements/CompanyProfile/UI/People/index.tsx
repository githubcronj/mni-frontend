import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SideBar from "../../../Profile/UI/SideBar";
import CompanyDescription from "../CompanyDescription";
import picture from "./img/picture.png";
import "./people.css";

const People = () => {
  return (
    <>
      <Grid container className="people-main-container" rowGap={{ xs: 5 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            className="people-box bg-grey"
            key={index}
          >
            <Box className="align">
              <img src={picture} className="people-width" />
            </Box>
            <Box className="people-text">
              <Typography variant="caption">CEO</Typography>
              <Typography variant="h5" className="bold" gutterBottom>
                James
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default People;
