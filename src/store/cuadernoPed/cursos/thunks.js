import { supabaseApp } from "../../../supabase/client";
import { addNewCurso, savingNewCurso, setActiveCurso, setCursos, setSaving, updateCurso } from "./cursosSlice";

export const startCrearCurso = (nomCurso) =>{  
    return async(dispatch, getState ) =>{ 
     dispatch(savingNewCurso())   // savingNewCurso = guardando nuevo curso
     const {uid} = getState().auth;
     const { data } = await supabaseApp
                    .from('cursos')
                    .insert({nombre_curso:nomCurso,id_prof:uid})
                    .select()
                    //console.log(data[0])
     dispatch(addNewCurso(data[0]))
        const newData = {      // quitando la hora de creacion y el id_prof o colocando solo el id_curso y nombre_curso
            id_curso:data[0].id_curso,
            nombre_curso:data[0].nombre_curso
        }
     dispatch(setActiveCurso(newData)) 
                   
    }
}


export const startLoadingCurso = () =>{    // cargando cursos de supabase
    return async(dispatch, getState ) =>{ 
        const {uid} = getState().auth;
        
        const { data, error } = await supabaseApp
        .from('cursos')
        .select('id_curso, nombre_curso')
        .eq('id_prof', uid)

        dispatch(setCursos(data))

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
        
        console.log({nombre_curso,id_curso})
        dispatch(updateCurso({id_curso, nombre_curso}))

     }
}