import React from 'react';
import './Landingpage.css';
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import {AppBar, Typography, Box, Tab, Tabs, Toolbar, Button} from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// import { FaBars } from 'react-icons/fa';

const Landingpage = () => {
  const [value, setValue] = useState();
  return (
    <>
    <AppBar style={{ background: '#101522'}}>
    <Toolbar>
    <Typography variant="contained" >Dashboard</Typography>
  <Box display="flex" marginRight={'auto'} marginLeft={'auto'} >
      <Tabs setColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
        <Tab LinkComponent={Link} to="/posts" label="All Products" />
        <Tab LinkComponent={Link} to="/UserPosts" label="My Products" />
        <Tab label="My Orders" />
        <Tab label="Add Product" />
      </Tabs>
    </Box>
    <Box>
    <Button variant="contained" LinkComponent={Link} to="/signin"
    style={{  marginRight: '10px', borderRadius: '10px'}}
    color="#01BF71">
    Log out
    </Button>
    </Box>
    </Toolbar>
    </AppBar>
    <div>
    <div className='my_buttons' >
  <div>
    <button Link to="/signsin">
    <AiOutlineShoppingCart style={{ fontSize: '2rem' }}/>
    </button>
    <p>Manage Orders</p>
    </div>
    <div>
    <button>
    <AiOutlinePlus style={{ fontSize: '2rem' }}/>
    </button>
    <p>Add Products</p>
    </div>
    <div>
    <button>
    <AiFillDollarCircle  style={{ fontSize: '2rem' }}/>
    </button>
    <p>Increase Sales</p>
    </div>
    <div>
    <button>
    <AiOutlineRise style={{ fontSize: '2rem' }}/>
    </button>
    <p> Your Growth</p>
    </div>
    </div>
  /</div> 
    </>

  );
  };
export default Landingpage;