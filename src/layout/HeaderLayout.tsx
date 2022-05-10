import React from 'react';
import styled from 'styled-components';
import Emoji from 'a11y-react-emoji';
import { ThemeType } from '../theme/theme';
import { SignInLayout } from './SignInLayout';
import { ThemeButton } from '../theme/ThemeButton';

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    max-width: 90%;
    min-height: ${props => props.theme.headerHeight};
    a {
        display: flex;
    }
    ul {
        list-style: none;
        display: flex;
    }
    li {
        align-self: center;
    }
`
export const HeaderLayout = (props: { theme: ThemeType, setTheme: (theme: ThemeType) => void }) => {

    return (
        <Header>
            <div>
                <a href="/"><img src="/MovieMatchLogo-118x94.png" alt="Movie Match" /></a>
                <p>Find a movie to watch together <Emoji symbol="📽️" label="projector" /> <Emoji symbol="❤️" label="heart" /></p>
            </div>
            <ul>
                <li><ThemeButton theme={props.theme} setTheme={props.setTheme} /></li>
                <li><SignInLayout theme={props.theme} /></li>
            </ul>
        </Header>
    );
};
