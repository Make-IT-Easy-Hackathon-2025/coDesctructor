import Activity from "../src/entities/Activity";
import axios from "axios";
import { BASE_URL } from "../src/constants/url";
import { ActivityTask } from "../src/entities/ActivityTask";

export default class ActivityCalls {
    async createActivity(activity: Activity) {
        try {
            return axios.post(`${BASE_URL}/activity`, activity).then
                (response => response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async createActivityTasks(activityId: number, tasks: ActivityTask) {
        try {
            return axios.post(`${BASE_URL}/activity-task/activity/${activityId}`, tasks).then
                (response => response.data);
        } catch (error) {
            console.error(error);
        }
    }

    static async getUserActivities(userId: string | undefined) {
        return axios.get(`${BASE_URL}/activity/user/${userId}`);
    }

    static async getUserActivitiesByType(userId: number, type: string) {
        return axios.get(`${BASE_URL}/activitiy/type/${userId}/${type}`);
    }

    async getActivityTasksByActivityId(activityId: number) {
        try {
            return axios.get(`${BASE_URL}/activity-task/activity/${activityId}`).then
            (response => response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async updateTaskStatus(taskId: number | undefined, updatedTask: ActivityTask) {
        try {
            return axios.put(`${BASE_URL}/activity-task/id/${taskId}`, updatedTask).then
            (response => response.data);
        } catch (error) {
            console.log(error);
        }
    }

    static async postCustomActivity(activity: Activity, email: string) {
        return axios.post(`${BASE_URL}/ai/email/${email}`, activity);
    }
}
