import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  width: 100%;

  @media (max-width: 500px){
    /* Smartphone display */
    height: 75px;
    border: 1px solid blue;
  }

  @media (min-width: 501px){
    border: 1px solid black;
    height: 50px;
  }
`

export const LogoNavbar = styled.div`
  margin: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  img{
    height: 100%;
    width: 100%;

    @media (max-width: 500px){
      /* Smartphone display */
      max-width: 60px;
      max-height: 60px;
    }

    @media (min-width: 501px){
      max-width: 50px;
      max-height: 50px;
  }
  }
`