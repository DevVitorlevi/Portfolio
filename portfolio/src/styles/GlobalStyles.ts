// src/styles/GlobalStyles.ts
import { createGlobalStyle, keyframes } from 'styled-components';

export const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

export const shineMove = keyframes`
  0% {
    left: -75%;
  }
  100% {
    left: 125%;
  }
`;

export const shineMoveReverse = keyframes`
  0% {
    left: 125%;
  }
  100% {
    left: -75%;
  }
`;

export const GlobalStyles = createGlobalStyle`
  /* Reset e variáveis */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    overflow-x: hidden;
  }
`;
