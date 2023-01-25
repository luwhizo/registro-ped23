import { HotColumn, HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useState } from 'react'; 
import { Button, Grid, Typography } from '@mui/material';


// register Handsontable's modules
registerAllModules();

export const FiliacionView = () => {
  
  
  const data1 = [
    { id: 1, 
      Paterno: 'Mamani', 
      Materno: 'Surco',
      Nombres: 'Luis',
      Carnet: '6176283',
      Rude: '23165146546',
      Padre: 'Teofilo Quispe',
      celular: '73256433',
      Direccion:'Huayna potosi'
    },
    { id: 1, 
      Paterno: 'Mamani', 
      Materno: 'Surco',
      Nombres: 'Luis',
      Carnet: '6176283',
      Rude: '23165146546',
      Padre: 'Teofilo Quispe',
      celular: '73256433',
      Direccion:'Huayna potosi'
    },
    { id: 1, 
      Paterno: 'Mamani', 
      Materno: 'Surco',
      Nombres: 'Luis',
      Carnet: '6176283',
      Rude: '23165146546',
      Padre: 'Teofilo Quispe',
      celular: '73256433',
      Direccion:'Huayna potosi'
    },
    { id: 1, 
      Paterno: 'Mamani', 
      Materno: 'Surco',
      Nombres: 'Luis',
      Carnet: '6176283',
      Rude: '23165146546',
      Padre: 'Teofilo Quispe',
      celular: '73256433',
      Direccion:'Huayna potosi'
    },
    { id: 1, 
      Paterno: 'Mamani', 
      Materno: 'Surco',
      Nombres: 'Luis',
      Carnet: '6176283',
      Rude: '23165146546',
      Padre: 'Teofilo Quispe',
      celular: '73256433',
      Direccion:'Huayna potosi'
    },
    { id: 1, 
      Paterno: 'Mamani', 
      Materno: 'Surco',
      Nombres: 'Luis',
      Carnet: '6176283',
      Rude: '23165146546',
      Padre: 'Teofilo Quispe',
      celular: '73256433',
      Direccion:'Huayna potosi'
    },
    { id: 1, 
      Paterno: 'Mamani', 
      Materno: 'Surco',
      Nombres: 'Luis',
      Carnet: '6176283',
      Rude: '23165146546',
      Padre: 'Teofilo Quispe',
      celular: '73256433',
      Direccion:'Huayna potosi calle chiuta y Huacheño Nro 3314'
    },
 
  ];
  const [variable, setvariable] = useState(false) // false


  const [estado, setestado] = useState(data1)
  const encabezado=['ID', 'PATERNO', 'MATERNO', 'NOMBRES', 'CI', 'RUDE', 'MADRE', 'TELEFONO', 'DIRECCION']
  return (
    <div
    className= {  variable ? 'excel-container-lite':'excel-container-full' }
    >
<Button variant="contained" color="secondary" sx={{m:1}} >
  habilitar edición 
</Button>        
        
<Button variant="contained" color="success" sx={{m:1}}>
  Guardar cambios
</Button>




      {/* <Typography textAlign='center' variant='h5' color="White">Elija el modo en que desea registrar a sus estudiantes</Typography >
      <Grid
      container
      spacing={0}
      direction="row"
      justifyContent='center'
      alignItems="center"
      sx={{minHeight: "calc(100vh - 100px)", backgroundColor:"primary.main"}}
      >     </Grid> */}
       
       <HotTable
      data={[
        ['DATOS REFERENCIALES :', ''],
        ['DISTRITO EDUCATIVO :', 'El Alto 2'],
        ['NUCLEO EDUCATIVO :', 'Bartolina Sisa'],
        ['UNIDAD EDUCATIVA :', 'Mercedes Elio de Rivero'],
        ['DIRECTOR/A :', 'Lic. Milton Gonzales V.'],
        ['DOCENTE :', 'Prof. Luis Mamani Surco'],
        ['NIVEL :', 'Secundario'],
        ['CURSOS :', '3ro A'],
        ['ÁREA :', 'Matemática'],
        ['GESTIÓN :', '2023'],
        
      ]}

      className= 'fuente-mediano'
      
      /* width="100%"
      height="auto" */
     
     cell={[ {row: 0, col: 0,  className: 'custom-cell',}  ]} // clase personalizada

     mergeCells={[
        { row: 0, col: 0, rowspan: 1, colspan: 2 },
        //{ row: 3, col: 4, rowspan: 2, colspan: 2 },
      ]}
      
      rowHeights={40}  // ALTO DE FILA
      stretchH="all"  // ANCHO DE COLUMNA
      //colHeaders={true}
      //rowHeaders={true}
      colWidths={100}
      manualColumnResize={true}
      columns
      licenseKey="non-commercial-and-evaluation"
    >
    <HotColumn settings={{readOnly: true, className: 'htRight htMiddle'}}/>
    <HotColumn settings={{readOnly: false, className: 'htLeft htMiddle'}}/>

    </HotTable>
       

            
      
      
    </div>
  );
};