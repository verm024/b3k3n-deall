import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    transition: .1s ease-in-out;
  }

  html {
    font-size: 16px
  }
`;

export default GlobalStyles;
