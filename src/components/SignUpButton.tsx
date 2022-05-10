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

const Button = styled.button`
    ${baseButtonStyles}
    min-height: ${props => props.theme.headerHeight};
`
export const SignUpButton = (props: { theme: ThemeType }) => {
    const { instance } = useMsal();

    return (
        <Button className="ml-auto" onClick={() => handleSignUp(instance)}>
            Sign up
        </Button>
    );
};
