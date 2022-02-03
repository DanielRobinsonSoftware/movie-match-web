import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { SignUpButton } from "./SignUpButton";

export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Movie Match</a>
                <SignInLayout isAuthenticated={isAuthenticated}/>
            </Navbar>
            <h5><center>Find a movie to watch together 📽️❤️</center></h5>
            <br />
            <br />
            {props.children}
        </>    
    );
};

const SignInLayout = (props) => {
    const signIn = props.isAuthenticated ? <SignOutButton /> : <SignInButton />
    const signUp = !props.isAuthenticated && <SignUpButton /> 
    return (<>{signIn}{signUp}</>);
}
