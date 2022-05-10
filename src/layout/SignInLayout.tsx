import React from 'react';
import { useIsAuthenticated as userIsAuthenticated /*msal library has a typo*/ } from "@azure/msal-react";
import { SignInButton } from "../account/SignInButton";
import { SignOutButton } from "../account/SignOutButton";
import { SignUpButton } from "../account/SignUpButton";
import { ThemeType } from '../theme/theme';

export const SignInLayout = (props: { theme: ThemeType }) => {
    const isAuthenticated = userIsAuthenticated();
    const signIn = isAuthenticated ? (
        <>
            <span>Signed in</span>
            <SignOutButton theme={props.theme} />
        </>
    ) : (
        <SignInButton theme={props.theme} />
    );
    const signUp = !isAuthenticated && <SignUpButton theme={props.theme} />;
    return (
        <>
            {signIn}
            {signUp}
        </>
    );
};