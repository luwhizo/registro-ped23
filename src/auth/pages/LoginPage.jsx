import {Link as RouterLink} from 'react-router-dom'
import { Google, Facebook } from '@mui/icons-material'
import {Grid, Typography, TextField, Button, Link, Alert} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hook/useFrom'
import { useDispatch, useSelector } from 'react-redux'
import { checkingAuthentication, startFacebookSignIn, startGoogleSignIn } from '../../store/auth'
import { useMemo } from 'react'



export const LoginPage = () => {

  const {status, errorMessage}=useSelector(state => state.auth)
  const isAuthenticating = useMemo(()=>status==='checking', [status])
  const dispatch=useDispatch();

  const {email, password, onInputChange }= useForm({
    email:"luwhizo@gmail.com", 
    password: "123456" })
  
  const onSubmit=(event)=>{
      event.preventDefault();
      console.log(email, password)
      dispatch(checkingAuthentication());
      
  }  

  const onGoogleSignIn=()=>{
    dispatch(startGoogleSignIn())
  }

  const onFacebookSignIn=()=>{
    dispatch(startFacebookSignIn())
  }
  return (
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit}>
            <Grid container>
                <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                    label='Correo'
                    type='email'
                    placeholder='correo@google.com'
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                  />
                </Grid>

                <Grid item xs={12} sx={{mt:2}}>
                  <TextField
                    label='Contrasenia'
                    type='password'
                    placeholder='contrasenia'
                    fullWidth
                    name='password'
                    value={password}
                    onChange={onInputChange}
                  />
                </Grid>

                <Grid container spacing={2} sx={{mb:2, mt:1}}>                  

                  <Grid item xs={12} md={6} justifyContent='center'>
                    <Button 
                        disabled={isAuthenticating}
                        type='submit' 
                        variant="contained" 
                        color="primary" 
                        fullWidth>
                      iniciar
                    </Button>
                  </Grid>
                  
                  <Grid container direction='row' justifyContent='center'>
                    <Typography sx={{mt:3}}>o puede iniciar sesión con:</Typography>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Button disabled={isAuthenticating} 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick={onGoogleSignIn} >
                      <Google/>
                      <Typography variant='inherit' color="white" sx={{ml:1}}> Google</Typography>
                    </Button>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Button 
                            disabled={isAuthenticating}
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick={onFacebookSignIn}>
                      <Facebook/>
                      <Typography variant='inherit' color="white" sx={{ml:1}}> Facebook</Typography>
                    </Button>
                  </Grid>

                  
                  <Grid item xs={12} md={6} justifyContent='center'
                        display={!!errorMessage?'':'none'}
                        >
                    <Alert severity='error'> {errorMessage} </Alert>
                  </Grid>


                </Grid>
                <Grid container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to="/auth/register">
                      Crear una cuenta
                    </Link>
                </Grid>
            </Grid>
          </form>
    </AuthLayout>   
    

  )
}
