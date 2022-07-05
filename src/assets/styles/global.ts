import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background.primary};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.fontColor};
  }

  button {
    cursor: pointer;
  }
`;
