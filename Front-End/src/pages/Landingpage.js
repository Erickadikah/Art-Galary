import React from 'react';
import './Landingpage.css';
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";

import { FaBars } from 'react-icons/fa';

const Landingpage = () => {
  return (
    <div>
    <h1><FaBars /></h1>
    <div className='my_buttons'>
    <div>
    <button>
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
    <AiFillDollarCircle style={{ fontSize: '2rem' }}/>
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
    </div>

  );
  };
export default Landingpage;