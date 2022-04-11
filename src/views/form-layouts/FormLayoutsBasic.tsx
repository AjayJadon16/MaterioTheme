// ** React Imports
import { ChangeEvent, MouseEvent, useEffect, useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import Router from 'next/router'
// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

interface State {
  password: string
  showPassword: boolean
}

const FormLayoutsBasic = (uid) => {
  const [enteredfirstname, setenteredfirstname] = useState('')
  const [enteredlastname, setenteredlastname] = useState('')
  const [enteredemail, setenteredemail] = useState('')
  const [enterednumber, setenterednumber] = useState('')
  const [fetchedusers, setFetchedusers] = useState([])
  // console.log(uid)
  if(uid){
    useEffect(() => {
      async function displayUser() {
        return fetch('https://reqres.in/api/users/2', {
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

  }
  console.log(fetchedusers)

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

  const handlesubmit = (event: any) => {
    event.preventDefault()
    const user = [enteredfirstname, enteredlastname, enteredemail, enterednumber]
    console.log(user)
    setenteredfirstname('')
    setenteredlastname('')
    setenteredemail('')
    setenterednumber('')
    Router.push('/user-list')

    const cancelHandler = (event: any) => {
      Router.push('/user-list')
    }

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
                value={enteredemail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label='Contact Number'
                placeholder='9123456789'
                type='number'
                onChange={numberhandler}
                helperText='You can use only numbers'
                value={enterednumber}
              />
            </Grid>

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
                  Add User
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <Button
            type='submit'
            variant='contained'
            size='large'
            sx={{ mt: 3, mb: 3 }}
            // onClick={cancelHandler}
          >
            Cancel
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic
