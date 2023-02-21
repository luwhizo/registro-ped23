import { AppBar, Box, Divider, Drawer, FormControl, InputLabel, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import {  TurnedInNot } from "@mui/icons-material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCurso } from "../../store/cuadernoPed/cursos";
import {Link as RouterLink, NavLink} from 'react-router-dom'


export const SideBar = ({window, drawerWidth, handleDrawerToggle, mobileOpen }) => {
  
  const {cursos,activeCurso}=useSelector(state=>state.curso)
  const dispatch =useDispatch()
  const [age, setAge] = useState(0);
  useEffect(() => {// aqui tengo dudas ya que pienso en un bucle infinito, puesto que activeCurso puede cambiar con handleChangeSelect
    (activeCurso===null) ? setAge(0) : setAge(activeCurso.id_curso)
  }, [activeCurso]);

  const handleChangeSelect = (event) => {  
    setAge(event.target.value);
    if(event.target.value!==0){
      const nom_curso=cursos.filter(curso=>curso.id_curso===event.target.value)
      // console.log(event.target.value)
      //  console.log(nom_curso[0].nombre_curso)
      const id=event.target.value;
      const nom=nom_curso[0].nombre_curso;
      dispatch(setActiveCurso({id_curso: id,  nombre_curso:nom}))
    }
    if(event.target.value===0){
      dispatch(setActiveCurso(null))
    }
    
  };



    const drawer = (
        <div>
          <AppBar
             position="fixed" 
            > 
              <Toolbar sx={{backgroundColor:"primary.main", position: 'fixed', width:{ xs: drawerWidth, sm: '222px'} }} >
              
              <FormControl sx={{ width: drawerWidth} } >   
                    
                <Select
                  sx={{backgroundColor:"#F7F7F7", color:'#00941D',fontWeight:'bold', fontSize:'19px', textAlign:'center' , height:'48px', border:0, borderRadius:2, }}
                  value={age} 
                  onChange={handleChangeSelect}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem key={0} value={0} sx={{ color:'#282BFD'}}>
                    Elejir curso
                  </MenuItem>
                  {
                    cursos.map(curso=>{
                      //console.log(curso)  Hay un Warning que no puedo solucionar, ocurre al eliminar un curso
                      return(
                        <MenuItem 
                            key={curso.id_curso} 
                            value={curso.id_curso}
                            sx={{ color:'#282BFD'}}
                          > {curso.nombre_curso} 
                        </MenuItem>
                    )
                    } )
                  }
          
                </Select>
              </FormControl>

                </Toolbar>



      </AppBar>
             
            
            <Toolbar/>  {/* espaciador */}

          <Divider />

          <List>

                <Link component={RouterLink} color='inherit' to='/cursos'
                      sx={{textDecorationLine:'none'}} >
                 <ListItem disablePadding>   
                  <ListItemButton /* sx={{m:1}} */>
                    <ListItemIcon >
                      <OtherHousesIcon sx={{color:"#primary.main"}} /> 
                    </ListItemIcon>
                    <ListItemText primary="Cursos" />
                  </ListItemButton>
                 </ListItem>
                </Link>
            
                <Link component={NavLink} color='inherit'  to={(activeCurso!==null)?"/caratula":"/"} 
                      sx={{textDecorationLine:'none'}}>
                 <ListItem disablePadding>   
                  <ListItemButton /* sx={{m:1}} */>
                    <ListItemIcon >
                      <ArrowCircleRightIcon sx={{color:"#primary.main"}} /> 
                    </ListItemIcon>
                    <ListItemText primary="Carátula"  />
                  </ListItemButton>
                 </ListItem>
                </Link>               

                <Link component={RouterLink} color='inherit' to={(activeCurso!==null)?"/filiacion":"/"} 
                      sx={{textDecorationLine:'none'}}>
                 <ListItem disablePadding>   
                  <ListItemButton /* sx={{m:1}} */>
                    <ListItemIcon >
                      <ArrowCircleRightIcon sx={{color:"#primary.main"}} /> 
                    </ListItemIcon>
                    <ListItemText primary="Filiación" />
                  </ListItemButton>
                 </ListItem>
                </Link>
           
          </List>

          <Divider />

          <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <TurnedInNot sx={{color:"secondary.main"}} />
                  </ListItemIcon>
                  <ListItemText primary="Asistencia" />
                </ListItemButton>
              </ListItem>
          </List>

          <List>
            {['1er. Trimestre', '2do. Trimestre', '3er. Trimestre'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot sx={{color:"secondary.main"}} />
                  </ListItemIcon>
                  <ListItemText primary="Evaluación" />
                </ListItemButton>
              </ListItem>
          </List>

          <List>
            {['1er. Trimestre', '2do. Trimestre', '3er. Trimestre'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {['Centralizador 1', 'Centralizador 2','Estadísticas','Avance','Destacados','Inf. de Usuario'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <TurnedInNot sx={{color:"secondary.main"}} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box 
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  )
}
