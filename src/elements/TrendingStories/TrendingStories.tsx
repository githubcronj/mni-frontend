import React from "react";
import {
  Box,
  Card,
  Typography,
  CardMedia,
  CardActions,
  CardContent,
  Toolbar,
} from "@mui/material";
import vr from "./img/vr.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { storyData } from "./storiesArray";
import { Padding } from "@mui/icons-material";
import "./TrendingStories.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const responsive = {
  desktop: {
    breakpoint: { max: 1536, min: 1300 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 900 },
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
interface storyCardData {
  ele: any;
  storyCardData: any;
}

export const TrendingStories = () => {
  return (
    <>
      <Toolbar sx={{ maxWidth: "100%", mt: 2.5 }}>
        <Typography
          id="stories-heading"
          sx={{
            borderBottom: "solid 4px #FF9A33",

            ml: "20px",
            mb: "40px",
          }}
        >
          Trending Stories
        </Typography>
      </Toolbar>
      <Box>
        <TrendingCard />
      </Box>
    </>
  );
};
export const TrendingCard = () => {
  const stories: any = useSelector((state: any) => {
    return state.loginReducerHandler.blogs;
  });
  console.log(stories, "}}}stories");

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
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {stories.map((ele: any) => (
          <Box sx={{ padding: "20px" }} className="story-container">
            <StoriesCard ele={ele} key={ele.id} />
          </Box>
        ))}
      </Carousel>
    </>
  );
};
export const StoriesCard = (props: any) => {
  let { ele } = props;

  return (
    <>
      <Box
        sx={{ ml: "0px" ,textDecoration:"none"}}
        id="story-card"
        component={Link}
        to="/trending-story-view"
      >
        <Card id="card-content" sx={{ marginBottom: "10px" }}>
          <CardMedia
            id="card-img"
            component="img"
            alt="green iguana"
            image={storyData[0].img}
          />
          <CardContent>
            <Typography
              variant="h4"
              id=""
              sx={{ fontWeight: "bold", fontSize: "24px" }}
            >
              {ele.heading}
            </Typography>
            <Typography sx={{ letterSpacing: "0.32px" }} id="">
              {ele.description}
            </Typography>
            <Typography sx={{ fontWeight: "bold", opacity: "1" }} id="">
              {ele.link}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
