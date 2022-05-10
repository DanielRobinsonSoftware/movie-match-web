import React from 'react';
import Emoji from 'a11y-react-emoji';
import { ThemeWrapper } from '../theme/ThemeWrapper';
import { useStorage } from '../useStorage';
import { defaultTheme, ThemeType } from '../theme/theme';
import { HeaderLayout } from './HeaderLayout';

export const PageLayout = (props: { children: JSX.Element | JSX.Element[]; }) => {
    let [theme, setTheme] = useStorage<ThemeType>('selectedTheme', defaultTheme);
    return (
        <ThemeWrapper theme={theme}>
            <HeaderLayout theme={theme} setTheme={setTheme}></HeaderLayout>
            <p>Find a movie to watch together <Emoji symbol="📽️" label="projector" /><Emoji symbol="❤️" label="heart" /></p>
            <br />
            <br />
            <>
                {props.children}
            </>
        </ThemeWrapper>
    );
};