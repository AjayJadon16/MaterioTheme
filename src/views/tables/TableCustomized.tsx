// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow, { TableRowProps } from '@mui/material/TableRow'
import TableCell, { TableCellProps, tableCellClasses } from '@mui/material/TableCell'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import { defaultMaxListeners } from 'events'

const StyledTableCell = styled(TableCell)<TableCellProps>(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)<TableRowProps>(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const TableCustomized = () => {
  const router = useRouter()
  const [fetchedusers, setFetchedusers] = useState([])


  useEffect(() => {
    async function displayUser() {
      return fetch('https://reqres.in/api/users', {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      }).then(data => data.json())
    }

    const fetchusers = async () => {
      const users = await displayUser()
      setFetchedusers(users.data)
    }

    fetchusers()
  }, [])
  console.log(fetchedusers)

  //   const deleteuser=()=>{
  //     useEffect(() => {
  //       // DELETE request using fetch inside useEffect React hook
  //       fetch('https://reqres.in/api/users', { method: 'DELETE' })
  //           .then(() => setStatus('Delete successful'));

  //   }, []);
  //   alert(status)
  // }
  // const UserDelete = (id) => {

  //   var data = {
  //     id: id
  //   }
  //   fetch('https://reqres.in/api/users', {
  //     method: 'DELETE',

  //     headers: {
  //       Accept: 'application/form-data',

  //       'Content-Type': 'application/json'
  //     },

  //     body: JSON.stringify(data)
  //   })
  //     .then(res => res.text())

  //     .then(result => {
  //       console.log(result)
  //     })
  // }

  async function deleteUser() {
    return fetch('https://reqres.in/api/users/2', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then(data => data.json)
  }

  const deluser = async () => {
    const msg = await deleteUser()
    console.log(msg)
    alert('User Deleted')
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Avatar</StyledTableCell>
            <StyledTableCell align='right'>First_Name</StyledTableCell>
            <StyledTableCell align='right'>Last_Name</StyledTableCell>
            <StyledTableCell align='right'>Email</StyledTableCell>
            <StyledTableCell align='right'>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedusers.map(fetcheduser => (
            <StyledTableRow key={fetcheduser.id}>
              <StyledTableCell component='th' scope='row'>
                {fetcheduser.avatar}
              </StyledTableCell>
              <StyledTableCell align='right'>{fetcheduser.first_name}</StyledTableCell>
              <StyledTableCell align='right'>{fetcheduser.last_name}</StyledTableCell>
              <StyledTableCell align='right'>{fetcheduser.email}</StyledTableCell>
              <StyledTableCell align='right'>
                {' '}
                
                <Link href={`/users/${fetcheduser.id}`}>
                  <Button variant='contained' size='small'>
                    Edit
                  </Button>
                </Link>
                <Button variant='secondary' size='small' onClick={deluser}>
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCustomized
