import styled from "styled-components";

export const StyledBotNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: black;
  border-radius: 5px;
  border: none;

  p{
    color: white;
    margin-top: 0.2rem;
  }
`;

export const StyledConnect = styled.div`
  display: flex;
  flex-direction: row;

  a{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: white;
    margin: 0.3rem;
    font-weight: 500;
    font-size: 18px;
  }

`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  margin: 0.2rem;
  border: 1px solid white;
  border-radius: 50%;
  padding: 0.3rem;
`