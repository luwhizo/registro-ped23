import { HotColumn, HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useEffect, useRef, useState } from 'react'; 
import { Button, Grid, Typography } from '@mui/material';
import { supabaseApp } from '../../supabase/client';
import { useDispatch, useSelector } from 'react-redux';
import { startCrearActualizarCaratula } from '../../store/cuadernoPed/caratula/thunks';
import { updateCaratula } from '../../store/cuadernoPed/caratula/caratulaSlice';



// register Handsontable's modules
registerAllModules();

export const FiliacionView = () => {
  const dispatch = useDispatch();
const hotSettings = useSelector(state => state.caratula);
  const hotTableComponentRef = useRef(null);

  const onBeforeHotChange = changes => {
    dispatch(updateCaratula(changes)) // actualizando en state
    dispatch(startCrearActualizarCaratula(changes)) /// esta en thunks
    return false;
    
  }


  const [variable, setvariable] = useState(false) // false  // ancho de la pantalla de excel



/*   const { dato, error } = await supabase.from('countries').upsert(
    { id: 1, name: 'Albania' })
  .select()
 */


  const agregar = async()=>{
    /*  const result = await supabaseApp.from('caratulas')
                    .upsert({ id_caratula: 3, distrito: 'Yacuiba' }).select() */
              
        try {
              const {data} = await supabaseApp
                      .from('caratulas')
                      .select('id_caratula')
              if(data.length>0){
                console.log('hay al menos un registro')
                console.log(data[0].id_caratula)
              }else{
                console.log('No hay registro')
              }
              
        } catch (error) {
          console.log(error)
         
        }
    
  }


    

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

       
       <HotTable
              ref={hotTableComponentRef}
              beforeChange={onBeforeHotChange} // envia los datos de la celda (o celdas) que se modifico, datos como numero de fila, columna, viejo dato y nuevo dato
              {...hotSettings} // aqui van todas las propiedades HotTable (todo el el state o initialstate)
             
              /*  
              className= 'fuente-mediano'
              rowHeights={40}  
              stretchH="all"  
              colHeaders={true}
              rowHeaders={true}
              colWidths={100}
              manualColumnResize={true}
              licenseKey="non-commercial-and-evaluation" */
          />
      
    </div>
  );
};