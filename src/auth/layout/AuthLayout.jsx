import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title=''}) => {
  return (
    <Grid // fondo azul oscuro de login
    container 
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{minHeight: "100vh", backgroundColor:"primary.main" , padding:4}}
  >
      <Grid item
        className='box-shadow'
        xs={3}  
        sx={{width:{sm:500}, backgroundColor:'white', padding:3, borderRadius:2 }} //'#e6e6e6' plomo claro
      >
        <Typography variant="h5" sx={{mb:1}}>{title}</Typography>
        {children}
       </Grid>
    </Grid>
  )
}
