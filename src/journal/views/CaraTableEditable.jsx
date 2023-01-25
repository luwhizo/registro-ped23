import React from 'react'

import { useTable } from 'react-table'


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()} onClick={function(event){console.log(event.target)}}>
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
  )
}

export const CaraTableEditable=()=> {
  const columns = React.useMemo(
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

  const data = React.useMemo(() => 
  
  [
    {
        firstName: 'First Name',
        lastName: 'Mamanii',
        age: '35',
        visits: '2',
        status: '175',
        icono: '',
    },
    {
        firstName: 'Hello',
        lastName: 'World',
        age: 'Hello',
        visits: 'World',
        status: 'Hello',
        icono: '',
    },
    {
        firstName: 'Juan Carlos',
        lastName: 'Manis',
        age: '23',
        visits: '55',
        status: '12',
        icono: '',
    },
    {
      firstName: 'First Name',
      lastName: 'Mamanii1',
      age: '35',
      visits: '2',
      status: '175',
      icono: '',
  },
  {
      firstName: 'Hello',
      lastName: 'World1',
      age: 'Hello',
      visits: 'World',
      status: 'Hello',
      icono: '',
  },
  {
      firstName: 'Juan Carlos',
      lastName: 'Manis1',
      age: '23',
      visits: '55',
      status: '12',
      icono: '',
  },
  {
    firstName: 'First Name',
    lastName: 'Mamanii2',
    age: '35',
    visits: '2',
    status: '175',
    icono: '',
},
{
    firstName: 'Hello',
    lastName: 'World2',
    age: 'Hello',
    visits: 'World',
    status: 'Hello',
    icono: '',
},
{
    firstName: 'Juan Carlos',
    lastName: 'Manis2',
    age: '23',
    visits: '55',
    status: '12',
    icono: '',
},
{
  firstName: 'First Name',
  lastName: 'Mamanii3',
  age: '35',
  visits: '2',
  status: '175',
  icono: '',
},
{
  firstName: 'Hello',
  lastName: 'World3',
  age: 'Hello',
  visits: 'World',
  status: 'Hello',
  icono: '',
},
{
  firstName: 'Juan Carlos',
  lastName: 'Manis3',
  age: '23',
  visits: '55',
  status: '12',
  icono: '',
},
{
firstName: 'Hello',
lastName: 'World3',
age: 'Hello',
visits: 'World',
status: 'Hello',
icono: '',
},
{
firstName: 'Juan Carlos',
lastName: 'Manis3',
age: '23',
visits: '55',
status: '12',
icono: '',
},    

]
  
  , [])

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  )
}


