import React from 'react';
import { useIsAuthenticated as userIsAuthenticated /*msal library has a typo*/ } from "@azure/msal-react";
import Emoji from 'a11y-react-emoji';
import { ThemeWrapper } from './ThemeWrapper';
import { ThemeButton } from './ThemeButton';
import { useStorage } from '../useStorage';
import { defaultTheme, ThemeType } from '../theme/theme';
import { SignInLayout } from './SignInLayout';

export const PageLayout = (props: { children: JSX.Element[]; }) => {
    let [theme, setTheme] = useStorage<ThemeType>('selectedTheme', defaultTheme);
    const isAuthenticated = userIsAuthenticated();
    return (
        <ThemeWrapper theme={theme}>
            <div className="App">
                <span>
                    <a href="/"><img src="/MovieMatchLogo-118x94.png" alt="Movie Match" /></a>
                    <SignInLayout theme={theme} isAuthenticated={isAuthenticated} />
                    <ThemeButton selectedTheme={theme} setTheme={setTheme} />
                </span>
                <h5>Find a movie to watch together <Emoji symbol="📽️" label="projector" /><Emoji symbol="❤️" label="heart" /></h5>
                <br />
                <br />
                {props.children}
            </div>
        </ThemeWrapper>
    );
};
