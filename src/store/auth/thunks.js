import { logoutFirebase, singInWithFacebook, singInWithGoogle } from "../../firebase/providers"

import { checkingCredentials, login, logout } from "./authSlice"


export const checkingAuthentication = (email,password) => {
  return async( dispatch)=>{
    dispatch(checkingCredentials())
  }
}


export const startGoogleSignIn = () => {
  return async( dispatch)=>{
    dispatch(checkingCredentials())
    const result = await singInWithGoogle()
    if(!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  }
}

export const startFacebookSignIn = () => {
  return async( dispatch)=>{
    dispatch(checkingCredentials())
    const result = await singInWithFacebook()
    if(!result.ok) {
      console.log(result.errorMessage)
      return dispatch(logout(result.errorMessage))
    } 
    dispatch(login(result))
    
  }
}

export const startLogout = () =>{
  return async( dispatch)=>{
    //try catch 
    await logoutFirebase();

    dispatch(logout())
  }
}


