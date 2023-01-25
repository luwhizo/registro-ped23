import {Link as RouterLink} from 'react-router-dom'
import { Facebook, Google } from '@mui/icons-material'
import {Grid, Typography, TextField, Button, Link} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'



export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
        <form>
            <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                    label='Nombre completo'
                    type='text'
                    placeholder='Tu nombre completo'
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                    label='Correo'
                    type='email'
                    placeholder='correo@google.com'
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                    label='Contraseña'
                    type='password'
                    placeholder='contraseña'
                    fullWidth
                  />
                </Grid>

                <Grid container spacing={2} sx={{mb:1, mt:1}}>
                  
                  <Grid item xs={12} >
                    <Button variant="contained" color="primary" fullWidth>
                      Crear cuenta
                    </Button>
                  </Grid>

                </Grid>

                <Grid container direction='row' justifyContent='center' sx={{mb:2}}>
                      <Typography sx={{mt:3}}>o puede registrarse con:</Typography>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Button variant="contained" color="primary" fullWidth>
                        <Google/>
                        <Typography variant='inherit' color="white" sx={{ml:1}}> Google</Typography>
                      </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Button variant="contained" color="primary" fullWidth>
                        <Facebook/>
                        <Typography variant='inherit' color="white" sx={{ml:1}}> Facebook</Typography>
                      </Button>
                    </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end' sx={{mt:2}}>
                    <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
                    <Link component={RouterLink} color='inherit' to="/auth/login">
                      Ingresar
                    </Link>
                </Grid>
            </Grid>
          </form>
    </AuthLayout>   
    

  )
}