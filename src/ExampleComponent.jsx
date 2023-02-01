
import { useRef } from 'react';
import ReactDOM from 'react-dom';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

import { configureStore, createSlice } from '@reduxjs/toolkit';


registerAllModules();




export const ExampleComponent = () => {

  const hotSettings = useSelector(state => state.ejemplo); // hotSettings es todo el inicialstate o estado
  const dispatch = useDispatch();
  const hotTableComponentRef = useRef(null);

  const hotData = hotSettings.data;  //  hotData es la data obtenido del estado o inicialstate
  const isHotData = Array.isArray(hotData);  // isHotData devuelve true o false dependiendo de si hotData es o no un array

        const onBeforeHotChange = changes => {
          dispatch(updateData ( {changes:changes} ) );
          
          return false;
        }


  /*       const toggleReadOnly = event => {
          dispatch(  updateReadOnly( {readOnly: event.target.checked } )  );
        } */


  return (
    <div className="dump-example-container">
      <div id="example-container">

        <div id="example-preview">

          {/* <div className="controls">
            <label>
              <input onClick={toggleReadOnly} type="checkbox"/>
              Toggle <code>readOnly</code> for the entire table
            </label>
          </div> */}

          <HotTable
            licenseKey= 'non-commercial-and-evaluation'
            ref={hotTableComponentRef}
            beforeChange={onBeforeHotChange} // envia los datos de la celda (o celdas) que se modifico, datos como numero de fila, columna, viejo dato y nuevo dato
            {...hotSettings} // aqui van todas las propiedades HotTable (todo el el state o initialstate)

          />
        </div>






        <div id="redux-preview" className="table-container">

          <h3>Redux store dump</h3>

          {isHotData && (
            <div>
              <strong>data:</strong>
              <table style={{ border: '1px solid #d6d6d6' }}>
                <tbody>
                  {hotData.map((row, i) =>(  // row es el arreglo de la fila i   _____   i es el numero de fila (empieza en cero)
                      <tr key={i}>
                        {row.map((cell, i) => <td key={i}>{cell}</td>)}        {/* es el dato (string) de la columna i (empieza en cero) */}
                      </tr>
                    ))}

                </tbody>
              </table>
            </div>
          )}

          <table>
            <tbody>
              {Object.entries(hotSettings).map(([name, value]) => name !== 'data' && (
                <tr key={`${name}${value}`}>
                  <td><strong>{name}:</strong></td>
                  <td>{value.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};





//********* I n i c i o    S l i c e  ******************* */


export const ejemploSlice = createSlice({
    name: 'ejemplo',
    initialState: {
      data: [
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
        ['A3', 'B3', 'C3'],
        ['A4', 'B4', 'C4'],
        ['A5', 'B5', 'C5'],
      ],
      colHeaders: true,
      rowHeaders: true,
      //readOnly: false,
      height: 'auto',
      
    },

    reducers: {
      updateData: (state=initialState, action  ) => {
        const newData = [...state.data];

          action.payload.changes.forEach(([row, column, oldValue, newValue]) => {
            //row, column ->  son datos enteros que representan el numero de fila y columna que se editó
            //oldValue, newValue -> son datos de tipo string que represntan en viejo y nuevo valor que se editó 
            newData[row][column] = newValue;  // se sobre escribe solo las celdas que se editaron de toda la matriz
          })
        },


        
    /*   updateReadOnly: (state, action  ) => {
        state.readOnly = action.payload.readOnly
        },   */
    }
});
//Los creadores de acciones se generan para cada función de reducer de casos.
export const { updateData, updateReadOnly } = ejemploSlice.actions;

//********** F i n   S l i c e ******************************* */




const store = configureStore({
  reducer:{ejemplo:ejemploSlice.reducer }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
       <ExampleComponent />
    </Provider>
  
)


