import { League } from "./League";
import { Player } from "src/models/Player";

export interface Team {
    teamName: string;
    teamId: string;
    players: Player[];
    leagues: League[]; 
}
