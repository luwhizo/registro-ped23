import { createSlice } from '@reduxjs/toolkit';

export const caratulaSlice = createSlice({
    name: 'caratula',
    initialState: {

        /* data:[
            ['dISTRITO', 'B1', 'C1'],
            ['A2', 'B2', 'C2'],
            ['A3', 'B3', 'C3'],
            ['A4', 'B4', 'C4'],
            ['A5', 'B5', 'C5'],
            ], */

        data:
        [
            {
                distrito:'',
                nucleo:'',
                colegio:'',
                director:'',
                docente:'',
                nivel:'',
                area:'',
                gestion:''
            },
            
        ],
       
        cargandoCaratulaDeSupabase: false,
        setSaving: false,

        
        /* className: 'fuente-mediano',
        rowHeights: 40,
        stretchH:"all"  ,
        colHeaders: true,
        rowHeaders: true,
        colWidths: 100,
        manualColumnResize: true ,
        licenseKey:"non-commercial-and-evaluation", */
        
        
           
    },
    reducers: {
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
export const {  updateCaratula, setActiveCaratula,setCaratula,
                cargandoCaratulaDeSupabase,clearCaratulaLogout,
                setSaving,deleteDatosByID } = caratulaSlice.actions;