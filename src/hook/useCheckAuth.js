import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { startLoadingCaratula } from "../store/cuadernoPed/caratula/thunks";
import { supabaseApp } from "../supabase/client";


export const useCheckAuth = () => {

    const {status}= useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user)=>{
        if(!user) return dispatch(logout());
        const {uid, email, displayName} = user;
        // dispatch(login({uid, email, displayName}));


        
        // *******  S U P A B A S E  ************** enviando uid, email, displayName a la tabla 'profesores_usuarios' de supabase
        const result = await supabaseApp.from('profesores_usuarios')
        .upsert({ id_prof:uid ,  correo: email,  nom_correo: displayName  }).select()
        
        if(result.error===null){
          dispatch(login({uid, email, displayName})); //originalmente  esta linea de codigo estaba 6 lineas arriba antes de escribir codigo de supabase 
          dispatch(startLoadingCaratula())  // Cargando la data del backen al  state
        } 
        // *****************************************
      })
  
    }, []);
 
    return status;
}
