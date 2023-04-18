import styled from '@emotion/styled';

interface TextProps{
  fontSize?:string;
  $fontWeight?: string;
  $margin?:string;
  $padding?:string;
  $color?:string;
  $hoverTextColor?:string;
}

export const Link = styled.a<TextProps>`
  text-decoration: none;
  transition: all 300ms ease-in-out;
  
  color: ${({ $color }) => `var(--${$color})` || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'inherit'};
  margin: ${({ $margin }) => $margin || '0'};
  padding: ${({ $padding }) => $padding || '0'};

  &&:active{
    color: ${({ $color }) => `var(--${$color})` || 'inherit'};
  }
  &&:hover{
    color: ${({  $hoverTextColor }) =>  `var(--${$hoverTextColor})` || 'inherit'};
    transition: all 300ms ease-in-out;
  }
`