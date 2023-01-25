import { createSlice } from '@reduxjs/toolkit';


  const initialState = {
    status:'checking',  //checking   // no-autenticado  // autenticado
    uid: null,
    email: null,
    displayName: null,
    errorMessage:null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
            login:(state, {payload})=>{
                state.status='autenticado';  //checking   // no-autenticado  // autenticado
                state.uid = payload.uid;
                state.email = payload.email;
                state.displayName = payload.displayName;
                state.errorMessage = null;
            },
            logout:(state, {payload})=>{
                state.status='NO-autenticado';  //checking   // no-autenticado  // autenticado
                state.uid = null;
                state.email = null;
                state.displayName = null;
                state.errorMessage = payload?.errorMessage;

            },
            checkingCredentials:(state, payload)=>{
                state.status='checking';
            }
        },
    
});
//Los creadores de acciones se generan para cada función de reducer de casos.
export const { login, logout, checkingCredentials } = authSlice.actions;