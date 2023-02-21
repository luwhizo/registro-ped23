import { createSlice } from '@reduxjs/toolkit';

export const filiacionSlice = createSlice({
    name: 'filiacion',
    initialState: {

        data:
        [
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
            { paterno:'', materno:'', nombres:'', nacimiento:'', ci:'', rude:'', direccion:'', ppff:'', celularppff:'' },
        ],
       
        cargandoFiliacionDeSupabase: false,
        setSaving: false,
        isSavingNew: false,   // esta guardando un nueva Filiacion en blanco 
        curso:'',   
           
    },
    reducers: {
        savingNewFiliacion: (state, action) => { 
            state.isSavingNew=true
            console.log(action.payload) 
            // curso=action.payload   
         },

         
        setCaratula: (state, action  ) => { 
            state.data=action.payload    
         },
        updateCaratula: (state, action  ) => {
            
            const newData = [{...state.data[0]}];
           
            action.payload.forEach(([row, column, oldValue, newValue]) => {
                newData[row][column] = newValue;  // se sobre escribe solo las celdas que se editaron de toda la matriz
                })
            state.data=newData
            console.log(newData)

            //state.data = [{...state.data[0], ...action.payload }] 
        },
        setSaving: (state) => { // establecer guardado
            
        },
        cargandoCaratulaDeSupabase: (state, action) => {
            
        },
        setActiveCaratula: (state, action) => {
            /* state.active = action.payload; */
           
        },
        deleteDatosByID: (state, action) => {
           
        },
        clearCaratulaLogout: (state) => { // borrar todo de caratula al cerrar sesion
            state.data=[],
            state.cargandoCaratulaDeSupabase= false,
            state.setSaving= false
        },
        
    }
});
//Los creadores de acciones se generan para cada función de reducer de casos.
export const {  savingNewFiliacion, 
    
    updateCaratula, setActiveCaratula,setCaratula,
                cargandoCaratulaDeSupabase,clearCaratulaLogout,
                setSaving,deleteDatosByID } = filiacionSlice.actions;