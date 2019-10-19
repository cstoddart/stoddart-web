import { createGlobalStyle } from 'styled-components';

import montserratRegular from './fonts/montserratRegular.ttf';
import montserratSemiBold from './fonts/montserratSemiBold.ttf';
import montserratBold from './fonts/montserratSemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Montserrat;
    src: url(${montserratRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: Montserrat;
    src: url(${montserratSemiBold});
    font-weight: 600;
  }

  @font-face {
    font-family: Montserrat;
    src: url(${montserratBold});
    font-weight: 700;
  }

  body {
    margin: 0;
    background-color: #125;
    color: white;
    font-family: Montserrat;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1 {
    letter-spacing: 1px;
  }

  a {
    color: #67a;
    text-decoration: none;
  }
`;
