import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../theme/theme';
import { baseButtonStyles } from '../theme/styledButton';
import { useMsal } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { signUpRequest } from "../authConfig";

function handleSignUp(instance: IPublicClientApplication) {
    instance.loginPopup(signUpRequest).catch(e => {
        console.error(e);
    });
}

export const SignUpButton = (props: { theme: ThemeType }) => {
    const { instance } = useMsal();

    const SignUpButton = styled.button`
        ${baseButtonStyles}
    `
    return (
        <SignUpButton className="ml-auto" onClick={() => handleSignUp(instance)}>
            Sign up
        </SignUpButton>
    );
};
