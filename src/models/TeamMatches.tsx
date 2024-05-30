import { Team } from "models/Team";
import { LeagueMatches } from "./LeagueMatches";

export interface TeamMatches {
    team: Team;
    leagueMatches: LeagueMatches;
}
