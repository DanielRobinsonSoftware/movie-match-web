import React from 'react';
import styled from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from './theme';

const themeToggler = (themeToToggle: ThemeType) => {
    let theme: ThemeType;
    if (themeToToggle === lightTheme) {
        theme = darkTheme;
    } else {
        theme = lightTheme;
    }
    return theme;
}

const Button = styled.button`
    background-color: transparent;
    border: 0;
    min-height: ${props => props.theme.headerHeight};
    filter: brightness(80%);
    :hover
    {
        filter: brightness(100%);
    }
    #moon {
        ${props => props.theme !== lightTheme &&`
            display: none;
        `}
    }
    #sun {
        ${props => props.theme === lightTheme &&`
            display: none;
        `}
    }
`
export const ThemeButton = (props: { theme: ThemeType, setTheme: (theme: ThemeType) => void }) => {

    return (
        <Button theme={props.theme} onClick={() => props.setTheme(themeToggler(props.theme))}>
            <svg id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2004 2004">
                <rect stroke="none" fill="none" x="99" y="99" width="1804" height="1804"/>
                <path fill="rgb(21,11,10)" stroke="none" d="M 1901,1000 C 1901,1159 1859,1314 1780,1451 1701,1588 1588,1701 1451,1780 1314,1859 1159,1901 1000,1901 842,1901 687,1859 550,1780 413,1701 300,1588 221,1451 142,1314 100,1159 100,1001 100,842 142,687 221,550 300,413 413,300 550,221 687,142 842,100 1000,100 1159,100 1314,142 1451,221 1588,300 1701,413 1780,550 1859,687 1901,842 1901,1000 L 1901,1000 Z"/>
                <path fill="none" stroke="rgb(21,11,10)" d="M 1901,1000 C 1901,1159 1859,1314 1780,1451 1701,1588 1588,1701 1451,1780 1314,1859 1159,1901 1000,1901 842,1901 687,1859 550,1780 413,1701 300,1588 221,1451 142,1314 100,1159 100,1001 100,842 142,687 221,550 300,413 413,300 550,221 687,142 842,100 1000,100 1159,100 1314,142 1451,221 1588,300 1701,413 1780,550 1859,687 1901,842 1901,1000 L 1901,1000 Z"/>
                <rect stroke="none" fill="none" x="998" y="99" width="904" height="1803"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 999,100 C 1225,261 1450,523 1450,1000 1450,1477 1225,1739 999,1900 1494,1900 1900,1494 1900,1000 1900,506 1494,100 999,100 L 999,100 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 999,100 C 1225,261 1450,523 1450,1000 1450,1477 1225,1739 999,1900 1494,1900 1900,1494 1900,1000 1900,506 1494,100 999,100 Z"/>
            </svg>
            <svg id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2004 2004">
                <rect stroke="none" fill="none" x="-1" y="-1" width="2004" height="2004"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 0,1000 L 406,1144 406,856 0,1000 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 0,1000 L 406,1144 406,856 0,1000 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 293,1707 L 682,1522 478,1318 293,1707 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 293,1707 L 682,1522 478,1318 293,1707 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 1000,2001 L 1144,1594 856,1594 1000,2001 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 1000,2001 L 1144,1594 856,1594 1000,2001 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 1707,1707 L 1522,1318 1318,1522 1707,1707 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 1707,1707 L 1522,1318 1318,1522 1707,1707 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 2001,1000 L 1594,856 1594,1144 2001,1000 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 2001,1000 L 1594,856 1594,1144 2001,1000 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 1707,293 L 1318,478 1522,682 1707,293 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 1707,293 L 1318,478 1522,682 1707,293 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 1000,0 L 856,406 1144,406 1000,0 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 1000,0 L 856,406 1144,406 1000,0 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 293,293 L 478,682 682,478 293,293 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 293,293 L 478,682 682,478 293,293 Z"/>
                <path fill="rgb(177,176,190)" stroke="none" d="M 1501,1001 C 1501,1088 1478,1175 1434,1251 1390,1327 1327,1390 1251,1434 1175,1478 1088,1501 1001,1501 913,1501 826,1478 750,1434 674,1390 611,1327 567,1251 523,1175 500,1088 500,1001 500,913 523,826 567,750 611,674 674,611 750,567 826,523 913,500 1000,500 1088,500 1175,523 1251,567 1327,611 1390,674 1434,750 1478,826 1501,913 1501,1000 L 1501,1001 Z"/>
                <path fill="none" stroke="rgb(177,176,190)" d="M 1501,1001 C 1501,1088 1478,1175 1434,1251 1390,1327 1327,1390 1251,1434 1175,1478 1088,1501 1001,1501 913,1501 826,1478 750,1434 674,1390 611,1327 567,1251 523,1175 500,1088 500,1001 500,913 523,826 567,750 611,674 674,611 750,567 826,523 913,500 1000,500 1088,500 1175,523 1251,567 1327,611 1390,674 1434,750 1478,826 1501,913 1501,1000 L 1501,1001 Z"/>
            </svg>
        </Button>
    )
}