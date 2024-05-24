import { Team } from "models/Team";

export interface Match {
    id: string;
    time: Date;
    teamHome: Team;
    teamAway: Team;
    court: string;
    results: GameResult[];
}

export interface GameResult {
    homeScore: number, 
    awayScore: number
}
