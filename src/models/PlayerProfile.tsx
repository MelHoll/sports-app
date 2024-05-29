import { League } from "./League";
import { Player } from "./Player";

export interface PlayerProfile {
    player: Player;
    leagues: League[];
}