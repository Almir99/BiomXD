import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 80px auto 0;
  display: grid;
  overflow:  hidden;
  max-width: 1440px;
  align-items: center;
  color: var(--dark-green);
  
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
`
export const Button = styled.button`
  padding: 15px 15px 13px;
  border: none;
  outline: none;
  cursor: pointer;
  width: max-content;
  font-size: 22px;
  background-color: transparent;
  border-left: 1px solid var(--dark-green);
  color: var(--dark-green);

  &&:hover{
    background-color: var(--green);
    color: var(--white);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  grid-row: 3;
  margin: 40px auto 0;
  grid-column: 1;
  align-items: center;
  width: fit-content;
  height: max-content;
  border: 1px solid var(--dark-green);
  border-radius: 6px;
  overflow: hidden;
  color: var(--dark-green);
`

export const SlideShow = styled.div`
  display: flex;
  width: fit-content;
  gap: 30px;
  grid-row: 2;
  grid-column: 1;
`


export const Content = styled.div`
  display: grid;
  width: inherit;
  overflow: auto;
  pointer-events: none;
  
  /* width */
  &&::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  /* Track */
  &&::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &&::-webkit-scrollbar-thumb {
    background: transparent;
  }

  /* Handle on hover */
  &&::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }
`

export const Items = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;
  
  &&:nth-child(even){
    margin-top: 20px;
    width: 270px;
    height: 270px;
  }
  

  img{
    width: fit-content;
    position: relative;
    top: 0;
    left: 0;
  }
`