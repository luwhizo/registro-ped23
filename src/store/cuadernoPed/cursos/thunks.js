import { supabaseApp } from "../../../supabase/client";
import { addNewCurso, savingNewCurso, setActiveCurso, setCursos, setSaving, updateCurso, deleteCurso, esperandoCursos, setErrorMessage } from "./cursosSlice";

export const startCrearCurso = (nomCurso) =>{  
    return async(dispatch, getState ) =>{ 
     dispatch(savingNewCurso())   // savingNewCurso = guardando nuevo curso
     const {uid} = getState().auth;

     const { data, error } = await supabaseApp
                    .from('cursos')
                    .insert({nombre_curso:nomCurso,id_prof:uid})
                    .select()
                    //console.log(data[0])
                    
     if(error===null){
        //console.log('guardado exitosamente')
        dispatch(addNewCurso(data[0]))
        const newData = {      // quitando la hora de creacion y el id_prof o colocando solo el id_curso y nombre_curso
            id_curso:data[0].id_curso,
            nombre_curso:data[0].nombre_curso
        }
        dispatch(setActiveCurso(newData))
     } else{
        dispatch(setErrorMessage())
        // console.log('la conexion a internet fallo, recargue la página')
     }                              
    }
}


export const startLoadingCurso = () =>{    // cargando cursos de supabase
    return async(dispatch, getState ) =>{ 
        const {uid} = getState().auth;
        
        dispatch(esperandoCursos())
        const { data, error } = await supabaseApp
        .from('cursos')
        .select('id_curso, nombre_curso')
        .eq('id_prof', uid)
        .order('nombre_curso', { ascending: true })

        if(error===null){
            dispatch(setCursos(data))
        }else{
            dispatch(setErrorMessage())
            // console.log('la conexion a internet fallo, recargue la página')
        }
        

     }
}


export const startSaveCurso = () =>{    // guardando un curso actualizado a supabase
    return async(dispatch, getState ) =>{ 
        //const {uid} = getState().auth;
        
        dispatch(setSaving())
        const {activeCurso}  = getState().curso
        const {nombre_curso, id_curso} = activeCurso;

        const { error } = await supabaseApp
        .from('cursos')
        .update({ nombre_curso })
        .eq('id_curso', id_curso)
        console.log(error)
        if(error===null){
            // console.log({nombre_curso,id_curso})
            dispatch(updateCurso({id_curso, nombre_curso}))
        }else{
            dispatch(setErrorMessage())
            // console.log('la conexion a internet fallo, recargue la página')
        }
       

     }
}



export const startEliminandoCurso = () =>{    // Eliminando un curso
    return async(dispatch, getState ) =>{ 
        const {activeCurso}  = getState().curso
        const {id_curso}=activeCurso
        // Primero se debe eliminar las dependencias como a los estudiantes del curso, registros etc
        const { error } = await supabaseApp
                        .from('cursos')
                        .delete()
                        .eq('id_curso', id_curso)
                        
        if(error===null){
            dispatch(deleteCurso(id_curso))
        }else{
            dispatch(setErrorMessage())
            // console.log('la conexion a internet fallo, recargue la página')
        }               
     }
}