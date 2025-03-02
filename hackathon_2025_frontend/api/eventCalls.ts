import axios from 'axios';
import { BASE_URL } from "../src/constants/url";
import { Event } from "../src/entities/Event";
import User from '../src/entities/User';
import AsyncStorage from "@react-native-async-storage/async-storage";

export class EventApiCalls {
    static async getEvents() {
        return await axios.get(`${BASE_URL}/events`);
    }
    static async pushEvent(event: Event) {
        const userAsync: any = await AsyncStorage.getItem("user");
        const user: User = JSON.parse(userAsync) as User;
        const userEmail: String = user.email;

        return await axios.post(`${BASE_URL}/ai/email/${userEmail}`, event);
    }
}