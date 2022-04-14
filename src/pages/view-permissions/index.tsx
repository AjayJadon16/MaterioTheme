// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { TableCellProps, tableCellClasses } from '@mui/material/TableCell'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import router from 'next/router'
// import SearchBar from 'material-ui-search-bar'

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

const rowss = [
  {
    id: '1',
    name: 'Management',
    assigned: 'Administrator',
    created: '14 Apr 2021, 8:43 PM'
  },

  {
    id: '2',
    name: 'Manage Billing & Roles',
    assigned: 'Administrator',
    created: '15 Apr 2021, 8:43 PM'
  },
  {
    id: '3',
    name: 'Add & Remove Users',
    assigned: 'Administrator, Manager',
    created: '16 Apr 2021, 8:43 PM'
  },
  {
    id: '4',
    name: 'Create Post',
    assigned: 'Administrator, Manager',
    created: '16 Apr 2021, 8:43 PM'
  },

  {
    id: '5',
    name: 'Delete Post',
    assigned: 'Administrator, Manager',
    created: '16 Apr 2021, 8:43 PM'
  },

  {
    id: '6',
    name: 'Create user',
    assigned: 'Administrator',
    created: '16 Apr 2021, 8:43 PM'
  },

  {
    id: '7',
    name: 'Delete user',
    assigned: 'Administrator',
    created: '12 Apr 2021, 8:43 PM'
  },
  {
    id: '8',
    name: 'Only View',
    assigned: 'Administrator, Manager',
    created: '16 Apr 2021, 8:43 PM'
  },

  {
    id: '9',
    name: 'Client Communication',
    assigned: 'Administrator, Manager',
    created: '16 Apr 2021, 8:43 PM'
  },

  {
    id: '10',
    name: 'Project Planning',
    assigned: 'Administrator',
    created: '16 Apr 2021, 8:43 PM'
  }
]
const TableStickyHeader = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  const delhandler = () => {
    alert('Permission Deleted')
  }
  const addpermission = () => {
    router.push('/permission')
  }

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Grid container>
            <Grid item xs={10} md={10}>
              <Typography variant='h4' sx={{ marginTop: 4 }}>
                Permissions List
              </Typography>
              {/* <SearchBar placeholder='SEarch here' autoFocus /> */}
            </Grid>
            <Grid item xs={2} md={2}>
              <Button variant='contained' size='large' onClick={addpermission}>
                Add Permission
              </Button>
            </Grid>
          </Grid>

          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='left'>Name</StyledTableCell>
                <StyledTableCell align='right'>Assigned to</StyledTableCell>
                <StyledTableCell align='right'>Created At</StyledTableCell>

                <StyledTableCell align='right'>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowss.map(row => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component='th' scope='row'>
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.assigned}</StyledTableCell>
                  <StyledTableCell align='right'>{row.created}</StyledTableCell>
                  <StyledTableCell align='right'>
                    {' '}
                    <Link href={`/permissions/${row.id}`}>
                      <Button variant='contained' size='small'>
                        Edit
                      </Button>
                    </Link>{' '}
                    <Button variant='secondary' size='small' onClick={delhandler}>
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          {/* <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default TableStickyHeader
