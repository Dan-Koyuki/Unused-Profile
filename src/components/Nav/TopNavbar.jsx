import React from "react";
import { LinkNavbar, LogoNavbar, StyledNavbar } from "../../styles/TopNavbar";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoNavbar>
        <a href="#">
          <img src="https://wallpapercave.com/uwp/uwp4090068.png" alt="Logo" />
          <span>Dan Koyuki</span>
        </a>
      </LogoNavbar>
      <LinkNavbar>
        <Link
          to="#"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          About Me
        </Link>
        <Link
          to="#"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          Skill
        </Link>
        <Link
          to="#"
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
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          Resume
        </Link>
      </LinkNavbar>
    </StyledNavbar>
  );
};

export default Navbar;
