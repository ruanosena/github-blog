import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue}
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  body, input, textarea, button {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
  @media (max-width: 480px) {
    html {
      font-size: 75%;
    }
  }
  
`;
