// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

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
    background-color: black;
    overflow-x: hidden;
  }

  .destaq {
    background: linear-gradient(90deg, #7B2FF7, #2983f0);
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;
