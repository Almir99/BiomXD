import styled from '@emotion/styled'
export const Container = styled.div`
  padding: 0 69px;
  margin: 90px auto;
  display: grid;
  max-width: 1440px;
  grid-template-columns: repeat(17, 1fr);
  grid-template-rows: repeat(13, 1fr);
  color: var(--slightly-less-white);

  @media (max-width: 1200px) {
    padding-left: 0;
  };
`
export const ImageContainerOne = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1/13;
  grid-column: 1/6;

  @media (max-width: 1200px) {
    display: none;
  }

`
export const ImageContainerTwo = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  @media (min-width: 992px) {
    display: inline;
    grid-row: 7/-1;
    grid-column: 11/14;
  };
  @media (min-width: 1200px) {
    grid-row: 7/-1;
    grid-column: 5/8;
  };
`
export const Body = styled.div`
  display: flex;
  font-size: 18px;
  padding: 20px;
  font-weight: 300;
  grid-row: 2/14;
  grid-column: 9/-1;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: inherit;
  color: var(--dark-green);

  @media (max-width: 1200px) {

    grid-column: 1/-1;
    padding-left: 89px;
    p{
      padding: 0;
    }
  };
`
export const EmptyContainer =  styled.div`
  background-color: var(--light-green);
  grid-column: 5/-1;
  grid-row: 2/13;
  z-index: -1;
  border-radius: 12px;

  @media (max-width: 1200px) {
    grid-column: 1/-1;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  };
`
export const Button = styled.button`
  padding: 16px 40px;
  border: none;
  outline: none;
  margin: 0 auto;
  cursor: pointer;
  width: max-content;
  text-transform: uppercase;
  letter-spacing: 1.95px;
  border-radius: 6px;
  background-color: var(--green);
  color: var(--slightly-less-white);

  &&:hover{
    background-color: var(--dark-green);
  }
  
  @media (min-width: 992px) {
    margin: 0;
  };
  
  @media (min-width: 1200px) {
    margin: 0 0 0 40px;
  };
`

export const Content = styled.div`
  margin: 40px 0 45px 40px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: var(--black);

  @media (max-width: 1200px) {
    margin: 40px 0 45px;
  };
`

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  
  img{
    width: fit-content;
  }
`