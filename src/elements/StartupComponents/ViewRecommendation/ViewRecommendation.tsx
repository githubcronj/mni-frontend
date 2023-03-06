import { Box, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import { cardDataRecomended } from '../ProfileCard/ProfileCardArr'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getInvestorProfile } from '../../../store/startup/actions';


export default function ViewRecommendation() {
  const dispatch = useDispatch();
  const compdata = useSelector((state: any) => {
    return state.startupReducer.investorProfile;
  });
  useEffect(() => {
    // dispatch(getProfileInv("2e8e2a95-4371-4c42-a26f-dd73b92fa134"));
    dispatch(getInvestorProfile());
  }, []);
  return (
    <div>
        <Link to={"/startup-dashboard"} style={{textDecoration:"none", color:"#010101",opacity:"0.8"}}>
        <Toolbar className="book opacity">
        BACK <ArrowForwardIosIcon sx={{fontSize:"14px"}} /> 
      </Toolbar>
      </Link>
        <Box sx={{ display:"flex" ,pl:3}} className="btnBox">
            <Typography sx={{fontSize:{sm:"42px", xs:"28px"},fontWeight:"600"}}>Recommended</Typography>
        </Box>
        <Grid container spacing={3}>
        {compdata.map((item:any) => (
        <Grid item lg={4} md={6} xs={12} >
          <ProfileCard element={item} key={item.id}  />
        </Grid>
      ))}
        </Grid>

    </div>
  )
}
