import styled from "styled-components";

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

export const LogoNavbar = styled.div`
  margin: 0.2rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  a{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
  }

  img{
    height: 100%;
    width: 100%;

    @media (max-width: 500px){
      /* Smartphone display */
      margin: 0;
      max-width: 50px;
      max-height: 50px;
    }

    @media (min-width: 501px){
      max-width: 50px;
      max-height: 50px;
      margin: 0.2rem;
    }
  }

  span{
    @media (max-width: 500px){
      /* Smartphone display */
      font-size: 20px;
      font-weight: 500;
      margin-left: 0.5rem;
      color: white;
    }

    @media (min-width: 501px){
      font-size: 24px;
      font-weight: 600;
      margin-left: 0.5rem;
      color: white;
    }
  }

`

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
