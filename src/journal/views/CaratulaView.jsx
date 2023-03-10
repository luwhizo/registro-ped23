import { HotColumn, HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { useEffect, useRef, useState } from 'react'; 
import { Button, Grid, Typography } from '@mui/material';
import { supabaseApp } from '../../supabase/client';
import { useDispatch, useSelector } from 'react-redux';
import { startCrearActualizarCaratula } from '../../store/cuadernoPed/caratula/thunks';
import { updateCaratula } from '../../store/cuadernoPed/caratula/caratulaSlice';

registerAllModules();

export const CaratulaView = () => { 
  const dispatch = useDispatch();
  const hotSettings = useSelector(state => state.caratula.data);
  const hotTableComponentRef = useRef(null);

  /* const onBeforeHotChange = changes => { // changes = array de array = matriz = fila (o filas) de la celda (o celdas) que se modificaron
    dispatch(updateCaratula(changes)) // actualizando en state
    dispatch(startCrearActualizarCaratula(changes)) /// esta en thunks
    return false;
    
  } */


  const [variable, setvariable] = useState(false) // false  // ancho de la pantalla de excel


  const nuevo = [
    { name: 'Ted Right', address: '' },
    { name: 'Frank Honest', address: '' },
    { name: 'Joan Well', address: '' },
    { name: 'Gail Polite', address: '' },
    { name: 'Michael Fair', address: '' }
  ];
  const [state, setstate] = useState(nuevo);

  return (

    <div
    className= {  variable ? 'excel-container-lite':'excel-container-full' }
        > 

        <button onClick={()=>console.log(state)}> mostrar </button>
        <HotTable
                data={state}
                colHeaders={true}
                height="auto"
                width="auto"
                minSpareRows={1}
                licenseKey="non-commercial-and-evaluation"
              />
       {/* <HotTable
              ref={hotTableComponentRef}
              beforeChange={onBeforeHotChange} // envia los datos de la celda (o celdas) que se modificó, datos como numero de fila, columna, viejo dato y nuevo dato  (onBeforeHotChange=antesDelCambioCaliente)
              data = {hotSettings} // aqui van todas las propiedades HotTable (todo el el state o initialstate)     
              className= 'fuente-mediano'
              colHeaders={true}
              rowHeaders={true}
              stretchH="all"  
              rowHeights={40}  // ancho minimo de filas
              colWidths={90}// ancho minimo de columnas
              // manualColumnResize={true} // cambio manuel del ancho de colum
              //minSpareRows={5}
              licenseKey="non-commercial-and-evaluation"
          /> */}

         
      
    </div>
    
  );
};