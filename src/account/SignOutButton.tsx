import React from 'react';
import styled from 'styled-components';
import { ThemeType } from '../theme/theme';
import { baseButtonStyles } from '../theme/styledButton';
import { useMsal } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";

function handleLogout(instance: IPublicClientApplication) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

const Button = styled.button`
    ${baseButtonStyles}
    min-height: ${props => props.theme.headerHeight};
`
export const SignOutButton = (props: { theme: ThemeType }) => {
    const { instance } = useMsal();

    return (
        <Button className="ml-auto" onClick={() => handleLogout(instance)}>
            Sign out
        </Button>
    );
};
