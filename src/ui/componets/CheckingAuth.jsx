import { CircularProgress, Grid, Typography } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import React from 'react'
import { Gradient } from '@mui/icons-material';

export const CheckingAuth = () => {
  return (
    <Grid // fondo azul oscuro de login
    container 
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    // sx={{minHeight: "100vh", backgroundColor:"#f84f48" , padding:4}}
    sx={{minHeight: "100vh", backgroundImage:'linear-gradient(#f03850, #fc5c44)' , padding:4}}
  >
      <Grid 
      container  
      direction='column'
      alignItems="center" // alineacion de hijos
      /* sx={{ width:{sm:450} }}  */
      >
      
        <SchoolIcon sx={{fontSize:80, color:'#f9f9f9',  }}/>
        <Typography color='#f9f9f9' variant='h7' mt={1} mb={7}> Registro LMS</Typography>
       
        <CircularProgress color='secondary'  />
       
        </Grid>

        </Grid>
  )
}
