import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  display: flex;
  flex-direction: row;
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