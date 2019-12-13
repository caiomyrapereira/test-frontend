import React from 'react';
import Logo from './logoCiclic.png';
import './style.css';

const Header =()=>(
       <header id="header">
        <img className='logo' src={Logo}  alt='logo' />
      </header>
);

export default Header;