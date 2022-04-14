// ** React Imports
import { ChangeEvent, MouseEvent, useEffect, useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'

import Router from 'next/router'

interface State {
  password: string
  showPassword: boolean
}

const Userform = id => {
  const [enteredfirstname, setenteredfirstname] = useState('')
  const [enteredlastname, setenteredlastname] = useState('')
  const [enteredemail, setenteredemail] = useState('')
  const [enterednumber, setenterednumber] = useState('')

  const idd = id.id

  const [fetchedusers, setFetchedusers] = useState([])
  useEffect(() => {
    async function displayUser() {
      return fetch(`https://reqres.in/api/users/${idd}`, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      }).then(data => data.json())
    }

    const fetchusers = async () => {
      const data = await displayUser()
      setFetchedusers(data.data)
    }
    fetchusers()
  }, idd)

  useEffect(() => {
    if (fetchedusers) {
      setenteredfirstname(fetchedusers.first_name)
      setenteredlastname(fetchedusers.last_name)
      setenteredemail(fetchedusers.email)
    }
  }, [fetchedusers])

  const firstnamehandler = (event: any) => {
    setenteredfirstname(event.target.value)
  }
  const lastnamehandler = (event: any) => {
    setenteredlastname(event.target.value)
  }
  const emailhandler = (event: any) => {
    setenteredemail(event.target.value)
  }
  const numberhandler = (event: any) => {
    setenterednumber(event.target.value)
  }
  const cancelHandler = (event: any) => {
    Router.push('/user-list')
  }

  const handlesubmit = (event: any) => {
    event.preventDefault()
    const user = [enteredfirstname, enteredlastname, enteredemail, enterednumber]
    console.log(user)

    Router.push('/user-list')

    // if (enteredfirstname.trim().length < 1) {
    //   settitleerror("Empty Title");
    // } else if (enteredpost.trim().length < 1) {
    //   setposterror("Empty Description");
    // } else if (enteredpost.trim().length > 500) {
    //   setposterror("Description Too Long");
    // } else if (enteredtitle.trim().length > 50) {
    //   settitleerror("Title Too Long");
    // } else {
    //   props.onAddblog(enteredpost, enteredtitle);
    //   setenteredpost("");
    //   setenteredtitle("");
    //   Router.push("/post")
    // }
  }

  return (
    <Card>
      <CardHeader title='User Details' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={handlesubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                defaultValue={enteredfirstname}
                required
                fullWidth
                label='First Name'
                placeholder='Ajay'
                onChange={firstnamehandler}
                value={enteredfirstname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Last Name'
                placeholder='Jadon'
                onChange={lastnamehandler}
                defaultValue={enteredlastname}
                value={enteredlastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type='email'
                label='Email'
                placeholder='ajayjadon@gmail.com'
                helperText='You can use letters, numbers & periods'
                onChange={emailhandler}
                defaultValue={enteredemail}
                value={enteredemail}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Contact Number'
                placeholder='9123456789'
                type='number'
                onChange={numberhandler}
                helperText='You can use only numbers'
              />
            </Grid> */}

            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button type='submit' variant='contained' size='large'>
                  Edit User
                </Button>
                <Button size='large' color='secondary' variant='outlined' onClick={cancelHandler}>
                  Back
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}></Grid>
      </CardContent>
    </Card>
  )
}

export default Userform
