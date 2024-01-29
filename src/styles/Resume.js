import styled from 'styled-components';

export const ResumeBackground = styled.div`
  margin: 0;
  padding: 1rem 2rem;
  background-color: rgba(128, 128, 128, 0.5);
  height: 100vh;
  width: 100%;
  background-size: cover;
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  box-shadow: 5px 12px 10px rgba( 85, 85, 85, 0.8);
  background-color: white;
`

export const ResumeName = styled.h1`
  margin: 2rem 0rem 0rem 1rem;
  font-size: 40px;
  font-weight: 800;
`

export const ResumeTitle = styled.h1`
  color: gold;
  margin-left: 1rem;
`

export const ResumeContact = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem;
  margin-top: 0.2rem;
  border-bottom: 5px ridge black;
`

export const ContactItem = styled.p`
  flex-basis: calc(33.33% - 0rem); /* 33.33% to fit 3 items per row */
  margin-bottom: 0.5rem; /* Adjust as needed */
  font-size: 20px;
`

export const DetailsContainer = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 60% 39%; /* First column takes 65%, second takes 35% */
  grid-gap: 25px; /* Gap between grid items */
  max-width: 100%; /* Ensure the container doesn't exceed its parent's width */
  overflow: hidden; /* Hide overflowing content */
  box-sizing: border-box;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
  border-bottom: 7px black solid;
  white-space: pre-line;
  margin-bottom: 0.5rem;
`

export const ItemDescription = styled.p`
  max-width: 100%;
  margin-right: 0.5rem;
`;