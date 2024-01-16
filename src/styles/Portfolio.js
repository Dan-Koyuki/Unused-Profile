import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  margin-bottom: 0.4rem;
  align-items: center;
  justify-content: center;

  h2{
    text-align: center;
    margin: 0.5rem 0;
  }

  h3{
    text-align: center;
    margin-top: 1.5rem;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img{
    width: 100%;
    max-width: 850px; /* Limit image width */
    height: auto;
  }
`

export const PortfolioTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 4px grey ridge;
  margin: 0.4rem 1rem;
`

export const PortfolioButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  color: black;
  padding: 0.2rem;
  /* Add other styles as needed */

  /* Conditional styles for active tab */
  ${props =>
    props.active &&
    `
    color: blue; /* Change color for active tab */
    font-weight: bold;
    border-bottom: 5px ridge black;
    border-right: 5px ridge black;
    /* Add other styles for active tab */
  `}
`