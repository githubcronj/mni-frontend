
import { Grid } from '@mui/material'
import React from 'react'
import process from './img/Process.png'

const ProcessImg = () => {
  return (
   <Grid container spacing={2}>
      <Grid item xs={12} className='align'>
      <img src={process} className='max-width'/>
      </Grid>
   </Grid>
  )
}

export default ProcessImg