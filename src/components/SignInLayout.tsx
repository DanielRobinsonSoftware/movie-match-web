import React from 'react';
import { useIsAuthenticated as userIsAuthenticated /*msal library has a typo*/ } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { SignUpButton } from "./SignUpButton";
import { useMsal } from "@azure/msal-react";
import { ThemeType } from '../theme/theme';

export const SignInLayout = (props: { theme: ThemeType }) => {
    const { accounts } = useMsal();
    const name = accounts[0] && accounts[0].username;
    const isAuthenticated = userIsAuthenticated();
    const signIn = isAuthenticated ? (
        <>
            <h5 className="card-title">Signed in as {name}</h5>
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