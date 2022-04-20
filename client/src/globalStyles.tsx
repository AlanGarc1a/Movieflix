import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #0F1318;
        --secondary: #303F4C;
        --grey: #555C5E;
        --light-grey: #D7D8D0;
        --white-grey: #ACAEAA;
        --blue: #64848C;
        --light-green: #1AAC54;
        --dark-orange: #BB3121;
        --white: #F1F1EF;

        --default-size: 1.9rem;
        --default-weight: 500;
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

    @media only screen and (max-width: 768px) {
        html {
            font-size: 50%; //1rem = 8px 8 /16
        }
    }

    @media only screen and (max-width: 460px) {
        html {
            font-size: 50%; //1rem = 8px  8 /16
        }
    }

    body {
        background-color: var(--white);
        box-sizing: border-box;
        line-height: 1.7;
        font-weight: 400;
        font-family: 'Roboto', 'Oswald', 'Lato', sans-serif;
    }
`;

export default GlobalStyle;
