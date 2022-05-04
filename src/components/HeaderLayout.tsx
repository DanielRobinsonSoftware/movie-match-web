import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../theme/theme';
import { SignInLayout } from './SignInLayout';
import { ThemeButton } from './ThemeButton';

export const HeaderLayout = (props: { theme: ThemeType, setTheme: (theme: ThemeType) => void }) => {

    const HeaderLayout = styled.header`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 90%;
        max-width: 90%;
        min-height: 50px;
        a {
            display: flex;
            padding: 0 50px;
        }
        ul {
            list-style: none;
            display: flex;
            padding: 0 50px;
        }
    `
    return (
        <HeaderLayout>
            <a href="/"><img src="/MovieMatchLogo-118x94.png" alt="Movie Match" /></a>
            <ul>
                <li><SignInLayout theme={props.theme} /></li>
                <li><ThemeButton selectedTheme={props.theme} setTheme={props.setTheme} /></li>
            </ul>
        </HeaderLayout>
    );
};
