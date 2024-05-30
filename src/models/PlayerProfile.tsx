import { LeagueMatches } from "./LeagueMatches";
import { Player } from "./Player";

export interface PlayerProfile {
    player: Player;
    leagues: LeagueMatches[];
}