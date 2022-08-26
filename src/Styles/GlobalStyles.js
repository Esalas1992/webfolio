import { createGlobalStyle } from "styled-components";
import "@fontsource/readex-pro"

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
}

body{
    font-family: "Readex Pro", sans-serif;
    line-height: 1.5;
    font-weight: 400;
    overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

a{
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyles;