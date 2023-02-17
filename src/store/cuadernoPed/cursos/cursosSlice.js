import { createSlice } from '@reduxjs/toolkit';
export const cursosSlice = createSlice({
    name: 'cursos',
    initialState: {
        cursos:[],
        activeCurso:null,
        loadCursos:false, // caragar cursos de supabase
        creatingNewCurso:false,  // creando nuevo curso
        isSaving: false,   // esta guardando un nuevo curso
        //messageSaved:'',   // mensaje cuando la nota este actualizada
        errorMessage:false
    },
    reducers: {
        savingNewCurso: (state ) => {       // guardando nuevo Curso
            state.isSaving = true; // hacer el dispatch para volverlo a false
        },
        addNewCurso: (state, action ) => {  // añadir nuevo curso
            state.cursos.push(action.payload);
            state.isSaving = false; 
            
        },
        setActiveCurso: (state, action ) => {  // activar un curso
            state.activeCurso=action.payload
        },
        esperandoCursos: (state ) => {  // esperando la carga de cursos de supaBase
            state.loadCursos=true
        },
        setCursos: (state, action ) => {  // Cargar todos los cursos del backen
            state.cursos=action.payload;
            state.loadCursos=false
        },
        setSaving: (state, action ) => {  // establecer guardado de actualizacion de 1 curso
            state.isSaving = true; // hacer el dispatch para volverlo a false
            // TODO: mensaje de error
        },
        updateCurso: (state, action ) => {  // action.payload = {id_curso: 34 , nombre_curso: 5toC }
            state.isSaving = false; // hacer el dispatch para volverlo a false
            state.cursos = state.cursos.map(cursoitem => {
                if( cursoitem.id_curso === action.payload.id_curso){
                    return action.payload
                }
                return cursoitem;
            })
           // TODO:  mostrar mensaje de actualizacion 
        },
        deleteCurso: (state, action ) => {  // eliminar un curso
            state.activeCurso=null;
            // console.log(action)
            state.cursos=state.cursos.filter(curso=>curso.id_curso!==action.payload);
           
        },
        setErrorMessage: (state ) => {  // establecer mensaje de error
            state.errorMessage=true;
        },
        clearCursoLogout: (state) => { // borrar todo de cursos al cerrar sesion
            state.cursos=[],
            state.activeCurso=null,
            state.creatingNewCurso=false, 
            state.isSaving= false 
        },
        
    }
});
//Los creadores de acciones se generan para cada función de reducer de casos.
export const {  addNewCurso,
                setActiveCurso,
                setCursos,
                setSaving,
                updateCurso,
                deleteCurso,
                savingNewCurso,
                esperandoCursos,
                setErrorMessage,
                clearCursoLogout } = cursosSlice.actions;   