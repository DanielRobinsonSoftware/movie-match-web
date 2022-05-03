import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../theme/theme';
import { baseButtonStyles } from '../theme/styledButton';
import { useMsal } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";

function handleLogin(instance: IPublicClientApplication) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = (props: { theme: ThemeType}) => {
    const { instance } = useMsal();

    const SignInButton = styled.button`
        ${baseButtonStyles}
    `
    return (
        <SignInButton className="ml-auto" onClick={() => handleLogin(instance) } >
            Sign in
        </SignInButton>
    );
};