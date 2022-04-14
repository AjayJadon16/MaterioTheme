// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useState,useEffect } from 'react'
import Router from 'next/router'

const CardPostForm = (props) => {

    const pid = props.post;
  // let navigate = useNavigate();
  const [enteredpost, setenteredpost] = useState('')
  const [enteredtitle, setenteredtitle] = useState('')
  const [posterror, setposterror] = useState('')
  const [titleerror, settitleerror] = useState('')
  const [fetchedposts, setFetchedposts] = useState([])
  const posthandler = (event: any) => {
    setenteredpost(event.target.value)
  }
  const titlehandler = (event: any) => {
    setenteredtitle(event.target.value)
  }

  const addposthandler = (event: any) => {
    event.preventDefault()
    setposterror('')
    settitleerror('')
    if (enteredtitle.trim().length < 1) {
      settitleerror('Empty Title')
    } else if (enteredpost.trim().length < 1) {
      setposterror('Empty Description')
    } else if (enteredpost.trim().length > 500) {
      setposterror('Description Too Long')
    } else if (enteredtitle.trim().length > 500) {
      settitleerror('Title Too Long')
    } else {
      props.onAddblog(enteredpost, enteredtitle)
      setenteredpost('')
      setenteredtitle('')
      Router.push('/posts')
    }
  }

  const cancelhandler = () => {
    Router.push('/posts')
  }

  useEffect(() => {
    async function displayPost() {
      return fetch(`https://gorest.co.in/public/v2/posts/${pid}`, {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      }).then(data => data.json())
    }

    const fetchusers = async () => {
      const posts = await displayPost()
      setFetchedposts(posts)
    }

    fetchusers()
  }, pid)
  console.log(fetchedposts)

  useEffect(() => {
    if (fetchedposts) {
      setenteredtitle(fetchedposts.title)
      setenteredpost(fetchedposts.body)
     
    }
  }, [fetchedposts])

  

  return (
    <Card>
      <CardMedia sx={{ height: '15rem' }} image='/images/cards/glass-house.png' />
      <CardContent>
        <form onSubmit={addposthandler}>
          <Typography variant='h6' sx={{ marginBottom: 2 }}>
            Enter Your Posts
          </Typography>
          <TextField
            id='title'
            placeholder='Title'
            name='title'
            margin='normal'
            fullWidth
            label='Title'
            type='text'
            onChange={titlehandler}
            value={enteredtitle}
            defaultValue={enteredtitle}
            required
          />
          {titleerror}

          <TextField
            placeholder='Description'
            id='description'
            name='description'
            margin='normal'
            fullWidth
            label='Description'
            multiline
            rows={6}
            type='text'
            onChange={posthandler}
            value={enteredpost}
            defaultValue={enteredpost}
            required
          />
          {posterror}
          

          <Button type='submit' variant='contained' sx={{ mt: 4, mb: 3 }} onSubmit={addposthandler}>
            Edit Post
          </Button>{"    "}
          <Button size='large' color='secondary' variant='outlined' onClick={cancelhandler}>
            Back
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default CardPostForm;