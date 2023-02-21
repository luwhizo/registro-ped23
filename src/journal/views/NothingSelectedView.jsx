import GradeIcon from '@mui/icons-material/Grade';
import SchoolIcon from '@mui/icons-material/School';
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {

      
  return (
    <Grid // fondo azul oscuro de login
    container 
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    
    sx={{minHeight: "calc(100vh - 65px)", backgroundColor:"primary.main"}}
    >
        <Grid item xs={12}>
        </Grid>  
          <SchoolIcon sx={{fontSize:100, color:'#424242', mb:1, mt:-11}}/>
          <Typography color='#424242' variant='h6' mb={6}> Registro LMS</Typography>
          
          <Typography color='#CEFCB2' variant='h5' mb={2} > <b>Elija un Curso</b>  </Typography>
          <Typography color='white' > Ver cuadro en la parte superior del menu</Typography>
                
        <Grid item xs={12}>
        </Grid>
    </Grid>
  )
}
