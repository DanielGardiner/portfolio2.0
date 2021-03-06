import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
          box-sizing: border-box;
          margin: 0;
        }

        /* margin-top: 0; */

        /* * + * { */
          /* margin-top: 1rem; */
        /* } */


        html,
        body {
          margin: 0;
          color: #555;
          /* font-family: 'Nunito'; */
          font-family: 'Playfair Display', 'sarif';
          /* font-family: 'Amiri'; */
          /* font-family: 'Vollkorn'; */
          /* font-family: 'Rubik'; */
          /* font-family: 'Epilogue'; */
          /* font-family: Roboto; */
          
          /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol'; */
          font-size: 18px;
          line-height: 1.4;

          /* &:first-child {
            margin-top: 0;
          } */

          
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #222;
          line-height: 1.1;
          + * {
            margin-top: 0.5rem;
          }
        }
        strong {
          color: #222;
        }
        li {
          margin-top: 0.25rem;
        }
`;

export default GlobalStyle;
