import React from 'react';
import Emoji from 'a11y-react-emoji';
import { ThemeWrapper } from './ThemeWrapper';
import { useStorage } from '../useStorage';
import { defaultTheme, ThemeType } from '../theme/theme';
import { HeaderLayout } from './HeaderLayout';

export const PageLayout = (props: { children: JSX.Element[]; }) => {
    let [theme, setTheme] = useStorage<ThemeType>('selectedTheme', defaultTheme);
    return (
        <ThemeWrapper theme={theme}>
            <div className="App">
                <HeaderLayout theme={theme} setTheme={setTheme}></HeaderLayout>
                <h5>Find a movie to watch together <Emoji symbol="📽️" label="projector" /><Emoji symbol="❤️" label="heart" /></h5>
                <br />
                <br />
                {props.children}
            </div>
        </ThemeWrapper>
    );
};