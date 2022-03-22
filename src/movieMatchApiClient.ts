import axios from "axios";

export interface MovieMatchApiResponse<T> {
    data: T;
}

export default async function getMovieMatchData<T>(endpoint: string, bearerToken: string){
    const baseUrl = "https://moviematch211027-staging.azurewebsites.net/api"; // TODO: Call appropriate endpoint (staging vs production)

    const getData = (async (bearerToken: string) => {
        const bearer = `Bearer ${bearerToken}`;

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

    return getData(bearerToken);
}
