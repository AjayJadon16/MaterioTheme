// ** React Imports
import { useState } from 'react'

// ** MUI Imports

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { TextField } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { Checkbox } from '@mui/material'
import router, { useRouter } from 'next/router'

const CardNavigationCenter = props => {
  const router = useRouter();
  // ** State
  const [permission, setpermission] = useState()
  const [permissionerror, setpermissionerror] = useState()

  const permissionhandler = event => {
    setpermission(event.target.value)
  }

  const submithandler = (event: any) => {
    event.preventDefault()
   
    setpermissionerror('')

    if (permission.trim().length < 1) {
      setpermissionerror("Empty Permission")
    }
     else if (permission.trim().length > 500) {
      setpermissionerror("Permission")
    } else {
      // props.onAddblog(permisson)
      console.log(permission)
      setpermission("")
      alert("Permission Created")
      router.push("/view-permissions")
      
    }
  }

  const discardhandler = () => {
    
    router.push('/view-permissions')
  }

  return (
    
    <Card>
      <CardContent sx={{ textAlign: 'center' }}>
        <form onSubmit={submithandler}>
          <Typography variant='h3' sx={{ marginBottom: 2 }}>
            Add New Permission
          </Typography>
          <Typography variant='body2' sx={{ marginBottom: 4 }}>
            Permission you may use and assign to your users.
          </Typography>

          <TextField
            id='permisssion'
            placeholder='Enter Permisssion Name'
            name='permission'
            margin='normal'
            fullWidth
            label='Permission Name'
            type='text'
            onChange={permissionhandler}
            value={permission}
            required
          />
          {permissionerror}
          <FormControlLabel control={<Checkbox />} label='Set as core Permission' />
          <Grid>
          <Button type='submit' size='large' variant='contained' sx={{ mt: 4, mb: 3 }} onSubmit={submithandler}>
            Create 
          </Button>{" "}
          <Button size='large' color='secondary' variant='outlined' onClick={discardhandler}>
            Discard
          </Button>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default CardNavigationCenter
