import React from "react";
import { LinkNavbar, LogoNavbar, StyledNavbar } from "../../styles/Navbar";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <StyledNavbar>
      <LogoNavbar>
        <img src="https://wallpapercave.com/uwp/uwp4090068.png" alt="Logo" />
        <span>Dan Koyuki</span>
      </LogoNavbar>
      <LinkNavbar>
        <Link
          to="description-section"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          Description
        </Link>
        <Link
          to="about-section"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          About
        </Link>
        <Link
          to="#"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          Project
        </Link>
        <Link
          to="#"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-65}
        >
          Contact
        </Link>
      </LinkNavbar>
    </StyledNavbar>
  );
};

export default Navbar;
