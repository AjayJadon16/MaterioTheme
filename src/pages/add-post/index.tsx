// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


// ** Demo Components Imports
import CardUser from 'src/views/cards/CardUser'
import CardImgTop from 'src/views/cards/CardImgTop'
import CardMobile from 'src/views/cards/CardMobile'
import CardSupport from 'src/views/cards/CardSupport'
import CardTwitter from 'src/views/cards/CardTwitter'
import CardFacebook from 'src/views/cards/CardFacebook'
import CardLinkedIn from 'src/views/cards/CardLinkedIn'
import CardAppleWatch from 'src/views/cards/CardAppleWatch'
import CardMembership from 'src/views/cards/CardMembership'
import CardInfluencer from 'src/views/cards/CardInfluencer'
import CardNavigation from 'src/views/cards/CardNavigation'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import CardVerticalRatings from 'src/views/cards/CardVerticalRatings'
import CardNavigationCenter from 'src/views/cards/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/cards/CardHorizontalRatings'
import { useState } from 'react'

const CardBasic = () => {
  const [bloglist, setbloglist] = useState([])

  const addblog = (Postname:any, Titlename:any) => {
    setbloglist(prevBlogList => {
      return [
        ...prevBlogList,
        { titlename: Titlename, id: Math.random().toString() },
        { postname: Postname, id: Math.random().toString() }
      ]
    })
  }
  const DisplayPost = (props) => {
    return (
      <div>
        <Box
          sx={{
            width: 300,
            height: 300,
          }}
        >
          {props.item.map((item) => (
            <div>
            <p key={item.id}><h2>{item.titlename}</h2></p>
            <p key={item.id}>{item.postname}</p>
            </div>
          ))}
        </Box>
      </div>
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ paddingBottom: 4 }}>
        <Typography variant='h3'>Posts</Typography>
      </Grid>
      <Grid item xs={12} sm={20} md={20}>
        <CardImgTop onAddblog={addblog} />
        
      </Grid>
      <Grid item xs={12} sm={20} md={20}>
        <DisplayPost item = {bloglist}/>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4}>
        <CardSupport />
      </Grid> */}
      
      
      {/*<Grid item xs={12} sm={6} md={4}>
        <CardUser />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardWithCollapse />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardMobile />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CardHorizontalRatings />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardAppleWatch />
      </Grid>
      <Grid item xs={12} md={8}>
        <CardMembership />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardVerticalRatings />
      </Grid>
      
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h5'>Navigation Cards</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigation />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardNavigationCenter />
      </Grid>
      <Grid item xs={12} sx={{ pb: 4, pt: theme => `${theme.spacing(17.5)} !important` }}>
        <Typography variant='h5'>Solid Cards</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid> */}
    </Grid>
  )
}

export default CardBasic
