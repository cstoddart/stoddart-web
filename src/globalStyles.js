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
    background-color: #014;
    color: white;
    font-family: Montserrat;
    overflow-x: hidden;
    overflow-y: scroll;
    line-height: 1.8;
    letter-spacing: 0.5px;
    word-spacing: 1px;
    font-size: 18px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    letter-spacing: 1px;
  }

  a {
    color: #67a;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: #fc1;
  }

  p {
    margin-top: 0;
    margin-bottom: 50px;
  }
`;
