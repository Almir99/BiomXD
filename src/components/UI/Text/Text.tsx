import styled from '@emotion/styled';
import '../../../styles/brandon.css';
import '../../../styles/chronicle.css';
interface TextProps{
  fontSize?:string;
  $fontWeight?: string;
  $margin?:string;
  $padding?:string;
  $color?:string;
  $textAlign?:string;
  $textTransform?:string;
  $letterSpacing?:string;
  chronicle?:boolean;
}

export const Text = styled.p<TextProps>`
  
  text-orientation: inherit;
  font-family: ${({ chronicle }) => chronicle ? "Chronicle" : 'Brandon'};
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing || 'inherit'};
  text-align: ${({ $textAlign }) => $textAlign || 'inherit'};
  text-transform: ${({ $textTransform }) => $textTransform || 'inherit'};
  color: ${({ $color }) => `var(--${$color})` || 'inherit'};
  font-size: ${({ fontSize }) => fontSize || 'inherit'};
  font-weight: ${({ $fontWeight }) => $fontWeight || 'normal'};
  margin: ${({ $margin }) => $margin || '0'};
  padding: ${({ $padding }) => $padding || '0'};
`