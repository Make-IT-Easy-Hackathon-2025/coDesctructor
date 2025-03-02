import { Priority } from "./Priority";
import { ActivityType } from "./ActivityType";
import { ActivityTask } from "./ActivityTask";

export default interface Activity {
    id?: number;
    name: string;
    duration: number;
    priority: Priority;
    activityType: ActivityType;
    deadline: string;
    userId: number;
    tasks: ActivityTask[]
}