import React from 'react';
import { Link } from 'react-router-dom';
import DyotaNavbar from '../Assets/DyotaNavbar.svg'

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>

      <ul className='nav-items'>
            <Link className='nav-item' to = '/'>Home</Link>
            <Link className='nav-item' to = '/about'>About</Link>
            <Link className='nav-item' to = ''>Services</Link>
            

            </ul>
      <Link to = '/' className='nav-logo' ><img src={DyotaNavbar}/></Link>

      <ul className='nav-items-2'>

            <Link className='nav-item' to = '/'>Careers</Link>
            <Link className='nav-item nav-btn' to = '/about'><a>Get Your Free Consultation</a></Link>

      </ul>
        
      </div>
    </div>
  );
}
