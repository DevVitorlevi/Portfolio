// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Reset e variáveis */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: black;
    list-style: none;
    text-decoration: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
    overflow-x: hidden;
  }
`;
