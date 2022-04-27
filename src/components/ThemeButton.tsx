import React from 'react';
import { lightTheme, darkTheme, ThemeType } from '../theme/theme';

const themeToggler = (themeToToggle: ThemeType) => {
    let theme: ThemeType;
    if (themeToToggle === lightTheme) {
        theme = darkTheme;
    } else {
        theme = lightTheme;
    }
    return theme;
}

export const ThemeButton = (props: { selectedTheme: ThemeType, setTheme: (theme: ThemeType) => void }) => {

    return (
        <button onClick={() => props.setTheme(themeToggler(props.selectedTheme))}>Toggle theme</button>
    )
}