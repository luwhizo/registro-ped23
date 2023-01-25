
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useMemo } from 'react'
import { useTable } from 'react-table'
 


export const CaratulaView = () => {


   const data = useMemo(
     () => [
       {
         col1: 'Hello',
         col2: 'World',
         col3: 'World',
         col4: 'World',
         col5: 'World',
         col6: 'World',
         col7: 'World',
         col8: 'World',
         col9: 'World',
       },
       {
         col1: 'react-tableuuuuuuuu',
         col2: 'rocks',
         col3: 'World',
         col4: 'World',
         col5: 'World',
         col6: 'World',
         col7: 'World',
         col8: 'World',
         col9: 'World',
       },
       {
         col1: 'whatever',
         col2: 'you want',
         col3: 'World',
         col4: 'World',
         col5: 'World',
         col6: 'World',
         col7: 'World',
         col8: 'World',
         col9: 'World',
       },
     ],
     []
   )
 
   const columns = useMemo(
     () => [
       {
         Header: 'Column 1',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Column 2',
         accessor: 'col2',
       },
       {
        Header: 'Column 3',
        accessor: 'col3', // accessor is the "key" in the data
      },
      {
        Header: 'Column 4',
        accessor: 'col4',
      },
      {
        Header: 'Column 5',
        accessor: 'col5', // accessor is the "key" in the data
      },
      {
        Header: 'Column 6',
        accessor: 'col6',
      },
      {
        Header: 'Column 7',
        accessor: 'col7',
      },
      {
        Header: 'Column 8',
        accessor: 'col8', // accessor is the "key" in the data
      },
      {
        Header: 'Column 9',
        accessor: 'col9',
      },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
 }
