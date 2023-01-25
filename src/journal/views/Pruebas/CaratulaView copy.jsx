import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table'




// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
  } ) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input value={value} onChange={onChange} onBlur={onBlur} />
}

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
}

// Be sure to pass our updateMyData and the skipPageReset option
export const Table=({ columns, data, updateMyData, skipPageReset })=> {
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // use the skipPageReset option to disable page resetting temporarily
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    
  )

  // Render the UI for your table
  return (
    /*  mas Info de el estilo de esta tabla en     https://www.youtube.com/watch?v=xedl472XwKc&t=8s */
    <div className='tableContainer'>
      <table className='tableCebra'{...getTableProps()} >
        <thead>
          {headerGroups.map(headerGroup => { 
          return(   
            <tr {...headerGroup.getHeaderGroupProps()} className='columnaSticky' >
              {headerGroup.headers.map(column => {
                console.log(column.headers) 
                return(
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              )})}              
            </tr>
          )})}
          
        </thead>
        
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className='columnaSticky'>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}


          <tr className='columnaSticky'> 
            <td className='botonMas'>
            <IconButton size='small' 
                        sx={{
                        color:'white', 
                        backgroundColor:'primary.main',
                        
                        ':hover':{backgroundColor:'primary.main', opacity:0.9},
                        
                      }} >
                  <AddOutlined sx={{fontSize: 30}} />
            </IconButton>
            </td>
          </tr> 


        </tbody>
      </table>

      
    </div>
  )
}
//********************************************************************************************* 
export const CaratulaView=()=> {

  const columns = useMemo(
    () => [
      
          {
            Header: "FirstName",
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
          
      
          {
            Header: 'Info',
            columns: [
              {
                Header: 'Age',
                accessor: 'age',
              },
              {
                Header: 'Visits',
                accessor: 'visits',
              },
              {
                Header: 'Status',
                accessor: 'status',
              },
              
              
            ],
          },
          {
            Header: 'Holads',

            columns: [ 
              {
                Header: ()=>( 
                  <IconButton size='small' 
                        sx={{
                        color:'white', 
                        backgroundColor:'error.main',
                        ':hover':{backgroundColor:'error.main', opacity:0.9},
                                }} >
                              <AddOutlined sx={{fontSize: 30}} />
                  </IconButton>
                ), 
                accessor: 'icono',
              },

            ],
          },
          
          
        ],
        []
      )

  const filas = useMemo(() => 
            [
                {
                    firstName: 'First Name',
                    lastName: 'Mamanii',
                    age: '35',
                    visits: '2',
                    status: '175',
                    // icono: '',
                },
                {
                    firstName: 'Hello',
                    lastName: 'World',
                    age: 'Hello',
                    visits: 'World',
                    status: 'Hello',
                    // icono: '',
                },
                {
                    firstName: 'Juan Carlos',
                    lastName: 'Manis',
                    age: '23',
                    visits: '55',
                    status: '12',
                    // icono: '',
                },
                {
                  firstName: 'First Name',
                  lastName: 'Mamanii1',
                  age: '35',
                  visits: '2',
                  status: '175',
                  // icono: '',
              },
              {
                  firstName: 'Hello',
                  lastName: 'World1',
                  age: 'Hello',
                  visits: 'World',
                  status: 'Hello',
                  // icono: '',
              },
              {
                  firstName: 'Juan Carlos',
                  lastName: 'Manis1',
                  age: '23',
                  visits: '55',
                  status: '12',
                  // icono: '',
              },
              {
                firstName: 'First Name',
                lastName: 'Mamanii2',
                age: '35',
                visits: '2',
                status: '175',
                // icono: '',
            },
            {
                firstName: 'Hello',
                lastName: 'World2',
                age: 'Hello',
                visits: 'World',
                status: 'Hello',
                // icono: '',
            },
            {
                firstName: 'Juan Carlos',
                lastName: 'Manis2',
                age: '23',
                visits: '55',
                status: '12',
                // icono: '',
            },
            {
              firstName: 'First Name',
              lastName: 'Mamanii3',
              age: '35',
              visits: '2',
              status: '175',
              // icono: '',
          },
          {
              firstName: 'Hello',
              lastName: 'World3',
              age: 'Hello',
              visits: 'World',
              status: 'Hello',
              // icono: '',
          },
          {
              firstName: 'Juan Carlos',
              lastName: 'Manis3',
              age: '23',
              visits: '55',
              status: '12',
              // icono: '',
          },
             

            ], [])


  const [data, setData] = useState(() => filas)
  const [originalData] = useState(data)
  const [skipPageReset, setSkipPageReset] = useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
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

  // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset
  useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  // Let's add a data resetter/randomizer to help
  // illustrate that flow...
  const resetData = () => setData(originalData)

  return (
    <>
      
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
      {/* <button onClick={resetData}>Reset Data</button> */}
    </>
  )
}


