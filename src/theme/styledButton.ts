import { css } from 'styled-components';

export const baseButtonStyles = css`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.textColor};
    border: 0;
    :hover
    {
        color: ${props => props.theme.linkColor};
    }
`