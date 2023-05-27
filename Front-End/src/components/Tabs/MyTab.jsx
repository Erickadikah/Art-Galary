import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PostComp from '../../pages/Post';
// import PostDetails from '../../pages/PostDetails';
// import UserPosts from '../../pages/UserPosts';
import AddPost from '../../pages/AddPost';
// import Profile from '../../pages/Profile';

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

  // const { setIsAuthenticated } = useContext(AuthContext);
  // const navigate = useNavigate();
  // const [setIsLoggedIn] = useState(false);

  // const handleLogout = async () => {
  //   console.log('test logout');
  //   try {
  //     // Send a logout request to the server
  //     await axios.get('http://localhost:5000/api/user/logout');

  //     // Clear any user-related data
  //     setIsLoggedIn(false);
  //     localStorage.removeItem('user._id');
  //     localStorage.removeItem('authToken');
  //     navigate('/SignIn');

  //     // Redirect the user to the login page
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      
      <Box style={{marginLeft: 'auto',
       marginRight:'auto'
      }}>
        <Box display="flex" style={{
          // position: 'sticky',
          top:'0',
          zIndex: '10000',
          color: 'black',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@media screen and (max-width: 600px)': {
      width: '80%',  // Adjust the width for smaller screens
        },
        '@media screen and (min-width: 600px) and (max-width: 1200px)': {
          width: '60%',  // Adjust the width for medium screens
        },
        '@media screen and (min-width: 1201px)': {
          width: '30%',
        },
        }} adjust backgroudColor="green">
          <Tabs textColor="inherit" value={value} onChange={handleChange} aria-label="basic tabs example" style={{ marginRight:'auto', marginLeft:'auto'}}>
            <Tab label="All Products" {...a11yProps(0)} /> 
            <Tab label="Add Products" {...a11yProps(1)} />
            <Box marginRight="auto">
            </Box>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <PostComp/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AddPost/>
        </TabPanel>
      </Box>
    </>
  );
}