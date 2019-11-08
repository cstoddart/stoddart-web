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
    margin-bottom: 25px;
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

  /* Markdown Code Syntax Highlighting */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #fff;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"] {
    padding: 15px;
    overflow: auto;
    border-radius: 5px;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background-color: #002;
    border: 1px solid #ffffff88;
    margin-bottom: 25px;
  }

  :not(pre) > code[class*="language-"] {
    padding: 5px;
    border-radius: 5px;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #fc1;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
    color: #fc1;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #79d;
  }

  .token.function {
    color: #fff;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  // pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  // code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  //   background: #073642; /* base02 */
  // }

  // pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  // code[class*="language-"]::selection, code[class*="language-"] ::selection {
  //   background: #073642; /* base02 */
  // }

  // .token.comment,
  // .token.prolog,
  // .token.doctype,
  // .token.cdata {
  //   color: #93a1a1; /* base1 */
  // }

  // .token.punctuation {
  //   color: #586e75; /* base01 */
  // }

  // .token.entity {
  //   color: #fff;
  //   background: #eee8d5; /* base2 */
  // }

  // .token.regex,
  // .token.important,
  // .token.variable {
  //   color: #cb4b16; /* orange */
  // }

  /* Blog Post Styles */ TODO: delete this
  .blog-post-content img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;
