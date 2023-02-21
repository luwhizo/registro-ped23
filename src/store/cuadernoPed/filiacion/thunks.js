import { supabaseApp } from "../../../supabase/client";
import { savingNewFiliacion } from "./filiacionSlice";


export const startCrearFiliacion  = ()  => {
    return async(dispatch, getState ) =>{
    console.log("aqui")
     const {activeCurso} = getState().curso;  
     if(activeCurso!==null){
      const nuevoEstudiante = {
        id_curso: activeCurso.id_curso,
        paterno_est:'',
        materno_est:'',
        nombre_est:'',
        carnet_est:'',
        rude:'',
        direccion:'',
        ppff:'',
        celular_ppff:'',
        nacimiento_est:''
      }
      // newFiliacion tiene 10 nuevoEstudiante
      const newFiliacion = [nuevoEstudiante,nuevoEstudiante,nuevoEstudiante,nuevoEstudiante,nuevoEstudiante,nuevoEstudiante,nuevoEstudiante,nuevoEstudiante,nuevoEstudiante,nuevoEstudiante]
      dispatch(savingNewFiliacion(activeCurso.nombre_curso))  
      const { data, error } = await supabaseApp  
                .from('estudiantes')
                .insert(newFiliacion)
                .select('id_est',)
                // caratula.id_caratula=data[0].id_caratula  // tomamos el id de supabase y lo agragamos a la caratula local, por si lo necesitamos con el id_caratula
                console.log(data)  // data es un arreglo de todos los id_est
        if(error===null){

        }
        

     } 
     
    }
} 

/* export const startLoadingCaratula = () =>{  //cargando caratula de supabase al state de la app
  return async(dispatch, getState ) =>{
    const {uid} = getState().auth;
    const { data, error } = await supabaseApp
    .from('caratulas')
    .select('distrito, nucleo,colegio,director,docente,nivel,area,gestion')
    .eq('id_prof', uid)    
     
    dispatch(setCaratula(data)) 
   }
} */
