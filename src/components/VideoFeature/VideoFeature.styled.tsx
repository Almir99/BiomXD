import styled from '@emotion/styled'
export const Container = styled.div`
  padding: 0 25px;
  margin: 0 auto;
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(14, 1fr);
  color: var(--slightly-less-white);
  border-radius: 14px;

  video {
    width: 100%;
    height: inherit;
    border-radius: 14px;
    grid-row: 1;
    grid-column: 1/-1;
  }

  @media (max-width: 768px) {
    position: relative;
    overflow: hidden;
    padding: 0;
    border-radius: 0;
    
    video{
      position: absolute;
      width: max-content;
      border-radius: 0;
      grid-row: 0;
      grid-column: 0;
    }
  };
`

export const EmptyContainer = styled.div`
  grid-row: 1;
  grid-column: 1/-1;
  background-color: var(--green);
  opacity: 0.35;
  border-radius: 14px;

  @media (max-width: 768px) {
      border-radius: 0;
  };
  
`

export const Body = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 4/12;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 80px 0;
  };
`

export const Button = styled.button`
  padding: 16px 40px;
  border: none;
  outline: none;
  width: max-content;
  margin-top: 24px;
  text-transform: uppercase;
  letter-spacing: 1.95px;
  border-radius: 6px;
  cursor: pointer;
  background-color: var(--white);
  color: var(--green);

  &&:hover{
    background-color: var(--slightly-less-white);
  }
`

