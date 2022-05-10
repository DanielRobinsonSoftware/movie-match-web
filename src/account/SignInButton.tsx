import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../theme/theme';
import { baseButtonStyles } from '../theme/styledButton';
import { useMsal } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from "../account/authConfig";

function handleLogin(instance: IPublicClientApplication) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

const Button = styled.button`
    ${baseButtonStyles}
    min-height: ${props => props.theme.headerHeight};
`
export const SignInButton = (props: { theme: ThemeType}) => {
    const { instance } = useMsal();

    return (
        <Button className="ml-auto" onClick={() => handleLogin(instance) } >
            Sign in
        </Button>
    );
};