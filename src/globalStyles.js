import { createGlobalStyle } from 'styled-components';

import montserratRegular from './fonts/montserratRegular.ttf';
import montserratSemiBold from './fonts/montserratSemiBold.ttf';
import montserratBold from './fonts/montserratSemiBold.ttf';
import { colors, mobileBreakpoint } from './constants';

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

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    background-color: ${colors.blue};
    color: white;
    font-family: Montserrat;
    overflow-x: hidden;
    overflow-y: scroll;
    line-height: 1.8;
    letter-spacing: 0.5px;
    word-spacing: 1px;
    font-size: 18px;

    @media (max-width: ${mobileBreakpoint}px) {
      font-size: 17px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: 15px;
    letter-spacing: 1px;
    line-height: 1.2;
  }

  a {
    color: ${colors.lightBlue};
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: ${colors.yellow};
  }

  p {
    margin-top: 0;
    margin-bottom: 50px;
  }
`;
