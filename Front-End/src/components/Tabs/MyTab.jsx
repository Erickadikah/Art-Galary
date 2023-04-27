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

import { Link } from 'react-router-dom';

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

  return (
    <>
    <Box marginLeft="auto" marginRight="auto">
    <Box >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="MyProducts" {...a11yProps(0)} />
        <Tab label="All Products" {...a11yProps(1)} />
        <Tab label="Add Products" {...a11yProps(2)} />
        <Tab label="Add Products" {...a11yProps(2)} />
        <Tab label="Add Products" {...a11yProps(2)} />
        <Box   marginRight="auto" >
            <Button variant='contained' color='warning'>
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
    </Box>
    </>
  );
}
