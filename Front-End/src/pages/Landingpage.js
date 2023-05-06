import React from 'react';
import './Landingpage.css';
// import { AiOutlinePlus } from "react-icons/ai";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { AiOutlineRise } from "react-icons/ai";
import {
  Box, 
  Toolbar, 
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BasicTabs from '../components/Tabs/MyTab';


const Landingpage = () => {
  const isLoggedin = useSelector((state) => state.isLoggedin);
  console.log(isLoggedin);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    
    <Toolbar>
    
 {
  // tabs section starts here
 }
<div style={{
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'sticky'
}}>
<BasicTabs/>
</div>
 {
  // End of tabs section TAB
 }

    <Box> {isLoggedin && (
    <Button variant="contained" LinkComponent={Link} to="/signin"
    style={{  marginRight: 'auto', borderRadius: '10px'}}
    color="#01BF71">
    Log out
    </Button> )}
    </Box>
    </Toolbar>
   {/* // <div>
    // <div className='my_buttons' >
    // <div>
    // <button Link to="/signsin">
    // <AiOutlineShoppingCart style={{ fontSize: '2rem' }}/>
    // </button>
    // <p>Manage Orders</p>
    // </div>
    // <div>
    // <button>
    // <AiOutlinePlus style={{ fontSize: '2rem' }}/>
    // </button>
    // <p>Add Products</p>
    // </div>
    // <div>
    // <button>
    // <AiFillDollarCircle  style={{ fontSize: '2rem' }}/>
    // </button>
    // <p>Increase Sales</p>
    // </div>
    // <div>
    // <button>
    // <AiOutlineRise style={{ fontSize: '2rem' }}/>
    // </button>
    // <p> Your Growth</p>
    // </div>
    // </div>  */}
    </>

  );
  };
export default Landingpage;