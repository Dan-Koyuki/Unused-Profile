import React from 'react';
import { LogoNavbar, NavbarStyled } from '../../styles/Navbar';
 const Navbar = () => {
  return (
    <NavbarStyled>
      <LogoNavbar>
        <img src='https://wallpapercave.com/uwp/uwp4090068.png' alt='Logo' />
        <h2>Dan Koyuki</h2>
      </LogoNavbar>
      <div>
        <h2>Test2</h2>
      </div>
    </NavbarStyled>
  );
 }
  
 export default Navbar;