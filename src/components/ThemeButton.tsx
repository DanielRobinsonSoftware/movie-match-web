import React from 'react';
import styled from 'styled-components';
import { baseButtonStyles } from '../theme/styledButton';
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
    
    const ThemeButton = styled.button`
        ${baseButtonStyles}
    `
    return (
        <ThemeButton onClick={() => props.setTheme(themeToggler(props.selectedTheme))}>Toggle theme</ThemeButton>
    )
}