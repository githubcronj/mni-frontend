import "./GraphCards.css"
import {  Box, Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";


interface props {
  cardData: any;
}
const GraphCards: FC<props> = ({ cardData }) => {
  return (
    <Grid sx={{display:"flex", justifyContent:"center"}}>
      <Box sx={{border:"1.5px solid #cccccc",p:{md:3,sm:5,xs:3 }, width:{lg:"100%",md:"95%", sm:"100%"}}}>
        <Grid container spacing={2} sx={{display:"flex", alignItems:"center", justifyContent:"center",pb:3}}>
            <Grid item xs={4}>
            <Typography sx={{color:"#138707",fontWeight:"700",fontSize:"55px"}}>{cardData.number}</Typography>
            </Grid>
            <Grid item xs={8}>
            <Typography sx={{color:"#010101",fontSize:"20px",fontWeight:"600"}}>{cardData.heading}</Typography>
            <Typography sx={{color:"#010101",opacity:"0.6"}}>{cardData.text}</Typography>

            </Grid>

        </Grid>
       <Divider/>
       <Grid sx={{pt:2}}>
        <Box sx={{fontSize:"20px",fontWeight:"600",fontFamily:"sans-serif", textAlign:"right"}} className={cardData.increase === "increase" ? "increase": "decrease"}>{cardData.value}</Box>
        <img style={{width:"100%"}} src={cardData.graph} alt="graph" />
       </Grid>
      </Box>
    </Grid>
  );
};
export default GraphCards;
