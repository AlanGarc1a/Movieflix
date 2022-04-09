import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #050505;
        --secondary: #303F4C;
        --grey: #555C5E;
        --light-grey: #D7D8D0;
        --white-grey: #ACAEAA;
        --blue: #64848C;
        --dark-orange: #BB3121;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    //default browser font-size = 16px;
    html {
        font-size: 62.5%; //1rem = 10px 10px/16px = 62.5%;
    }

    body {
        box-sizing: border-box;
        line-height: 1.7;
        font-family: 400;
        font-family: 'Roboto', 'Oswald', 'Lato', sans-serif;
    }
`;

export default GlobalStyle;
