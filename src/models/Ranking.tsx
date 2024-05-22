import { Team } from "models/Team";

export interface Rankings {
    team: Team;
    ranking: number;
    wins: number;
    ties: number;
    loses: number;
}