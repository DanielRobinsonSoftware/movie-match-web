import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../theme/theme';
import { SignInLayout } from './SignInLayout';
import { ThemeButton } from '../theme/ThemeButton';
import { Projector } from '../emoji/Projector';
import { Heart } from '../emoji/Heart';

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
    min-height: ${props => props.theme.headerHeight};
    position: sticky;
    top: 0;
    align-items: center;
    ul {
        list-style: none;
        display: flex;
        margin: 0;
    }
    li {
        align-self: center;
    }
    li p {
        margin-left: 10px;
        margin-right: 10px;
    }
    .middle {
        flex: 6 0 auto;
    }
`
export const HeaderLayout = (props: { theme: ThemeType, setTheme: (theme: ThemeType) => void }) => {

    return (
        <Header>
            <a href="/"><img src="/MovieMatchLogo-118x94.png" alt="Movie Match" /></a>
            <div className="middle">
                <ul>
                    <li><p>Find a movie to watch together</p></li>
                    <li><Projector /></li>
                    <li><Heart /></li>
                </ul>
            </div>
            <ul>
                <li><ThemeButton theme={props.theme} setTheme={props.setTheme} /></li>
                <li><SignInLayout theme={props.theme} /></li>
            </ul>
        </Header>
    );
};
