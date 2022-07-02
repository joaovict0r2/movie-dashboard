import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background.primary};
    font-size: 16px;
    color: red;
  }

  button {
    cursor: pointer;
  }
`;
