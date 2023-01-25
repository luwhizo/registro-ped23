import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { caratulaSlice } from './cuadernoPed/caratula'

export const store = configureStore({
  reducer: {
        
    auth:authSlice.reducer,
    caratula: caratulaSlice.reducer,
    
  },  
})
