import React, { useEffect } from 'react'
import "../../styles/components/tabla.scss";
import { useTable, usePagination, useBlockLayout } from 'react-table'
import { useSticky } from 'react-table-sticky'
import { useDispatch, useSelector } from 'react-redux'
//import {StartEliminarAlumno, StartNuevaColumna, StartActualizarColumnasAlumno, StartNuevoAlumno, StartEliminarColumna, StartGuardarDatosAlumno, focoCambio} from '../../actions/Listas';
import {focoCambio} from '../../actions/Listas';



//---------LMS--------------
let estaEscribiendo=false;
//--------------------------

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, 
}) => {
  
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    //---------LMS--------------
    estaEscribiendo=true;
    //-------------------------
    //console.log("se dispara ca vez que toco una tecla")
    setValue(e.target.value)
    
  }
//---------------------LMS-------------------------------
//const {lista,columnas} = useSelector(state => state.notes) //// debe ir fuera, a cada screen
//-------------------------------------------------------

  const onBlur = () => {
    //---------LMS--------------
    if(estaEscribiendo===true){

      //console.log("Guardando... (si al final no cambia de foco ese dato no se guardará)")
      //console.log(lista[index].id)  // uid del alumno   (id es del objeto alumno) (ejex)   id diferentes no confundir
      //console.log(id) // el campo o columna que se editó  o modificó (ejey) (id es el encabezado de la columna de la tabla )
      //console.log(value) // el dato actual
          //let columaEjeY = columnas.find(col=> col.id===id); // debe ir fuera, a cada screen
          //columaEjeY = columaEjeY?.accessor || id  // debe ir fuera, a cada screen
      //console.log(columaEjeY) 
          //dispatch(StartGuardarDatosAlumno(lista[index].id,  columaEjeY,  value)) //// debe ir fuera, a cada screen
      dispatch(focoCambio(index,id,value))
            estaEscribiendo=false;
    }
  //---------------------

    updateMyData(index, id, value)
  }

  
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input  value={value} onChange={onChange} onBlur={onBlur} autoComplete="off"/>
}


const defaultColumn = {
  Cell: EditableCell,
}





function Table({ columns, data, updateMyData, skipPageReset }) {

  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    

  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      
      autoResetPage: !skipPageReset,

      updateMyData,
    },
    usePagination,
    useBlockLayout,  // Columnas pegajosas Sticky (video 17 - codevolution)
    useSticky, // Columnas pegajosas Sticky (video 17 - codevolution)
    
  )

 
  return (
    <> 
      <div className="table">
      <div {...getTableProps()} className="table sticky" style={{ width: "100%", height: 720 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th" >
                  {/* {<a onClick={saludoDiv}>column.render('Header')</a>} */}
                  
                  <h4 //className="encabezado" 
                  >
                    {column.render('Header')}

                  </h4>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        
      </div>
    </div>

    </>
  )
}

export const Tablita = ({dat,colu}) => {

const [data1, setData1] = React.useState(() => dat)

//-----  ** Autor : Luis Mamani Surco ** --------/
useEffect(() => {
  setData1(dat)
}, [dat])
//------------------------------------------------/

const columns = React.useMemo(  () => colu,   []  )
 

  const updateMyData = (rowIndex, columnId, value) => {
    
    setData1(old =>     
      old.map((row, index) => { 
        
        if (index === rowIndex) {
          
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
  



  return (
    <>
       
      <Table
        columns={columns}
        data={data1}
        updateMyData={updateMyData}
      />
    
    </>
  )
}

