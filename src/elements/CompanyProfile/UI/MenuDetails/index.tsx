import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './menudetails.css'


export const MenuDetails = () => {
  return (
    <>
    <Box className='table'>
        <Typography>Equity Offer</Typography>
        <Typography>20</Typography>
        <Divider/>
    </Box>
    </>
  )
}
