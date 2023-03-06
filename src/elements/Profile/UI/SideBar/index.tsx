import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import "./sidebar.css";
import google from "./img/google.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import {topRisingStartup,getRecomendedStartups} from "../../../../store/login/actions"

type myProps = {
  className?: string;
};

const SideBar = ({ className }: myProps) => {
  const dispatch=useDispatch()
  const items = [
    {
      heading: "Recommended Start Up",
      fields: [
        {
          title: "Google",
          desc: "Equity Offer <b> 20.66%</b> Ask price <b>10 L</b>",
        },
      ],
    },
    {
      heading: "Top Start Up",
      fields: [
        {
          title: "Google",
          desc: "Equity Offer <b> 20.66%</b> Ask price <b>10 L</b>",
        },
      ],
    },
    {
      heading: "Recently View Start Up",
      fields: [
        {
          title: "Google",
          desc: "Equity Offer <b> 20.66%</b> Ask price <b>10 L</b>",
        },
      ],
    },
  ];
  let data=useSelector((state:any)=>{
    return state.loginReducerHandler
  })
  if(data.recomendedStartups.length==0 || data.topRisingData.length==0){
    dispatch(topRisingStartup())
    dispatch(getRecomendedStartups())
  }

  return (
    <Box className={`sidebar-main-container  ${className}`}>
      {/* {items.map((item, index) => {
        
      })} */}
      {items.map((element:any)=>{
        // Recomended start up
        if(element.heading=="Recommended Start Up"){
          return <>
          <Typography variant="h4" className="bold size-m">
                {element.heading}
              </Typography>
            {data.recomendedStartups.map((ele:any)=>{
              return <Box mt={1}>
                <>
                  <Grid container mt={2}>
                    <Grid item xs={3} sm={2} md={3} lg={2}>
                      <Box component="img" src={google} className="google-img" />
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={10}>
                      <Typography className="size-s bold">{ele.companyName}</Typography>
                      <Typography variant="body1" className="size-xs book ">
                        Equity Offer <b> {ele?.equityOffer?ele.equityOffer:"..."}%</b> Ask price <b>{ele?.askPrice?ele.askPrice:"..."}</b>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />{" "}
                </>
              
            </Box> 
            })}
            <Box display="flex" justifyContent="center" mt={2}>
                <Link
                  underline="hover"
                  // href="/company-profile"
                  color="green"
                  className="bold size-s"
                >
                  Show More
                </Link>
                <KeyboardArrowDownIcon className="green" fontSize="medium" />
              </Box>
          </>
        }
        // top start ups
        else if(element.heading=="Top Start Up"){
          return <>
          <Typography variant="h4" className="bold size-m">
                {element.heading}
              </Typography>
            {data.topRisingData.map((ele:any)=>{
              return <Box mt={1}>
                <>
                  <Grid container mt={2}>
                    <Grid item xs={3} sm={2} md={3} lg={2}>
                      <Box component="img" src={google} className="google-img" />
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={10}>
                      <Typography className="size-s bold">Google</Typography>
                      <Typography variant="body1" className="size-xs book ">
                        Equity Offer <b> {ele?.equityOffer?ele.equityOffer:"..."}%</b> Ask price <b>{ele?.askPrice?ele.askPrice:"..."}</b>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />{" "}
                </>
              
            </Box> 
            })}
            <Box display="flex" justifyContent="center" mt={2}>
                <Link
                  underline="hover"
                  // href="/company-profile"
                  color="green"
                  className="bold size-s"
                >
                  Show More
                </Link>
                <KeyboardArrowDownIcon className="green" fontSize="medium" />
              </Box>
          </>
        }
        // have to implement recomended startup
      })}
    </Box>
  );
};

export default SideBar;
