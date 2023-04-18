import styled from '@emotion/styled'
export const Container = styled.div`

  margin: 120px auto 0;
  padding: 0 20px;
  display: grid;
  max-width: 1440px;
  overflow: hidden;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 1fr repeat(3, 400px) 1fr;
  gap: 20px;
  color: var(--black);

  .firstItem {
    margin: 0 auto;
    background-color: var(--light-gray);
    border-radius: 25px;
    max-width: 400px;
    height: 180px;
    grid-column: 1/-1;
    grid-row: 2;
    
    img{
      width: inherit;
    }
  }

  .secondItem {
    margin: 0 auto;
    background-color: var(--light-gray);
    border-radius: 25px;
    max-width: 400px;
    height: 180px;
    grid-column: 1/-1;
    grid-row: 3;

    
    img{
      width: inherit;
    }
  }

  .thirdItem {
    margin: 0 auto;
    background-color: var(--light-gray);
    border-radius: 25px;
    max-width: 400px;
    height: 180px;
    grid-column: 1/-1;
    grid-row: 4;
    
    img{
      width: inherit;
    }
  }

  @media (min-width: 768px) {
    padding: 0 40px;
    grid-template-rows: 1fr 1fr 400px 400px;

    .firstItem {
      grid-column: 1/5;
      grid-row: 3;
      width: inherit;
      border-radius: 0;
      height: inherit;
      background-color: transparent;
    }

    .secondItem {
      grid-column: 9/-1;
      grid-row: 3;
      width: inherit;
      border-radius: 0;
      height: inherit;
      background-color: transparent;
    }

    .thirdItem {
      margin: 0 auto;
      width: 400px;
      grid-column: 1/-1;
      grid-row: 4;
      border-radius: 0;
      height: inherit;
      background-color: transparent;
    }
  };

  @media (min-width: 992px) {
    padding: 0 69px;
    grid-template-rows: 1fr 1fr 400px;

    .firstItem {
      grid-column: 1/5;
      grid-row: 3;
      background-color: transparent;
      border-radius: 0;
      width: inherit;
      height: inherit;
    }

    .secondItem {
      grid-column: 6/10;
      grid-row: 3;
      background-color: transparent;
      border-radius: 0;
      width: inherit;
      height: inherit;
    }

    .thirdItem {
      grid-column: 11/-1;
      grid-row: 3;
      background-color: transparent;
      border-radius: 0;
      width: inherit;
      height: inherit;
    }
  }
  @media (min-width: 1200px) {
    grid-template-rows: repeat(4, 1fr);
    gap: 0;
    .firstItem {
      grid-column: 5/8;
      grid-row: 1/-1;
    }

    .secondItem {
      grid-column: 9/12;
      grid-row: 1/-1;
    }

    .thirdItem {
      grid-column: 13/15;
      grid-row: 1/-1;
    }
  }
`

export const Button = styled.button`
  padding: 15px 15px 13px;
  border: none;
  outline: none;
  width: max-content;
  font-size: 18px;
  background-color: transparent;
  border-left: 1px solid var(--dark-green);
  color: var(--green);
  
  &&:hover{
    padding-left: 18px;
    padding-right: 12px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: max-content;
  border: 1px solid var(--dark-green);
  border-radius: 6px;
  overflow: hidden;
  color: var(--green);
  margin: 25px auto;
  grid-column: 1/-1;
  grid-row: 5;
  
  @media (min-width: 768px) {
    margin: 0 0 0 auto;
    grid-column: 1/-1;
    grid-row: 2;
  };
  @media (min-width: 1200px) {
    margin: 25px 0 0 0;
    grid-row: 3;
    grid-column: 1/5;
  };
`

export const TextContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
  grid-row: 1;
  
  @media (min-width: 768px) {
    text-align: start;
    justify-content: start;
    align-items: start;
    grid-column: 1/-1;
    grid-row: 1;
  };
  @media (min-width: 1200px) {
    grid-column: 1/6;
    grid-row: 2;
  };
`

export const Content = styled.div`
  position: absolute;
  width: max-content;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
  bottom: 20px;
  left: 13px;
  @media (min-width: 768px) {
    width: min-content;
    left: 30px;
  };
  @media (min-width: 1250px) {
    width: max-content;
    bottom: 50px;
    left: 13px;
  };
`

export const Items = styled.div`
  position: relative;
  z-index: 1;
  grid-row: 1/5;
  
  &&:hover{
    img{
      left: 75px;
      transition: all 0.3s ease;
    }
    div{
      left: -13px;
      opacity: 1;
      transition: all 0.3s ease;

      @media (min-width: 768px) {
        width: min-content;
        left: 30px;
      };
      @media (min-width: 1250px) {
        left: 13px;
      };
      @media (min-width: 1330px) {
        width: max-content;
        bottom: 50px;
        left: -13px;
      };
    }
  }
  

  img{
    width: fit-content;
    position: relative;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
  }
`