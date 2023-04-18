import styled from '@emotion/styled'
export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  max-height: 730px;
  max-width: 1440px;
  grid-template-columns: repeat(14, 1fr);
  color: var(--slightly-less-white);
  overflow: hidden;

  @media (max-width: 1200px) {
    grid-template-rows: repeat(14, 1fr);
  }
`
export const Body = styled.div`
  display: flex;
  padding-right: 140px;
  font-size: 18px;
  font-weight: 300;
  grid-row: 1;
  grid-column: 8/-1;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  z-index: 2;
  max-height: 730px;
  color: var(--dark-green);
  
  @media (max-width: 1200px) {
    grid-column: 1/-1;
    grid-row: 1/-1;
    padding: 103px 40px 84px;
    text-align: center;
    align-items: center;
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
  background-color: var(--green);
  color: var(--slightly-less-white);
  
  &&:hover{
    background-color: var(--dark-green);
  }
`

export const Content = styled.div`
  margin-top: 42px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  img{
    width: fit-content;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: inherit;
  grid-row: 1;
  grid-column: 1/-1;
  z-index: 1;
  pointer-events: none;
  
  img{
    width: fit-content;
  }

  @media (max-width: 1200px) {
    background-color: var(--light-green);
    border-radius: 20px;
    grid-column: 3/13;
    grid-row: 3/13;
    
    img{
      display: none;
    }
  }
`
export const TextWrapper = styled.div`
  grid-row: 1/-1;
  grid-column: 1/4;
  height: inherit;
  width: inherit;
  overflow: hidden;
  z-index: 1;
  color: var(--light-gray);
  writing-mode: tb;
  rotate: 180deg;
  
  p{
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    display: none;
  }

  /* width */
  div::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Track */
  div::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  div::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Handle on hover */
  div::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
  
  div{
    overflow: auto;
    height: inherit;
    width: inherit;
    white-space: nowrap;
    
    
    p{
      position: relative;
      top: 450px;
      left: 50px;
    }
  }
  @media (max-width: 1200px) {
    display: none;
  }
`