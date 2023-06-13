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
            <Link className='nav-item' to = '/about'>About Us</Link>
            <li className='nav-item' to = ''><a href='#services-section'>Services</a></li>
            

            </ul>

      <ul className='nav-items-2'>

            <div className='nav-item nav-btn' to = ''><a href='#form-section'>Contact Us</a></div>

      </ul>
        
      </div>
    </div>
  );
}
