import styled from "styled-components";

export const StyledBotNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0.25rem;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: black;
  border-radius: 5px;
  border: none;
  z-index: 1000;

  p{
    color: white;
    margin-top: 0.2rem;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: black;
  border-radius: 5px;
  border: none;
  z-index: 1000;
`

// Shared media query styles
const mobileMediaQuery = `
  @media (max-width: 500px){
    /* Smartphone display */
    margin: 0;
    p {
      font-size: 12px;
    }
  }

  @media (min-width: 501px){
    margin: 0.2rem;
  }
`;

// StyledIcon and StyledConnect combined style
export const SharedIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  margin: 0.2rem;
  border: 1px solid white;
  border-radius: 50%;
  padding: 0.3rem;

  ${mobileMediaQuery}
`;

// Updated StyledConnect using SharedIcon
export const StyledConnect = styled.div`
  display: flex;
  flex-direction: row;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: white;
    margin: 0.3rem;
    font-weight: 500;
    font-size: 18px;

    ${mobileMediaQuery}
  }
`;

// Updated LogoNavbar using SharedIcon
export const LogoNavbar = styled.div`
  margin: 0.2rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    height: 100%;
    width: 100%;
    max-width: 50px;
    max-height: 50px;
    margin: 0.2rem;

    ${mobileMediaQuery}
  }

  span {
    font-size: 24px;
    font-weight: 600;
    margin-left: 0.5rem;
    color: white;

    ${mobileMediaQuery}
  }
`;

export const LinkNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 1rem;
  padding: 0 0.2rem;

  a {
    padding: 0 0.5rem;
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin: 0 1rem;
    cursor: pointer;
  }

  /* Media query for smaller screens */
  @media screen and (max-width: 555px) {
    display: none;
  }
`;
