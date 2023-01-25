
import { createTheme } from "@mui/material"
import { red } from "@mui/material/colors"
    

export const purpleTheme = createTheme({
    palette:{
    primary:{ main: '#353535'}, //   azulOscuro --> #262254        verde-->   #217346
    secondary:{ main: '#616161'}, //   purpura-->    #543884                   #039645
    error:{ main: red.A400}
 } 
})
