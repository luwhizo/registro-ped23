import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { caratulaSlice } from './cuadernoPed/caratula'
import { cursosSlice } from './cuadernoPed/cursos/cursosSlice'
import { filiacionSlice } from './cuadernoPed/filiacion/filiacionSlice'




export const store = configureStore({
  reducer: {
        
    auth:authSlice.reducer,
    caratula: caratulaSlice.reducer,
    curso: cursosSlice.reducer,
    filiacion: filiacionSlice.reducer
    
  },  
})
