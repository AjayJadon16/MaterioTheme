// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { Alert } from '@mui/material'
import { Dialog } from '@mui/material'
import Link from 'next/link'

const CardVerticalRatings = () => {
  const router = useRouter()
  const [fetchedposts, setFetchedposts] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    async function displayPost() {
      return fetch('https://gorest.co.in/public/v2/posts', {
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
  }, [])
  console.log(fetchedposts)

  async function deleteUser() {
    return fetch('https://reqres.in/api/users/1402', {
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
    alert('Post Deleted Sucessfully')
    setOpen(!open)
  }

  const cardStyle = {
    display: 'block',
    transitionDuration: '0.3s',
    height: '28vw'
  }

  return (
    <Grid container spacing={6}>
      {fetchedposts.map(fetchedpost => (
        <Grid item xs={12} sm={6} md={4}>
          <Card style={cardStyle}>
            <CardHeader title={fetchedpost.title} />
            <CardContent>
              <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
                {fetchedpost.body}
              </Typography>
            </CardContent>
            <CardActions className='card-action-dense'>
              {/* <Button
                variant='contained'
                size='small'
                onClick={event => {
                  event.preventDefault()
                  router.push({
                    pathname: '/post/[pid]',
                    query: { pid: fetchedpost.id }
                  })
                }}
              >
                Edit
              </Button> */}

              <Link href={`/post/${fetchedpost.id}`}>
                <Button variant='contained' size='small'>
                  Edit
                </Button>
              </Link>

              <Button variant='secondary' size='small' onClick={deluser}>
                Delete
              </Button>

              {/* <Dialog open={open} onClose={deluser} fullScreen= {false}>
            <Alert severity="success">Post Deleted Sucessfully!</Alert>
            </Dialog> */}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
export default CardVerticalRatings
