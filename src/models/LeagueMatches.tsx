import { Match } from "models/Match";
import { League } from "./League";

export interface LeagueMatches {
    league: League;
    matches: Match[];
}