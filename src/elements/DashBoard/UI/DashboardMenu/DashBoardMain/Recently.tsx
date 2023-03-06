import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  CardActions,
} from "@mui/material";

// import Carousel from 'react-elastic-carousel';

import "./StartupCard.css";
import { Data } from "./CardDataArray";

// import Carousel from "react-multi-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

const responsive = {
  desktop: {
    breakpoint: { max: 1536, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 900, min: 600 },
    items: 1,
  },
  mobilenew: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

interface cardData {
  cardData?: any;
  ele?: any;
}

const Recently = () => {
  const compdata = useSelector((state: any) => {
    return state.loginReducerHandler.recentlyViewed;
  });

  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        arrows={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {compdata.map((ele: any) => (
          <Box className="card-container">
            <StartupCard1 ele={ele} key={ele.id} />
          </Box>
        ))}
      </Carousel>
    </>
  );
};
export const StartupCard1 = (props: cardData) => {
  let { ele } = props;
  // const [active, setActive] = useState(1);
  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center" }}
      className="cardOuterGrid"
    >
      <Card
        id="startup-card"
        sx={{
          marginBottom: "10px",
          position: "relative",
        }}
      >
        <Box>
          <CardMedia
            component="img"
            alt="green iguana"
            image={ele.img ? ele.img : Data[0].img}
          />
          <Box
            sx={{
              display: "flex",
              columnGap: "10px",
              mt: 2,
              ml: 2,
            }}
          >
            <img
              src={ele.logoImg ? ele.logoImg : Data[0].logoImg}
              alt="test"
              className="logo"
            ></img>
            {/* {props.cardData.membership && (
            <Typography
            className="memberShip"
              sx={{
                position: "absolute",
                backgroundColor: "#101010",
                color: "#FFF",
                borderRadius: "30px 0px 0px 30px",
                width: "fit-content",
              }}
            >
              {Data[0].membership}
            </Typography>
          )} */}

            <Typography variant="h4" id="company-name">
              {ele.companyName}
            </Typography>
          </Box>
        </Box>
        <CardContent sx={{ display: "flex" }} className="grey-btn">
          <Typography id="industry">{ele.industry}</Typography>
          <Typography id="industry">{ele.location}</Typography>
        </CardContent>
        <CardContent>
          <Typography
            // sx={{ ml: "16px", pt: "-20px", mb: "-10px" }}
            id="industry-content"
          >
            {"companyDescription"}
          </Typography>
        </CardContent>
        <CardContent>
          <Grid id="" container sx={{ ml: 2, mb: "2px" }}>
            <Grid item xs={4}>
              <Typography className="ques">Equity Offer</Typography>
              <Typography className="ans">{ele.equityOffer}</Typography>
            </Grid>
            <Grid item xs={4} id="">
              <Typography className="ques">Ask Price</Typography>
              <Typography className="ans">{ele.askPrice}</Typography>
            </Grid>
            <Grid
              item
              xs={4}
              id=""
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography className="ques">FOUNDED</Typography>
              <Typography sx={{ fontSize: "24px" }} className="ans">
                {ele.founded}
              </Typography>
            </Grid>
          </Grid>
          <CardActions>
            <Button
              variant="contained"
              sx={{ width: "390px", height: "62px" }}
              id="chat-btn"
              color="success"
            >
              Chat
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Recently;
