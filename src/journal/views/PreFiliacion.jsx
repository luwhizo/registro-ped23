import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useState } from 'react'; 
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

// register Handsontable's modules
registerAllModules();

export const PreFiliacion = () => {
  
  const data1 = [
    [ 'PATERNO', 'MATERNO', 'NOMBRES', ],
    [ 'Apaza', 'Quispe', 'Mary Luz', ],
    [ 'Bolaños', 'Choque', 'Rosa Pamela', ],
    [ 'Mamani', 'Surco', 'Luis', ],
    
  ];
  const data2 = [
    [ 'PATERNO Y MATERNO', 'NOMBRES', ],
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
  const [estado, setestado] = useState(data1)

  return (
    <Grid
    container 
    justifyContent='center'
    alignItems="center"
    sx={{minHeight: "calc(100vh - 67px)", backgroundColor:"primary.main"}}
    >
    
    <Typography textAlign='center' variant='h5' color="White">Elija el modo en que desea registrar a sus estudiantes</Typography >
      
      <Grid
      container
      spacing={3}
      direction="row"
      justifyContent='center'
      alignItems="center"
     
      >

        <Grid item >

            <Card sx={{ width: 255,  height: 380 }}>
                
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    3 columnas
                  </Typography>
                  <HotTable
                                    data={data1}
                                    startRows={5}
                                    startCols={5}
                                    height="160"
                                    width="300"
                                    colHeaders={true}
                                    minSpareRows={1}
                                    readOnly={true}
                                    licenseKey="non-commercial-and-evaluation"
                                  />
                  <Typography variant="body2" color="text.secondary">
                    La primera columna para el Apellido Paterno, la segunda columna para
                    el Apellido Materno y la tercera columna para los Nombres
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="success"> Elegir </Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item>

            <Card sx={{ width: 255,  height: 380 }}>
                
                <CardContent>
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
                                    minSpareRows={1}
                                    readOnly={true}
                                    licenseKey="non-commercial-and-evaluation"
                                  />
                  <Typography variant="body2" color="text.secondary">
                  La primera columna para los Apellidos Paterno y
                  Materno, la segunda columna para los Nombres
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="success"> Elegir </Button>
                </CardActions>
            </Card>
        </Grid>

            
        <Grid item  >

            <Card sx={{ width: 255,  height: 380 }}>
                
                <CardContent>
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
                                    minSpareRows={1}
                                    readOnly={true}
                                    licenseKey="non-commercial-and-evaluation"
                                  />
                  <Typography variant="body2" color="text.secondary">
                    En una primera y única columna para los apellidos Paterno, Materno y Nombres
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="success"> Elegir </Button>
                </CardActions>
            </Card>
        </Grid>    
      
      </Grid>
    </Grid>
  );
};