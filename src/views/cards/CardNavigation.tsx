// ** React Imports
import { useEffect, useState } from 'react'

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

  const ispermission = pm => {
    return pm.id == props.permissions
  }

  const item = rowss.find(ispermission)
  console.log(item)

  const router = useRouter()
  // ** State
  const [permission, setpermission] = useState()
  const [permissionerror, setpermissionerror] = useState()

  const permissionhandler = event => {
    setpermission(event.target.value)
  }
  useEffect(() => {
    if (item) {
      setpermission(item.name)
    }
  }, [item])

  const submithandler = (event: any) => {
    event.preventDefault()

    setpermissionerror('')

    if (permission.trim().length < 1) {
      setpermissionerror('Empty Permission')
    } else if (permission.trim().length > 500) {
      setpermissionerror('Permission ')
    } else {
      // props.onAddblog(permisson)
      console.log(permission)
      setpermission('')
      alert("Permission Updated")
      router.push('/view-permissions')
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
            defaultValue={item.name}
          />
          {permissionerror}
          <FormControlLabel control={<Checkbox />} label='Set as core Permission' />
          <Grid>
          <Button type='submit' size='large' variant='contained' sx={{ mt: 4, mb: 3 }} onSubmit={submithandler}>
            Save
          </Button>{' '}
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
