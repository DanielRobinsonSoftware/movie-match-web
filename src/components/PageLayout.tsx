import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { SignUpButton } from "./SignUpButton";
import { useMsal } from "@azure/msal-react";

export const PageLayout = props => {
    const isAuthenticated = useIsAuthenticated();
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">
                    Movie Match
                </a>
                <SignInLayout isAuthenticated={isAuthenticated} />
            </Navbar>
            <h5>Find a movie to watch together 📽️❤️</h5>
            <br />
            <br />
            {props.children}
        </>
    );
};

const SignInLayout = props => {
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
