import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Avatar,
  Chip,
  ThemeProvider,
  Collapse,
  Box,
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdPhone } from 'react-icons/md';
import { createTheme } from '@mui/material/styles';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Postify = ({ title, imageURL, userName, description, price, isUser, id }) => {
  const [sellerInfo, setSellerInfo] = useState(null);
  console.log(title, isUser);
  const navigate = useNavigate();
  const deleteRequest = async () => {
    const res = await axios.delete(`https://art-gallery-api-g2ca.onrender.com/api/post/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleDelete = (e) => {
    deleteRequest().then((data) => alert("Post deleted Successfully!")).then(() => navigate('/')).then(() => navigate('/UserPosts'));
  }
  const handleEdit = (e) => {
    navigate(`/myPosts/${id}`);
  }
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      })
        .then(() => console.log('Successfully shared'))
        .catch(error => console.log('Error sharing', error));
    } else {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`;
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + window.location.href)}`;

    window.open(twitterUrl);
    window.open(facebookUrl);
    window.open(whatsappUrl);
    }
  };
  const fetchSellerInfo = async () => {
    const res = await axios.get(`https://art-gallery-api-g2ca.onrender.com/api/user/${userName}`).catch(err => console.log(err));
    const data = await res.data;
    setSellerInfo(data);
  };

  const onChipClick = () => {
    fetchSellerInfo();
  };


  return (
    <>
    <div>
      <Card  sx={{
      display: 'column',
      margin: 'auto',
      width: '300px',
      height: '5rm',
      gap: '30rm',
      mt: 2,
      padding: 1,
      ':hover': { boxShadow: '5px 5px 5px #ccc' },
      '@media screen and (min-width: 768px)': {
        display: 'flex-row',
        width: '400px',  // Increase width at media query
        height: '10rm',  // Increase height at media query
      },
    }}>
        {isUser && (
          <Box sx={{ 
        display: 'flex', 
    }}>
          <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><FilterDramaIcon color="inhert"/>
          </IconButton>
          <IconButton onClick={handleDelete}><DeleteForeverIcon color="warning"/></IconButton>
          </Box>
          )}
          <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{userName}</Avatar>}
          title={title}
          subheader={new Date().toLocaleDateString('en-KE', {timeZone: 'Africa/Nairobi', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).replace('PM', 'pm').replace('AM', 'am')}
        />
        <CardMedia
          component="img"
          height="300"
          image={imageURL}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <b>{userName}</b>:
          </Typography>
          <div
            style={{
              wordWrap: 'break-word',
              overflow: 'hidden',
              maxWidth: '600px',
            }}
          >
            <Typography>$: <b>{price}</b></Typography>
          </div>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <IconButton><AddShoppingCartIcon/></IconButton>
            <Typography paragraph>{ description && description }</Typography>
          </CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" />
          <CardContent>
            {sellerInfo && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {sellerInfo.name}: {sellerInfo.phone}
            </Typography>
          </CardContent>
            
            )}
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
            aria-label="share"
            onClick={handleShare}
          >
            <ShareIcon />
          </IconButton>
            <Stack spacing={2}>
            <ThemeProvider  theme={theme} onClick={ onChipClick }>
              <Chip icon={<MdPhone />} label="Call me" />
              <Button variant="outlined" onClick="/Home">ORDER NOW</Button>
            </ThemeProvider>
            </Stack>
          </CardContent>
          <IconButton
            aria-expanded={expanded}
            aria-label="show more"
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
            <Typography>More</Typography>
          </IconButton>
        </CardActions>
        
      </Card>
    </div>
    </>
  );
};

export default Postify;
