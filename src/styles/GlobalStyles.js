// GlobalStyles.js (for styled-components users)
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f9f9ff;
    margin: 0;
    padding: 0;
  }

  input, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
