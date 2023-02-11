import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hook/useFrom";
import { setActiveCurso } from "../../../store/cuadernoPed/cursos/cursosSlice";
import { startSaveCurso } from "../../../store/cuadernoPed/cursos/thunks";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    bgcolor: '#FAFAFA',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px'
  };
  
  
  export const ModalActualizaCursoItem = () => {
    //console.log('ModalActualizaCursoItem')
    const dispatch = useDispatch()
    const {activeCurso, isSaving} = useSelector(state=>state.curso)
    const {nombre_curso,  id_curso, onInputChange, formState}= useForm(activeCurso);
    //console.log(formState)
    const [open, setOpen] = useState(true); //false
    //const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
      dispatch(setActiveCurso(formState))
    }, [formState]);
  
    const onSaveCurso = (event) =>{
      event.preventDefault();
      dispatch(startSaveCurso())
      setOpen(false)
    }

    return (
      <div>
        {/* <Button onClick={handleOpen} >Editar</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Modificar nombre del curso
            </Typography>
            <form onSubmit={onSaveCurso} >
                      <Grid container>
                          <Grid item xs={12} sx={{mt:2}}>
                            <TextField
                              label='Escriba el nuevo nombre del curso'
                              type='text'
                              color="success"
                              autoFocus
                              //placeholder='Ejemplo: 5to A'
                              fullWidth
                              name='nombre_curso'
                              value={nombre_curso}
                              onChange={onInputChange}
                            />
                          </Grid>

                        

                          <Grid container spacing={2} sx={{mb:1, mt:1}}>
                            
                            <Grid item xs={12} >
                              <Button 
                                      type='submit'
                                      variant="contained" 
                                      color="primary" 
                                      fullWidth
                                      disabled={isSaving} >
                                Cambiar Nombre
                              </Button>
                            </Grid>
                          </Grid>
                      </Grid>
                    </form>
          </Box>
        </Modal>
      </div>
    );
  }
  












