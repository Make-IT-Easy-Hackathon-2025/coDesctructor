import { Day } from "./Day";
export interface ActivityTask {
    id?: number;
    name: string;
    startTime: string | null;
    endTime: string | null;
    day: Day;
    activityId: number;
    completed: boolean;
    whenCompleted?: string | null;
}