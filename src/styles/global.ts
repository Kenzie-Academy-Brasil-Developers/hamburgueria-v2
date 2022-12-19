import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  max-width: 1400px ;
}

:root{
  /* Primary Palette */

  --Color-primary: #27AE60;
  --Color-secondary: #EB5757;
  
  /* Grey Scale Palette */

  --grey-0: #F5F5F5;
  --grey-100: #E0E0E0;
  --grey-300:#828282 ;
  --grey-600: #333333;

  /* Feedback Palette */
  
  --Negative: #e60000;
  --Warning: #ffcd07;
  --Sucess: #168821;
  --Information: #155bcb;

    /* Font */

  --Inter: "Inter", sans-serif;

  width: 100%;
  height: 100%;
  margin:  0 auto;
}

button {
  cursor: pointer;
}

ul,
li {
  list-style: none;
}


body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;
