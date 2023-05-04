import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, CardActions, IconButton, Chip, Icon} from '@mui/material';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MdPhone } from 'react-icons/md';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Icon from '@material-ui/core/Icon';

const Postify = ({ title, description, imageURL, userName, price }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const theme = createTheme({
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            // Match 24px = 3 * 2 + 1.125 * 16
            boxSizing: 'content-box',
            padding: 3,
            fontSize: '1.125rem',
          },
        },
      },
    },
  });

  return (
    <div>
      <Card sx={{ display: 'grid', width: '85%', margin: 'auto', mt: 2, padding: 2, boxShadow: '5px 5px 10px #ccc', ':hover': { boxShadow: '10px 10px 20px #ccc' } }}>
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
          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" />
          <CardContent>
            <Typography>Price: {price}</Typography>
            <Typography paragraph>{title}</Typography>
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
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{description} 
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Postify;
