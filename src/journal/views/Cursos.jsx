 
import {Grid, Typography, TextField, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { useState } from 'react';
import { useForm } from '../../hook/useFrom';
import { setActiveCurso, startCrearCurso } from '../../store/cuadernoPed/cursos';
import { useDispatch, useSelector } from 'react-redux';
import { ModalActualizaCursoItem } from './modals/ModalActualizaCursoItem';



export const Cursos = () => {

  
  const { isSaving, cursos } =useSelector(state=>state.curso)
  const dispatch = useDispatch();
    
  const {nomCurso, onInputChange} = useForm({
    nomCurso:''
  })

  
  const onSubmit=(event)=>{
    event.preventDefault();
    dispatch( startCrearCurso(nomCurso));  
  }


  
  
  return (
    <Grid
    container 
    justifyContent='center'
    alignItems="center"
    sx={{minHeight: "calc(100vh - 67px)", backgroundColor:"primary.main"}}
    >




          <Grid // fondo azul oscuro de login
              container 
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{/* minHeight: "0vh", */ backgroundColor:"primary.main" , padding:2}}
            >
                <Grid item
                  className='box-shadow'
                  xs={3}  
                  sx={{width:{sm:350}, backgroundColor:'white', padding:3, borderRadius:3 }} //'#e6e6e6' plomo claro
                >
                  <Typography variant="h6" sx={{mb:1}}>Crear Curso</Typography>
                  


                  <form onSubmit={onSubmit}>
                      <Grid container>
                          <Grid item xs={12} sx={{mt:2}}>
                            <TextField
                              label='Nombre del curso (nombre corto)'
                              type='text'
                              placeholder='Ejemplo: 5to A'
                              fullWidth
                              name='nomCurso'
                              value={nomCurso}
                              onChange={onInputChange}
                            />
                          </Grid>

                        

                          <Grid container spacing={2} sx={{mb:1, mt:1}}>
                            
                            <Grid item xs={12} >
                              <Button type='submit'
                                      variant="contained" 
                                      color="primary" 
                                      fullWidth
                                      disabled={isSaving} >
                                Crear curso
                              </Button>
                            </Grid>
                          </Grid>
                      </Grid>
                    </form> 
                </Grid>

              </Grid>



    <Typography textAlign='center' variant='h6' 
                color="White" sx={{mb:2, mt:3}}
                >INGRESE AL CURSO:</Typography >
      
      <Grid
      container
      //spacing={3}
      direction="row"
      justifyContent='center'
      alignItems="center"
     
      >
        {
          cursos.map(curso=>(
              <CursoItem key={curso.id_curso} curso={curso} />  )
          )
        }
        
      </Grid>
    </Grid>
  );
};







// ********************  Componente CursoItem  ************************************************


const CursoItem = ({curso}) => {

  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const {id_curso, nombre_curso} = curso

  const onClicCurso=()=>{
    dispatch(setActiveCurso({id_curso, nombre_curso}))
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    //console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
    dispatch(setActiveCurso({id_curso, nombre_curso}))
    console.log(anchorEl)
  };

  const handleClose = () => { // no se esta ejecutando esta funcion!!!!!
    setAnchorEl(null);
    setModal(false)
    console.log('handleClose')
  };
  
  const handleEditar = () => {
    console.log('editarrrr')
    setAnchorEl(null);
    setModal(true)
    console.log(modal)

    
    
  };
  const handleEliminar = () => {
     console.log('Eliminarrrr')
    setAnchorEl(null);
  };

 /*  if(modal){
    return <ModalActualizaCursoItem  /> 
  } */

  return(
    <>
        {
          (modal)?<ModalActualizaCursoItem  />:null
        }
        <Grid container
            className='box-shadow'
        
            sx={{width:{sm:340}, justifyItems:'center', backgroundColor:'white', padding:3, borderRadius:3, margin:3 }} //'#e6e6e6' plomo claro
          >

                  <Grid item container direction='row' justifyContent='end' sx={{mt:-1}}>

                        <IconButton 
                              aria-label="delete" sx={{mb:-2}} 
                              aria-haspopup="true" onClick={handleClick} >
                              <MoreVertSharpIcon />
                        </IconButton>

                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleEditar}> editar </MenuItem>
                          <MenuItem onClick={handleEliminar}>Eliminar</MenuItem>
                          
                        </Menu>
                            
                  </Grid>
                  
                  <Grid item container direction='row' justifyContent='center'>
                    <Typography gutterBottom variant="h6" 
                                component="div" textAlign= 'center' 
                                sx={{mb:2}}>
                      {curso.nombre_curso}
                    </Typography>
                            
                  </Grid>
    
          
                  <Button onClick={onClicCurso} size="large" 
                          variant="contained" 
                          color="success"  
                          fullWidth> Elegir </Button>

            
        </Grid>
    </>

  ) 

}

