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

export const SignOutButton = (props: { theme: ThemeType }) => {
    const { instance } = useMsal();

    const SignOutButton = styled.button`
        ${baseButtonStyles}
    `
    return (
        <SignOutButton className="ml-auto" onClick={() => handleLogout(instance)}>
            Sign out
        </SignOutButton>
    );
};
