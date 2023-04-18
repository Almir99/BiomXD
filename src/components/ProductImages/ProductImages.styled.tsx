import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 50px auto 0;
  display: grid;
  overflow:  hidden;
  max-width: 1440px;
  align-items: center;
  grid-template-columns: repeat(3,1fr);
  color: var(--white);
`

export const TextContainer = styled.div`
  display: flex;
  text-shadow: 1px 1px black;
  justify-content: center;
  flex-direction: column;
  grid-row: 1;
  grid-column: 2;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    scale: 0.9;
  }
`
export const SlideShow = styled.div`
  display: grid;
  width: inherit;
  overflow: auto;
  grid-row: 1;
  grid-column: 1/-1;

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

export const SlideShowContent = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  gap: 20px;
  grid-row: 1;
  grid-column: 1/-1;
`


export const Content = styled.div`
  position: absolute;
  bottom: 22px;
  display: flex;
  justify-content: center;
  width: inherit;
  opacity: 0;
  transition: all 0.5s ease-out;
  z-index: 1;
  color: var(--slightly-less-white);
  
`

export const Items = styled.div`
  position: relative;
  width: 535px;
  height: 415px;
  border-radius: 14px;
  overflow: hidden;
  
  &&:hover{
    img{
      scale: 1.2;
      transition: all 0.5s ease-out;
    }
    div{
      opacity: 1;
      transition: all 0.5s ease-out;
    }
  }
  

  img{
    border-radius: 14px;
    width: fit-content;
    position: relative;
    top: 0;
    left: 0;
    transition: all 0.5s ease-out;
  }
`