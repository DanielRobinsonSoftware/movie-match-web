import { css } from 'styled-components';

export const baseButtonStyles = css`
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.linkColor};
    border-color: ${props => props.theme.linkColor};
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    margin: 4px 10px;
    :hover
    {
        color: ${props => props.theme.highlightColor};
        border-color: ${props => props.theme.highlightColor};
    }
`