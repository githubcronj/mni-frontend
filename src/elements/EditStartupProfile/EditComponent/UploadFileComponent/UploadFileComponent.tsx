import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import uploadBgImg from "../../../../Assets/image/uploadBgImg.svg"
export default function UploadFileComponent() {
  return (
    <div><Grid className="upload_Grid" component="label">
    <input type="file" hidden />
    
    <Box sx={{display:"flex",justifyContent:"center"}}>
        <Box>
        <Typography sx={{fontSize:{sm:"18px",xs:"16px"},fontWeight:"600",mb:2}}>Upload Pitch File</Typography>
        <img src={uploadBgImg} style={{maxWidth:"100%"}} />
        </Box>
      
    </Box>
  </Grid></div>
  )
}

