import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PostComp from '../../pages/Post';
import PostDetails from '../../pages/PostDetails';
import UserPosts from '../../pages/UserPosts';
import { Button } from '@mui/material';
import { AppBar } from '@mui/material';
import AddPost from '../../pages/AddPost';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../AuthContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) { 
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication state
    setIsAuthenticated(false);
    
    // Redirect the user to the login page
    navigate('/Signin');
  };

  return (
    <>
      <AppBar></AppBar>
      <Box marginLeft="auto" marginRight="auto">
        <Box display="flex" backgroudColor="green">
          <Tabs textColor="inherit" value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All Products" {...a11yProps(0)} />
            <Tab label="Udate My Products" {...a11yProps(1)} />
            <Tab label="My Products" {...a11yProps(2)} />
            <Tab label="Add Products" {...a11yProps(3)} />
            <Box marginRight="auto">
              <Button variant='contained' color='warning' borderradius="20px" onClick={handleLogout}>
                Log out
              </Button>
            </Box>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <PostComp/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PostDetails/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <UserPosts/>
        </TabPanel>
        <TabPanel value={value} index={3}>
        <AddPost/>
        </TabPanel>
      </Box>
    </>
  );
}
