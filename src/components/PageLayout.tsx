import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useMsal, useIsAuthenticated as userIsAuthenticated /*msal library has a typo*/ } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { SignUpButton } from "./SignUpButton";
import Emoji from 'a11y-react-emoji';

export const PageLayout = (props: { children: JSX.Element[]; }) => {
    const isAuthenticated = userIsAuthenticated();
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">
                    Movie Match
                </a>
                <SignInLayout isAuthenticated={isAuthenticated} />
            </Navbar>
            <h5>Find a movie to watch together <Emoji symbol="📽️" label="projector" /><Emoji symbol="❤️" label="heart" /></h5>
            <br />
            <br />
            {props.children}
        </>
    );
};

const SignInLayout = (props: { isAuthenticated: boolean; }) => {
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
