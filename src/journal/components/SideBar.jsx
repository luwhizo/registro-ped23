import { AppBar, Box, Divider, Drawer, FormControl, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, MenuItem, Select, Toolbar } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCurso } from "../../store/cuadernoPed/cursos";
import {Link as RouterLink} from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import { checkingMobileSize } from "../../store/auth/authSlice";

// drawerWidth = 240 px
// handleDrawerToggle = function para cambiar el valor de mobilOpen ::: setMobileOpen(!mobileOpen);
// mobileOpen = true o false
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

 //******* isMobile = esMovil ::: si la pantalla tiene un ancho de 600px (sm) o menos entonces esta en movil, si no entonces esta en modo escritorio  
  const isMobile = useMediaQuery('(max-width: 600px)');
  useEffect(() => {
    dispatch(checkingMobileSize(isMobile))
  }, [isMobile]);
// **********************************************************************************************

const handleDrawerToggle2 =()=>{
  if(isMobile){
    handleDrawerToggle()
  }
}

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
                 <ListItem disablePadding onClick={handleDrawerToggle2}>   
                  <ListItemButton /* sx={{m:1}} */>
                    <ListItemIcon >
                      <OtherHousesIcon sx={{color:"#primary.main"}} /> 
                    </ListItemIcon>
                    <ListItemText primary="Crear cursos" />
                  </ListItemButton>
                 </ListItem>
                </Link>

                <LinkItems path="/caratula" titulo='Carátula' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
                <LinkItems path="/filiacion" titulo='Filiación' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
          </List>

          <Divider />

          <List>
            <LinkItems path="/asistenciaconfig" titulo='Asistencia' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/asistencia" titulo='1° Trimestre' icono={false} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/asistencia" titulo='2° Trimestre' icono={false} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/asistencia" titulo='3° Trimestre' icono={false} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
          </List>

          <Divider />

          <List>
            <LinkItems path="/evaluacionconfig" titulo='Evaluación' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/evaluacion" titulo='1° Trimestre' icono={false} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/evaluacion" titulo='2° Trimestre' icono={false} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/evaluacion" titulo='3° Trimestre' icono={false} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
          </List>

          <Divider />

          <List>
            <LinkItems path="/centralizador" titulo='Centralizador' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/estadistica" titulo='Estadísticas' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/avance" titulo='Avance' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />
            <LinkItems path="/destacados" titulo='Destacados' icono={true} activeCurso={activeCurso} handleDrawerToggle={handleDrawerToggle} />

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



/////////////// COMPONENTE: ITEMS DEL MENU LATERAL ////////////////////////////////////////

const LinkItems = ({path, titulo, activeCurso, handleDrawerToggle, icono}) => {

  const {isMobile}=useSelector(state=>state.auth)

  const handleDrawerToggle2 =()=>{
    if(isMobile){
      handleDrawerToggle()
    }
  }
  
  return (
          <Link component={RouterLink} color='inherit'  to={(activeCurso!==null)?path:"/"} 
                sx={{textDecorationLine:'none'}}>
            <ListItem disablePadding onClick={handleDrawerToggle2}>   
            <ListItemButton /* sx={{m:1}} */>
              <ListItemIcon >
                  {
                    icono?<ArrowCircleRightIcon sx={{color:"#primary.main"}} />:null
                  }
              </ListItemIcon>
              <ListItemText primary={titulo}  />
            </ListItemButton>
            </ListItem>
          </Link>  
  )
}
