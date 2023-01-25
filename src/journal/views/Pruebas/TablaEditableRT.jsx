import { useEffect, useMemo, useState } from 'react'
import { useTable } from 'react-table'




// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
  }  ) => {
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
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </>
  )
}
//********************************************************************************************* 
export const CaratulaView=()=> {

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
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
          {
            Header: 'Profile Progress',
            accessor: 'progress',
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
                    progress: 'World',
                },
                {
                    firstName: 'Hello',
                    lastName: 'World',
                    age: 'Hello',
                    visits: 'World',
                    status: 'Hello',
                    progress: 'World',
                },
                {
                    firstName: 'Juan Carlos',
                    lastName: 'Manis',
                    age: '23',
                    visits: '55',
                    status: '12',
                    progress: '45',
                },
                {
                  firstName: 'First Name',
                  lastName: 'Mamanii1',
                  age: '35',
                  visits: '2',
                  status: '175',
                  progress: 'World',
              },
              {
                  firstName: 'Hello',
                  lastName: 'World1',
                  age: 'Hello',
                  visits: 'World',
                  status: 'Hello',
                  progress: 'World',
              },
              {
                  firstName: 'Juan Carlos',
                  lastName: 'Manis1',
                  age: '23',
                  visits: '55',
                  status: '12',
                  progress: '45',
              },
              {
                firstName: 'First Name',
                lastName: 'Mamanii2',
                age: '35',
                visits: '2',
                status: '175',
                progress: 'World',
            },
            {
                firstName: 'Hello',
                lastName: 'World2',
                age: 'Hello',
                visits: 'World',
                status: 'Hello',
                progress: 'World',
            },
            {
                firstName: 'Juan Carlos',
                lastName: 'Manis2',
                age: '23',
                visits: '55',
                status: '12',
                progress: '45',
            },
            {
              firstName: 'First Name',
              lastName: 'Mamanii3',
              age: '35',
              visits: '2',
              status: '175',
              progress: 'World',
          },
          {
              firstName: 'Hello',
              lastName: 'World3',
              age: 'Hello',
              visits: 'World',
              status: 'Hello',
              progress: 'World',
          },
          {
              firstName: 'Juan Carlos',
              lastName: 'Manis3',
              age: '23',
              visits: '55',
              status: '12',
              progress: '45',
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
      <button onClick={resetData}>Reset Data</button>
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </>
  )
}


