import React from 'react';
import { StyledBotNav, StyledConnect, StyledIcon } from '../../styles/BottomNavbar';
import { Link } from 'react-router-dom';
import { FaDiscord, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'


const BottomNavbar = () => {
  return (
    <StyledBotNav>
      <p>Contact Me by</p>
      <StyledConnect>
        <Link to={'https://wa.me/6282116424576'}>
          <StyledIcon>
            <IoLogoWhatsapp />
          </StyledIcon>
        </Link>
        <Link to={'https://www.facebook.com/profile.php?id=100008502968364'}>
          <StyledIcon>
            <FaFacebook />
          </StyledIcon>
        </Link>
        <Link to={'https://discord.gg/avGSJe448r'}>
          <StyledIcon>
            <FaDiscord />
          </StyledIcon>
        </Link>
        <Link to={'https://github.com/Dan-Koyuki'}>
          <StyledIcon>
            <FaGithub />
          </StyledIcon>
        </Link>
        <Link to={'mailto:dankoyuki398@gmail.com'}>
          <StyledIcon>
            <SiGmail />
          </StyledIcon>
        </Link>
      </StyledConnect>
    </StyledBotNav>
  );
}
 
export default BottomNavbar;