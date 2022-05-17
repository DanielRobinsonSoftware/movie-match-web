import React from 'react';
import styled from 'styled-components';
import { GlobalThemeWrapper } from '../theme/GlobalThemeWrapper';
import { useStorage } from '../useStorage';
import { defaultTheme, ThemeType } from '../theme/theme';
import { HeaderLayout } from './HeaderLayout';
import { Link } from "../theme/link";

const Footer = styled.p`
    width: 90%;
    max-width: 90%;
    font-size: 10px;
`

export const PageLayout = (props: { children: JSX.Element | JSX.Element[]; }) => {
    let [theme, setTheme] = useStorage<ThemeType>('selectedTheme', defaultTheme);
    return (
        <GlobalThemeWrapper theme={theme}>
            <HeaderLayout theme={theme} setTheme={setTheme}></HeaderLayout>
            <br />
            <br />
            <>
                {props.children}
            </>
            <br />
            <br />
            <Footer>
                Emojis designed by <Link href="https://openmoji.org/">OpenMoji</Link>. <Link href="https://josipkelava.com/metropolis-1920">Metropolis font</Link> designed by Josip Kelava.
            </Footer>
        </GlobalThemeWrapper>
    );
};