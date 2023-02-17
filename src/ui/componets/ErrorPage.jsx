import { Grid, Typography } from '@mui/material'
import React from 'react'

export const ErrorPage = () => {
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
          <Typography  sx={{color:'red', fontSize:'18px'}}>
            La conexión a internet falló, recargue la página o cierre y vuelva a abrir la aplicación
          </Typography> 
      </Grid>
  </Grid>
  )
}
