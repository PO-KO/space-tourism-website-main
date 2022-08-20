import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        // Colors
        --paraColor:rgba(208, 214, 249, 1);
        --mostlyBlack: rgba(11, 13, 23, 1);
        --numColor: rgba(255,255,255,.3);
        //Typography
        --barlow: 'Barlow', sans-serif;
        --barlowCon: 'Barlow Condensed', sans-serif;
        --bellafair: 'Bellefair', serif;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`;
