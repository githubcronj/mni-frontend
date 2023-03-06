import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

// import Carousel from 'react-elastic-carousel';

import { Data } from "../../DashboardMenu/DashBoardMain/CardDataArray";

// import Carousel from "react-multi-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchResult,
  saveChoosenData,
  saveRecentlyViewed,
} from "../../../../../store/login/actions";

interface cardData {
  cardData?: any;
  ele?: any;
}
export default function SearchResult() {
  const data = useSelector((state: any) => {
    return state.loginReducerHandler.search;
  });
  console.log("INVESTOR SEARCH DATA -->>", data);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getSearchResult());
  // }, []);

  return (
    <div>
      <Box sx={{ display: "flex", pl: 3 }} className="btnBox">
        <Typography
          sx={{ fontSize: { sm: "42px", xs: "28px" }, fontWeight: "600" }}
        >
          Search Result
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {data.map((ele: any) => (
          <Grid item lg={4} md={6} xs={12}>
            <StartupCard1 ele={ele} key={ele.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export const StartupCard1 = (props: cardData) => {
  let { ele } = props;
  // const [active, setActive] = useState(1);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const handelRoute = () => {
  //   dispatch(saveRecentlyViewed(ele));
  //   dispatch(saveChoosenData(ele));
  //   navigate("/company-profile");
  // };

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
        style={{ cursor: "pointer" }}
        // onClick={() => {
        //   handelRoute();
        // }}
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
            {ele?.description ? ele.description : "..."}
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
