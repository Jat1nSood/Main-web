import React from 'react';
import { Link } from 'react-router-dom';
import DyotaNavbar from '../Assets/DyotaNavbar.svg'

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-flex'>
          <Link to = '/' className='nav-logo' ><img src={DyotaNavbar}/></Link>

          <ul className='nav-items'>
            <Link className='nav-item' to = '/'>Home</Link>
            <Link className='nav-item' to = '/about'>About</Link>
            <Link className='nav-item' to = ''>Services</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
