import Activity from "./Activity";

export default interface User {
    id? : string;
    firstName: string;
    lastName: string;
    email: string;
    activities: Activity[];
}