import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SharedIcon, StyledBotNav, StyledConnect } from '../../styles/Navbar';


const BottomNavbar = () => {
  return (
    <StyledBotNav>
      <p>Contact Me by</p>
      <StyledConnect>
        <Link to={'https://wa.me/6282116424576'}>
          <SharedIcon>
            <IoLogoWhatsapp />
          </SharedIcon>
        </Link>
        <Link to={'https://www.facebook.com/profile.php?id=100008502968364'}>
          <SharedIcon>
            <FaFacebook />
          </SharedIcon>
        </Link>
        <Link to={'https://discord.gg/avGSJe448r'}>
          <SharedIcon>
            <FaDiscord />
          </SharedIcon>
        </Link>
        <Link to={'https://github.com/Dan-Koyuki'}>
          <SharedIcon>
            <FaGithub />
          </SharedIcon>
        </Link>
        <Link to={'mailto:dankoyuki398@gmail.com'}>
          <SharedIcon>
            <SiGmail />
          </SharedIcon>
        </Link>
      </StyledConnect>
    </StyledBotNav>
  );
}
 
export default BottomNavbar;