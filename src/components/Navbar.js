import React from 'react';
import { Link } from 'react-router-dom';
import DyotaNavbar from '../Assets/Dyota.svg'

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
      <Link to = '/' className='nav-logo' ><img src={DyotaNavbar}/></Link>

      <ul className='nav-items'>
            <Link className='nav-item' to = '/'>Home</Link>
            <Link className='nav-item' to = ''>About</Link>
            <Link className='nav-item' to = ''>Services</Link>
            

            </ul>

      <ul className='nav-items-2'>

            <Link className='nav-item nav-btn' to = ''><a >Contact Us</a></Link>

      </ul>
        
      </div>
    </div>
  );
}
