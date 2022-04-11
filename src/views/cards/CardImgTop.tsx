// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { TextField } from '@mui/material'
import button from 'src/@core/theme/overrides/button'
import Button from "@mui/material/Button";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Router from 'next/router'

const CardImgTop = (props) => {
  // let navigate = useNavigate();
  const [enteredpost, setenteredpost] = useState("");
  const [enteredtitle, setenteredtitle] = useState("");
  const [posterror, setposterror] = useState("");
  const [titleerror, settitleerror] = useState("");
  const posthandler = (event:any) => {
    setenteredpost(event.target.value);
  };
  const titlehandler = (event:any) => {
    setenteredtitle(event.target.value);
  };

  // interface props {
  //   onAddblog:any
  // }
  

  const addposthandler = (event:any) => {
    event.preventDefault();
    
    setposterror("");
    settitleerror("");
    if (enteredtitle.trim().length < 1) {
      settitleerror("Empty Title");
    } else if (enteredpost.trim().length < 1) {
      setposterror("Empty Description");
    } else if (enteredpost.trim().length > 500) {
      setposterror("Description Too Long");
    } else if (enteredtitle.trim().length > 50) {
      settitleerror("Title Too Long");
    } else {
      props.onAddblog(enteredpost, enteredtitle);
      setenteredpost("");
      setenteredtitle("");
      Router.push("/post") 
    }     
  };

  const cancelhandler = ()=>{
    Router.push("/post")
  }



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
        />
        {posterror}
        {/* <Typography variant='body2'>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister
          predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </Typography> */}
        
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 4, mb: 3 }}
            onSubmit={addposthandler}
          >
            Add Post
          </Button>
          </form>
          <Button type="submit"
            variant="contained"
            onClick={cancelhandler}
            sx={{ mt: 3, mb: 3 }}>
            Cancel
          </Button>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
