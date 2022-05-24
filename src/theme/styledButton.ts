import { css } from 'styled-components';

export const baseButtonStyles = css`
    background-color: ${props => props.theme.buttonColor};
    color: ${props => props.theme.textColor};
    border-color: ${props => props.theme.buttonBorderColor};
    border-width: 6px;
    border-style: double;
    cursor: pointer;
    font-size: 16px;
    font-weight: normal;
    border-radius: 14px;
    margin: 4px 10px;
    filter: brightness(80%);
    :hover
    {
        filter: brightness(100%);
    }
`