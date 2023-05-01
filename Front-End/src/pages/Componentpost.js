import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, Avatar,Typography} from '@mui/material';
import { red } from '@mui/material/colors';

const postify = ({title, descripton, imageURL, userName, price}) => {
  return (
    <div>
      <Card sx={{ display: "grid", width: "85%", margin:'auto', mt:2, padding: 2, boxShadow: "5px 5px 10px #ccc", ":hover":{
        boxShadow: "10px 10px 20px #ccc",
      }}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {userName}
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component={imageURL}
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {descripton}:
        </Typography>
      </CardContent>      
        <CardContent>
          <Typography>
          Kshs: {price} 
          </Typography>
          <Typography paragraph>
          </Typography>
        </CardContent>
    </Card>
    </div>
  )
}

export default postify;
