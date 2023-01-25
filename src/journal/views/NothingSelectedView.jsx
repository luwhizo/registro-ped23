import GradeIcon from '@mui/icons-material/Grade';
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {

      
  return (
    <Grid // fondo azul oscuro de login
    container 
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    
    sx={{minHeight: "calc(100vh - 110px)", backgroundColor:"primary.main"}}
    >
        <Grid item xs={12}>
        </Grid>
           <Typography color='white' variant='h5'> Seleccione un Curso</Typography>
           <Typography color='#C5C9FF' > ver cuadro en la parte superior del menu</Typography>
        <Grid item xs={12}>
           <GradeIcon sx={{fontSize:100, color:'white'}}/>
        </Grid>
    </Grid>
  )
}
