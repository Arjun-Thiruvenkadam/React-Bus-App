import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: #9be3de;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align:center;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #9be3de;
    min-height: 100%;
    min-width: 100%;
  }

  label {
    font-family: 'Montserrat', sans-serif;
    line-height: 2em;
  }
`;

export default GlobalStyle;
