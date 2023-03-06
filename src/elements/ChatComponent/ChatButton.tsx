import { Avatar, Box, Divider, Typography,OutlinedInput ,FormControl} from '@mui/material';
import React from 'react';
import chatGooglrIcon from "../../Assets/image/chatGooglrIcon.png";
import orangeDownArrow from "../../Assets/image/orangeDownArrow.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import closeIcon from "../../Assets/image/closeIcon.png";
import SendIcon from "@mui/icons-material/Send";

import "./ChatComponent.css";

export default function ChatButton() {
    const [open,setOpen] = React.useState(false)
    const handleOpen =()=>{
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
  return (
   < >
    <Box sx={{position:"fixed",right:"24px" ,top:"100px", opacity: open ? "1":"0"}} className="popOverStyling">
    <Box className="chatList" sx={{position:"fixed",right:"24px"}}>
        <Box sx={{display:"flex", alignItems:"center",position:"relative"}} className="chatBoxOpened">
            <img src={chatGooglrIcon} style={{marginRight:"10px",width:"30px",height:"30px", }}/>
            <Typography sx={{color:"#ffffff"}}>Messages</Typography>
            <img src={orangeDownArrow} style={{position:"absolute", right:"-10px",bottom:"0px" ,width:"60px",height:"60px" ,transform: "rotateX(180deg)"}} onClick={handleClose}/>
        </Box>
        <Divider color="#97989C" sx={{borderBottomWidth:"0.5px"}}/>
        
            <InvestorNameChat/>
          
        </Box>
    </Box>
    <Box sx={{position:"fixed",bottom:"24px" ,right:"24px"}} onClick={handleOpen} className={open === false ? "boxClosed":"boxOpened"} >
       
        <Box sx={{display:"flex", alignItems:"center"}} className="chatBoxOpen">
            <img src={chatGooglrIcon} style={{marginRight:"10px",width:"35px",height:"35px" }}/>
            <Typography sx={{color:"#ffffff"}}>Messages</Typography>
            <img src={orangeDownArrow} style={{position:"absolute", right:"0px",bottom:"-10px" ,width:"70px",height:"70px"}} />
        </Box>
    </Box>
    </>
  )
}

export const InvestorNameChat = ()=>{
    const [visible,setVisible] = React.useState(false);
    const handleVisible = ()=>{
        setVisible(!visible);
    }
    return(
        <>
        <Box sx={{pl:1,pr:1}}>
            <Box sx={{display:"flex", alignItems:"center"}} className="investor1" onClick={handleVisible}>
            <img src={chatGooglrIcon} style={{marginRight:"10px",width:"35px",height:"35px" }}/>
            <Typography sx={{color:"#ffffff",fontSize:"14px"}}>Investor Name</Typography>
            <ArrowForwardIosIcon style={{position:"absolute", right:"10px",color:"#97989C", fontSize:"20"}}/>
        </Box>
        <Divider color="#97989C" sx={{borderBottomWidth:"0.5px"}}/>
        </Box>

        {visible && <Box className="ChatListUser" sx={{position:"fixed"}}>
            <Box sx={{display:"flex", alignItems:"center",position:"relative",p:1}}>
            <img src={chatGooglrIcon} style={{marginRight:"10px",width:"30px",height:"30px" }}/>
            <Typography sx={{color:"#ffffff"}}>Investor Name</Typography>
            <img src={closeIcon} style={{position:"absolute", right:"0px",bottom:"-15px",width:"70px",height:"70px"}} onClick={()=>setVisible
            (!visible)} />
            </Box>
            <Divider color="#97989C" sx={{borderBottomWidth:"0.5px"}}/>

            <Box
              sx={{
                display: "flex",
                position: "absolute",
                bottom: "0px",
                alignItems: "center",
                backgroundColor:"#233748",
                width:"100%"
              }}
            >
              <FormControl sx={{width:"100%"}}>
                <OutlinedInput
                  sx={{ border: "1px solid #97989C",margin:"15px 10px",color:"#ffffff",height:"2.7rem" }}
                  placeholder="Type Something..."
                />
              </FormControl>

              <SendIcon sx={{ ml: 1,mr:1 }} fontSize="medium" color="warning" />
            </Box>

        </Box>}
        </>
    )
}