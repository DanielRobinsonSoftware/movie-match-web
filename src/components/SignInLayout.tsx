import React from 'react';
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { SignUpButton } from "./SignUpButton";
import { useMsal } from "@azure/msal-react";

export const SignInLayout = (props: { isAuthenticated: boolean; }) => {
    const { accounts } = useMsal();
    const name = accounts[0] && accounts[0].username;
    const signIn = props.isAuthenticated ? (
        <>
            <h5 className="card-title">Signed in as {name}</h5>
            <SignOutButton />
        </>
    ) : (
        <SignInButton />
    );
    const signUp = !props.isAuthenticated && <SignUpButton />;
    return (
        <>
            {signIn}
            {signUp}
        </>
    );
};