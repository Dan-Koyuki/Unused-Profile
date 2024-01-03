import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
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
    }

    @media (min-width: 501px){
      font-size: 24px;
      font-weight: 600;
      margin-left: 0.5rem;
    }
  }

`

export const LinkNavbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.3rem;
  padding: 0 0.2rem;

  a {
    padding: 0 0.5rem;
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }

  /* Media query for smaller screens */
  @media screen and (max-width: 555px) {
    display: none;
  }
`;
