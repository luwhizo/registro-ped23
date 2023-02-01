import { HotColumn, HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useEffect, useState } from 'react'; 
import { Button, Grid, Typography } from '@mui/material';
import { supabaseApp } from '../../supabase/client';
import { useSelector } from 'react-redux';


// register Handsontable's modules
registerAllModules();

export const FiliacionView = () => {
  const { datosCaratula } = useSelector(state => state.caratula);

  const data = [datosCaratula
       
        /* { uid:'uid',
        docente:'Docente',
        distrito:'distrito',
        nucleo:'nucleo',
        colegio:'colegio',
        director:'director',
        nivel:'nivel',
        area:'area',
        gestion:'gestion',
        curso:'curso',
      }, */

    /* {encabezado:'DATOS REFERENCIALES :',dato: ''},
    {encabezado:'DISTRITO EDUCATIVO :',dato: 'El Alto 2'},
    {encabezado:'NUCLEO EDUCATIVO :',dato: 'Bartolina Sisa'},
    {encabezado:'UNIDAD EDUCATIVA :',dato: 'Mercedes Elio de Rivero'},
    {encabezado:'DIRECTOR/A :',dato: 'Lic. Milton Gonzales V.'},
    {encabezado:'DOCENTE :',dato: 'Prof. Luis Mamani Surco'},
    {encabezado:'NIVEL :',dato: 'Secundario'},
    {encabezado:'CURSOS :',dato: '3ro A'},
    {encabezado:'ÁREA :',dato: 'Matemática'},
    {encabezado:'GESTIÓN :',dato: '2023' }, */

    /* ['DATOS REFERENCIALES :', ''],
    ['DISTRITO EDUCATIVO :', 'El Alto 2'],
    ['NUCLEO EDUCATIVO :', 'Bartolina Sisa'],
    ['UNIDAD EDUCATIVA :', 'Mercedes Elio de Rivero'],
    ['DIRECTOR/A :', 'Lic. Milton Gonzales V.'],
    ['DOCENTE :', 'Prof. Luis Mamani Surco'],
    ['NIVEL :', 'Secundario'],
    ['CURSOS :', '3ro A'],
    ['ÁREA :', 'Matemática'],
    ['GESTIÓN :', '2023'], */
    
  ]

  const [variable, setvariable] = useState(false) // false  // ancho de la pantalla de excel


  const agregar = async()=>{
     const result = await supabaseApp.from('caratula').insert(data
     /* [

      { uid:'',
        docente:'aa',
        distrito:'aa',
        nucleo:'aa',
        colegio:'aa',
        director:'aa',
        //nivel:'',
        area:'aa',
        //gestion:'',
        curso:'',
        },
        {
          docente:'bb',
          distrito:'bb',
          nucleo:'bb',
          colegio:'bb',
          director:'bb',
          //nivel:'',
          area:'bb',
          //gestion:'',
          },
     ] */
      
      
    )
    console.log(result)
  }
/* 
  const [datosref, setdatosref] = useState([])

  
    useEffect(() => {
      setdatosref(data)
    }, []); */

    

  return (

    <div
    className= {  variable ? 'excel-container-lite':'excel-container-full' }
          >
      <Button variant="contained" color="secondary" sx={{m:1}} 
              onClick={ agregar } >
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
      data={data}
      colHeaders={['id_prof',
                    'distrito',
                    'nucleo',
                    'colegio',
                    'director',
                    'docente',
                    'nivel',
                    'area',
                    'gestion']}

      className= 'fuente-mediano'
      
      /* width="100%"
      height="auto" */
     
     cell={[ {row: 0, col: 0,  className: 'custom-cell',}  ]} // clase personalizada

     /* mergeCells={[ //                 combinar celdas
        { row: 0, col: 0, rowspan: 1, colspan: 2 },
        //{ row: 3, col: 4, rowspan: 2, colspan: 2 },
      ]} */
      
      rowHeights={40}  // ALTO DE FILA
      stretchH="all"  // ANCHO DE COLUMNA
      //colHeaders={true}
      //rowHeaders={true}
      colWidths={100}
      manualColumnResize={true}
      afterChange={ (change, source) => {

        if (source === 'loadData') {
          return; //salirse de esta funcion si la carga proviene de loaddata
        }
          console.log(change) // aqui hacer una peticion a supabase para actualizar
          console.log(source)
        }}  
      licenseKey="non-commercial-and-evaluation"
    />


    
    {/* <HotColumn settings={{readOnly: true, className: 'htRight htMiddle'}}/>
    <HotColumn settings={{readOnly: false, className: 'htLeft htMiddle'}}/> */}

    {/* </HotTable> */}
       

            
      
      
    </div>
  );
};