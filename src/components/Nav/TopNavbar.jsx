import React from "react";
import { Link } from "react-scroll";
import { Link as Path} from 'react-router-dom';
import { LogoNavbar, StyledNavbar, LinkNavbar } from "../../styles/Navbar";

const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoNavbar>
        <Link
          to="intro-section"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          <img src="https://wallpapercave.com/uwp/uwp4090068.png" alt="Logo" />
          <span>Dan Koyuki</span>
        </Link>
      </LogoNavbar>
      <LinkNavbar>
        <Link
          to="about-section"
          smooth={true}
          duration={1200}
          spy={true}
          exact="true"
          offset={-65}
        >
          About Me
        </Link>
        <Link
          to="skill-section"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          Skill
        </Link>
        <Link
          to="project-section"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          Portfolio
        </Link>
        <Path to="/resume">Resume</Path>
        <Link to="#">Blog</Link>
      </LinkNavbar>
    </StyledNavbar>
  );
};

export default Navbar;
