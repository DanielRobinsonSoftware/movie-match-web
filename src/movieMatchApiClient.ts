import { useState, useEffect } from "react";
import axios from "axios";
import {AccessTokenResponse, getAccessToken} from "./getAccessToken"
import { IMsalContext } from "@azure/msal-react";

export interface MovieMatchApiResponse<T> {
    data: T;
}

export default async function getMovieMatchData<T>(endpoint: string, msalContext: IMsalContext){
    const baseUrl = "https://moviematch211027-staging.azurewebsites.net/api"; // TODO: Call appropriate endpoint (staging vs production)

    const accessTokenResponse = await getAccessToken(msalContext);
    
    const getData = (async (a: AccessTokenResponse) => {
        const bearer = `Bearer ${a.accessToken}`;

        const response = await axios.get(baseUrl + endpoint, {
            headers: {
                'Authorization': bearer
            }
        });

        const apiResponseData: MovieMatchApiResponse<T> = {
            data: response.data
        };
        return apiResponseData;

    });

    return getData(accessTokenResponse);
}
