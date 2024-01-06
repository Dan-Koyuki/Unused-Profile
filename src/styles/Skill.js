import styled from 'styled-components'

export const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 4px grey ridge;
  margin: 0.4rem 1rem;
`

export const TabButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
`

export const Container = styled.div`
  margin: 0 0.4rem;
  border: 1px black solid;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 0 0.5rem;
  
  /* Customizing scrollbar */
  &::-webkit-scrollbar {
    height: 8px; /* Adjust the height as needed */
    width: 8px; /* Adjust the width as needed */
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; /* Set the thumb color as transparent */
  }

  img{
    height: 100%;
    width: 100%;
    max-width: 275px;
    max-height: 555px;
    margin: 0 1rem;
  }
`