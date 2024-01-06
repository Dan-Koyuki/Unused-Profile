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
  color: black;
  /* Add other styles as needed */

  /* Conditional styles for active tab */
  ${props =>
    props.active &&
    `
    color: blue; /* Change color for active tab */
    font-weight: bold;
    /* Add other styles for active tab */
  `}
`

export const Container = styled.div`
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem;
  z-index: 0;
  margin-bottom: 0.4rem;

  img{
    height: 100%;
    width: 100%;
    max-width: 275px;
    max-height: 555px;
    margin: 0 1rem;
  }
`