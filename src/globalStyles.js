import { createGlobalStyle } from 'styled-components';

import montserratRegular from './fonts/montserratRegular.ttf';
import montserratExtraBold from './fonts/montserratExtraBold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(${montserratRegular});
    font-weight: normal;
  }

  @font-face {
    font-family: Montserrat;
    src: url(${montserratExtraBold});
    font-weight: bold;
  }

  body {
    margin: 0;
    background-color: #125;
    color: white;
    font-family: Montserrat;
  }

  h1 {
    letter-spacing: 1px;
  }

  a {
    color: #67a;
    text-decoration: none;
  }
`;
