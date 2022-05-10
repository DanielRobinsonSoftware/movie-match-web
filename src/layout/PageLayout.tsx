import React from 'react';
import { GlobalThemeWrapper } from '../theme/GlobalThemeWrapper';
import { useStorage } from '../useStorage';
import { defaultTheme, ThemeType } from '../theme/theme';
import { HeaderLayout } from './HeaderLayout';

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
        </GlobalThemeWrapper>
    );
};