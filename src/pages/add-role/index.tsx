// ** React Imports
import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

// ** MUI Imports
import { FormControlLabel } from '@mui/material'
import { Checkbox } from '@mui/material'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { useRouter } from 'next/router'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

interface State {
  password: string
  password2: string
  showPassword: boolean
  showPassword2: boolean
}

const AddRole = () => {
  const router = useRouter()
  // ** States
  const [eneteredrole, setenteredrole] = useState('')
  const rolehandler = event => {
    setenteredrole(event.target.value)
  }

  const submithandler = event => {
    event.preventDefault()
    console.log(eneteredrole)
    alert(`${eneteredrole} created`)
    setenteredrole('')
    router.push('/roles')
  }
  const cancelhandler=()=>{
      router.push("/roles")
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <Card>
          <CardHeader title='Add Role' titleTypographyProps={{ variant: 'h6' }} subheader='Set Role Permissions ' />
          <Divider sx={{ margin: 0 }} />
          <form onSubmit={submithandler}>
            <CardContent>
              <Grid item xs={12} md={12}>
                <TextField required fullWidth label='Role Name' onChange={rolehandler} value={eneteredrole} />
              </Grid>
              <Divider sx={{ margin: 0 }} />
              <Grid item xs={12} md={12}>
                <Typography variant='h6' sx={{ marginTop: 4 }}>
                  Role Permissions
                </Typography>
                <Grid container>
                  <Grid item xs={6} md={6}>
                    <Typography variant='h7'>Administrator Acess</Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <FormControlLabel control={<Checkbox />} label='Select All' />
                  </Grid>
                </Grid>
                <Divider sx={{ margin: 0 }} />
              </Grid>
              <Grid container>
                <Grid item xs={3} md={3}>
                  <Typography variant='h7'>Posts Management</Typography>
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Create' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Read' />
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Update' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Delete' />
                </Grid>
                <Divider sx={{ margin: 0 }} />
              </Grid>
              <Divider sx={{ margin: 0 }} />

              <Grid container>
                <Grid item xs={3} md={3}>
                  <Typography variant='h7'>Content Management</Typography>
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Create' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Read' />
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Update' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Delete' />
                </Grid>
                <Divider sx={{ margin: 0 }} />
              </Grid>
              <Divider sx={{ margin: 0 }} />
              <Grid container>
                <Grid item xs={3} md={3}>
                  <Typography variant='h7'>User Management</Typography>
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Create' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Read' />
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Update' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Delete' />
                </Grid>
                <Divider sx={{ margin: 0 }} />
              </Grid>
              <Divider sx={{ margin: 0 }} />

              <Grid container>
                <Grid item xs={3} md={3}>
                  <Typography variant='h7'>Database Management</Typography>
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Create' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Read' />
                </Grid>
                <Grid item xs={2.3} md={2.3}>
                  <FormControlLabel control={<Checkbox />} label='Update' />
                </Grid>
                <Grid item xs={2.2} md={2.2}>
                  <FormControlLabel control={<Checkbox />} label='Delete' />
                </Grid>
                <Divider sx={{ margin: 0 }} />
              </Grid>
              <Divider sx={{ margin: 0 }} />
            </CardContent>

            <CardActions>
              <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
                Submit
              </Button>
              <Button size='large' color='secondary' variant='outlined'>
                Back
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default AddRole
