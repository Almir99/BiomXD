import styled from '@emotion/styled'
import { keyframes } from '@emotion/react';

const showAnimation = keyframes`
  from, 0%, to {
    opacity: 0;
    left: 20px;
  }

  100%{
    left: 0;
    opacity: 1;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  padding: 90px 0 55px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: ". t ." 
  ". r ." 
  ". a ." 
  ". b .";
  max-width: 1440px;
  color: var(--dark-green);
  background-color: var(--light-gray);
  
  .show{
    display: inline;
    position: relative;
    animation: ${showAnimation} 1s ease forwards;
  }
  .hide{
    display: none;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr 1fr;
  };
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  
  .active{
    background-color: var(--green);
    transition: background-color 300ms ease;
  }

  @media (min-width: 768px) {
    gap: 22px;
  };
  @media (min-width: 992px) {
    gap: 18px;
  };
  @media (min-width: 1200px) {
    gap: 12px;
  };
`

export const Button = styled.button`
  height: 40px;
  width: 40px;
  padding: 0;
  background-color: transparent;
  border: 1px solid var(--green);
  border-radius: 50%;
  transition: background-color 300ms ease;
  align-self: start;
  
  &&:hover{
    background-color: var(--green);
    transition: background-color 300ms ease;
  }

  @media (min-width: 768px) {
    height: 25px;
    width: 25px;
  };
  @media (min-width: 992px) {
    height: 20px;
    width: 20px;
  };
  @media (min-width: 1200px) {
    height: 8px;
    width: 8px;
  };
`