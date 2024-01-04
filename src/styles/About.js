import styled from 'styled-components'

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledTitle = styled.div`
  background-color: black;
  border-radius: 10px;
  margin: 0 0.7rem;
  display: flex;
  justify-content: center;

  h2{
    color: white;
  }
`

export const StyledQuote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 10px black ridge;
  margin: 0.5rem auto;
  border-radius: 10px;
  width: fit-content;
  padding: 0.5rem;
  h3{
    text-align: center;
  }
`

export const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center ;
  margin: 0.5rem;
  p{
    font-size: 20px;
    text-align: center;
  }
`