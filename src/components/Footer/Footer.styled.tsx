import styled from '@emotion/styled'
export const Container = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 80px auto 0 auto;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(3,1fr);
  color: var(--slightly-less-white);

  
  @media (max-width: 992px) {
    grid-template-rows: repeat(2,1fr);
  };

`

export const Content = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  letter-spacing: 1.4px;
  font-size: 14px;
  border-top: 4px solid var(--dark-green);
  border-bottom: 4px solid var(--dark-green);
  grid-column: 1/-1;
  grid-row: 2/3;
  img{
    order: -1;
  }
  
  @media (min-width: 768px) {
    align-items: end;
    gap: 10px;
    grid-column: 10/-1;
    grid-row: 1/3;
    padding-right: 30px;
  };
  @media (min-width: 992px) {

    grid-column: 2/14;
    grid-row: 3;
    justify-content: center;
    gap: 65px;
    align-items: center;
    flex-direction: row;
    border-top: none;
    border-bottom: 2.5px solid var(--dark-green);
    padding: 50px 0;
    img{
      order: unset;
    }
  };
  
`

export const BottomContent = styled.div`
  display: flex;
  margin: 40px 0;
  grid-row: -1;
  grid-column: 2/-2;
  justify-content: space-between;
`
export const TextContent = styled.div`
  display: flex;
  gap: 5px;
  font-size: 15px;
  letter-spacing: 0.38px;

  @media (max-width: 575px) {
    flex-direction: column;
  };
`
export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  gap: 10px;
`
export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 15px;
  outline: none;
  border: none;
  background-color: var(--slightly-less-white);
  color: var(--green)
`
export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(22, 1fr);
  border-top: 4px solid var(--dark-green);
  background-color: transparent;
  grid-column: 1/-1;
  grid-row: 1/2;

  img {
    display: none;
  }

  @media (min-width: 768px) {
    grid-column: 1/10;
    grid-row: 1/3;
    border-bottom: 4px solid var(--dark-green);
    background-color: transparent;
    border-radius: 0;
    
  };
  @media (min-width: 992px) {
    grid-row: 1/3;
    grid-column: 2/-2;
    background-color: var(--light-gray);
    border-radius: 14px;
    border-top: none;
    border-bottom: none;

    img {
      display: inline;
      grid-row: 1;
      grid-column: 1/-1;
      width: 100%;
      height: 100%;
    }
  };
`

export const Subscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--black);
  grid-row: 1;
  grid-column: 3/10;
  font-weight: 300;
  border-radius: 14px;
  z-index: 1;

  @media (max-width: 992px) {
    grid-column: 3/21;
    color: inherit;
  };
  
`
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--slightly-less-white);
  border-radius: 6px;
  padding: 7px 7px 7px 15px;
`
export const Input = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
`
export const SubmitButton = styled.button`
  height: 38px;
  width: 44px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  background-color: var(--green);
  color: var(--slightly-less-white);
  transition: padding-left 300ms ease-in-out;
  
  
  &&:hover{
    background-color: var(--dark-green);
    padding-left: 10px;
    transition: padding-left 300ms ease-in-out;
  }
  
`
export const EmptyContainer = styled.div`
  background-color: var(--green);
  opacity: 0.72;
  grid-row: 2/5;
  grid-column: 1/-1;
  z-index: -1;

  @media (max-width: 992px) {
    grid-row: 1/5;
  };
`