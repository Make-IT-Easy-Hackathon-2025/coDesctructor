import {BASE_URL} from "../src/constants/url";
import axios from "axios";

export class UserApiClient {
    async getUserByEmailAddress(email: string) {
        try {
            return axios.get(`${BASE_URL}/user/email/${email}`).then
                (response => response.data);
        } catch (error) {
            console.error(error);
        }
    }
}
