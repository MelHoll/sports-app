import { Team } from "models/Team";

export interface Ranking {
    team: Team;
    ranking: number;
    wins: number;
    ties: number;
    loses: number;
}