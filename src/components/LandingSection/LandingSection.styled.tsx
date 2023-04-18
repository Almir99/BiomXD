import styled from '@emotion/styled'
export const Container = styled.div`
  padding: 0 25px;
  margin: 0 auto;
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(13, 1fr);
  color: var(--slightly-less-white);
  

  .image {
    width: inherit;
    height: inherit;
    grid-row: 1;
    grid-column: 1/-1;
    background-image: url("./assets/images/LandingSection/Kitchen_3.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 15px;

  }

  @media (max-width: 992px) {
    position: relative;
    overflow: hidden;
  }
`
export const Body = styled.div`
  display: flex;
  grid-row: 1;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: inherit;
  text-shadow: 1px 1px black;
  grid-column: 2/13;
  align-items: center;
  text-align: center;
  padding: 79px 0 106px;

  @media (min-width: 992px) {
    text-shadow: none;
    text-align: left;
    align-items: start;
    grid-column: 1/7;
    padding: 119px 30px 146px 45px;
  }
  @media (min-width: 1200px) {
    grid-column: 1/6;
    padding: 159px 0 186px 85px;
  }
`

export const Button = styled.button`
  padding: 16px 40px;
  cursor: pointer;
  border: none;
  outline: none;
  width: max-content;
  text-transform: uppercase;
  letter-spacing: 1.95px;
  border-radius: 6px;
  background-color: var(--white);
  color: var(--green);
  
  &&:hover{
    background-color: var(--slightly-less-white);
  }
`

