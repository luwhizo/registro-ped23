import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingCursos = () => {
  return (
    <Grid // fondo azul oscuro de login
    container 
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{minHeight: "100vh", backgroundColor:"primary.main" , padding:4}}
  >
      <Grid 
      container  
      direction='row'
      justifyContent='center'
        /* sx={{ width:{sm:450} }} */ 
      >
        <CircularProgress color='warning'/>
        </Grid>

        </Grid>
  )
}
