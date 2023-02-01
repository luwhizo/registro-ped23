import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

export const ExampleComponent = () => {
  const hotSettings = useSelector(state => state); // hotSettings es todo el inicialstate o estado
  const dispatch = useDispatch();
  const hotTableComponentRef = useRef(null);

  const hotData = hotSettings.data;  //  hotData es la data obtenido del estado o inicialstate
  const isHotData = Array.isArray(hotData);  // isHotData devuelve true o false dependiendo de si hotData es o no un array

  const onBeforeHotChange = changes => {
    dispatch({
      type: 'updateData',
      dataChanges: changes
    });

    return false;
  }

  const toggleReadOnly = event => {
    dispatch({
      type: 'updateReadOnly',
      readOnly: event.target.checked
    });
  }

  return (
    <div className="dump-example-container">
      <div id="example-container">

        <div id="example-preview">
          <div className="controls">
            <label>
              <input onClick={toggleReadOnly} type="checkbox"/>
              Toggle <code>readOnly</code> for the entire table
            </label>
          </div>




          <HotTable
            ref={hotTableComponentRef}
            beforeChange={onBeforeHotChange} // envia los datos de la celda (o celdas) que se modifico, datos como numero de fila, columna, viejo dato y nuevo dato
            {...hotSettings} // aqui van todas las propiedades HotTable (initialstate)
          />
        </div>

    {/* ************************************************************************************************ */}



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

const initialReduxStoreState = {
  data: [
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3'],
    ['A4', 'B4', 'C4'],
    ['A5', 'B5', 'C5'],
  ],
  colHeaders: true,
  rowHeaders: true,
  readOnly: false,
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation'
};

const updatesReducer = (state = initialReduxStoreState, action) => {
  switch (action.type) {
    case 'updateData':
      const newData = [...state.data];

      action.dataChanges.forEach(([row, column, oldValue, newValue]) => {
        //row, column ->  son datos enteros que representan el numero de fila y columna que se editó
        //oldValue, newValue -> son datos de tipo string que represntan en viejo y nuevo valor que se editó 
        newData[row][column] = newValue;  // se sobre escribe solo una celda de toda la matriz
      })

      return {
        ...state,
        data: newData
      }

    case 'updateReadOnly':
      return {
        ...state,
        readOnly: action.readOnly
      };

    default:
      return state;
  }
};

const reduxStore = createStore(updatesReducer);

ReactDOM.render(
  <Provider store={reduxStore}>
    <ExampleComponent />
  </Provider>,
  document.getElementById('example1')
);