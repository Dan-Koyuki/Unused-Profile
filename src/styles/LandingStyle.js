import styled from 'styled-components';

export const LandPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 3rem;
  @media (min-width: 768px){
    // Progrise Key Design Access
    border: 1px solid black;
  }

  @media (max-width: 767px){
    // Wonder Ride Book Design Access
    border: 2px solid blue;
    height: 95%;
    max-height: 900px;
  }
`