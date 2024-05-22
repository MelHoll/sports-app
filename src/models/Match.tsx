import { Team } from "models/Team";

export interface Match {
    time: Date;
    teamHome: Team;
    teamAway: Team;
    court: string;
}
