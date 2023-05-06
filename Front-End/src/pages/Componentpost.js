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

const Postify = ({ title, imageURL, userName, description, price, isUser, id }) => {
  console.log(title, isUser);
  const navigate = useNavigate();
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

  return (
    <div>
      <Card sx={{ display: 'grid', margin: 'auto', width: '85%', mt: 2, padding: 2, ':hover': { boxShadow: '5px 5px 5px #ccc' } }}>
        {isUser && (
          <Box sx={{ display: 'flex'}}>
          <IconButton onClick={handleEdit} sx={{marginLeft:"auto"}}><FilterDramaIcon/>
          </IconButton>
          <IconButton onClick={handleEdit}><DeleteForeverIcon/></IconButton>
          </Box>
        )}
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{userName}</Avatar>}
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="180"
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
            {description && description}
          </div>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{ description && description }</Typography>
          </CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" />
          <CardContent>
            <Typography>$: <b>{price}</b></Typography>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ThemeProvider theme={theme}>
              <Chip icon={<MdPhone />} label="Call me" />
            </ThemeProvider>
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
  );
};

export default Postify;
