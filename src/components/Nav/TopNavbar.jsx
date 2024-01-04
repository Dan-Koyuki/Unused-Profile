import React from "react";
import { LinkNavbar, LogoNavbar, StyledNavbar } from "../../styles/TopNavbar";
import { Link } from "react-scroll";

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
        <Link
          to="#"
        >
          Resume
        </Link>
      </LinkNavbar>
    </StyledNavbar>
  );
};

export default Navbar;
