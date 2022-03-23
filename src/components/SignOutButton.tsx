import React from "react";
import { useMsal } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import Button from "react-bootstrap/Button";

function handleLogout(instance: IPublicClientApplication) {
    instance.logoutPopup().catch(e => {
        console.error(e);
    });
}

export const SignOutButton = () => {
    const { instance } = useMsal();
    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>
            Sign out
        </Button>
    );
};
