import { Match } from "models/Match";

export interface Schedule {
    date: Date;
    matches: Match[];
}
