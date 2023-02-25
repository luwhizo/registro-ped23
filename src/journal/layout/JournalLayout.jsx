import { Box, Toolbar } from '@mui/material'
import { useState } from 'react';
import { NavBar, SideBar } from '../components';

const drawerWidth=240;
export const JournalLayout = ({children}) => {


  // Bandera para el boton del menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

// si quitamos el     sx={{display:"flex"}}     se arregla
  return (
  <Box sx={{display:"flex"}}> 
        
        
        <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>

        <SideBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>

        <Box
        component="main"
        sx={{flexGrow:1, p:0}}  //p:0.1
        >

            <Toolbar/>

            {/* QUIZA DEBA AÑADIR 

            line-height: 1.6 em
            box-sizing: border-box
            max-width: 700 px
            margin 2rem auto
      
            */}
            <Box sx={{display:"grid"}}>   {/*  esta es la clave para ver responsive table */}
              {children}
            </Box>


        </Box>

  </Box>
  )
}
