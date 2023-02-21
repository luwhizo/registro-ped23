import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useState } from 'react'; 
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startCrearFiliacion } from '../../store/cuadernoPed/filiacion/thunks';

// register Handsontable's modules
registerAllModules();



export const PreFiliacion = () => {

  const dispatch=useDispatch();
  
  const onCLicNewFiliacion=()=>{
  dispatch(startCrearFiliacion())
}
  
  const data1 = [
    [ 'PATERNO', 'MATERNO', 'NOMBRES', ],
    [ 'Apaza', 'Quispe', 'Mary Luz', ],
    [ 'Bolaños', 'Choque', 'Rosa Pamela', ],
    [ 'Mamani', 'Surco', 'Luis', ],
    
  ];
  const data2 = [
    [ 'PATERNO, MATERNO', 'NOMBRES', ],
    [ 'Apaza Quispe', 'Mary Luz', ],
    [ 'Bolaños Choque', 'Rosa Pamela', ],
    [ 'Mamani Surco', 'Luis', ],
    
  ];
  const data3 = [
    [ 'PATERNO, MATERNO Y NOMBRES', ],
    [ 'Apaza Quispe Mary Luz', ],
    [ 'Bolaños Choque Rosa Pamela', ],
    [ 'Mamani Surco Luis', ],
    
  ];


  return (
    <Grid
    container 
    justifyContent='center'
    alignItems="center"
    sx={{minHeight: "calc(100vh - 67px)", backgroundColor:"primary.main"}}
    >
    
    <Typography textAlign='center' variant='h6' color="White">Elija la cantidad de columnas para registrar a sus estudiantes</Typography >
      <Grid
      container 
      justifyContent='center'
      alignItems="center"
      sx={{ backgroundColor:"primary.main"}}
      > 

        <Grid container
              className='box-shadow'
              // direction='column' justifyContent='space-between'
              sx={{width:{xs:320}/* , justifyItems:'center' */, backgroundColor:'white', padding:3, borderRadius:2, margin:3, height:'450px' }} //'#e6e6e6' plomo claro
            >

                    <Typography gutterBottom variant="h6" component="div" sx={{textAlign:'center'}}>
                      3 columnas
                    </Typography>
                    <HotTable
                                      data={data1}
                                      startRows={5}
                                      startCols={5}
                                      height="160"
                                      width="300"
                                      colHeaders={true}
                                      rowHeaders={true}
                                      minSpareRows={1}
                                      readOnly={true}
                                      licenseKey="non-commercial-and-evaluation"
                                    />
                    <Typography variant="body2" color="text.secondary">
                      La primera columna para el apellido <b> paterno </b>, la segunda columna para
                      el apellido <b> materno </b> y la tercera columna para los <b>nombres</b>
                    </Typography>
      
            
                    <Button onClick={onCLicNewFiliacion}
                            variant="contained" 
                            color="success"  
                            fullWidth
                            sx={{mt:2,height:'45px'}} 
                            > Elegir</Button>     
        </Grid>

        <Grid container
              className='box-shadow'
              // direction='column' justifyContent='space-between'
              sx={{width:{xs:320}/* , justifyItems:'center' */, backgroundColor:'white', padding:3, borderRadius:3, margin:3, height:'450px' }} //'#e6e6e6' plomo claro
            >

                    <Typography gutterBottom variant="h6" component="div">
                      2 columnas
                    </Typography>
                    <HotTable
                                      data={data2}
                                      startRows={5}
                                      startCols={5}
                                      height="160"
                                      width="300"
                                      colHeaders={true}
                                      rowHeaders={true}
                                      minSpareRows={1}
                                      readOnly={true}
                                      licenseKey="non-commercial-and-evaluation"
                                    />
                    <Typography variant="body2" color="text.secondary">
                    La primera columna para los apellidos <b>paterno y materno</b>
                    , la segunda columna para los <b>nombres</b>
                    </Typography>
      
            
                    <Button 
                            variant="contained" 
                            color="success"  
                            fullWidth
                            sx={{mt:2,height:'45px' }} 
                            > Elegir</Button>     
        </Grid>

        <Grid container
              className='box-shadow'
              // direction='column' justifyContent='space-between'
              sx={{width:{xs:320}/* , justifyItems:'center' */, backgroundColor:'white', padding:3, borderRadius:3, margin:3, height:'450px' }} //'#e6e6e6' plomo claro
            >

                    <Typography gutterBottom variant="h6" component="div">
                      1 columna
                    </Typography>
                    <HotTable
                                      data={data3}
                                      startRows={5}
                                      startCols={5}
                                      height="160"
                                      width="300"
                                      colHeaders={true}
                                      rowHeaders={true}
                                      minSpareRows={1}
                                      readOnly={true}
                                      licenseKey="non-commercial-and-evaluation"
                                    />
                    <Typography variant="body2" color="text.secondary">
                      La primera y única columna para los apellidos <b>paterno, materno y nombres</b>
                    </Typography>
      
            
                    <Button 
                            variant="contained" 
                            color="success"  
                            fullWidth
                            sx={{mt:2,height:'45px'}} 
                            > Elegir</Button>     
        </Grid>


      </Grid> 
  </Grid>
  );
};