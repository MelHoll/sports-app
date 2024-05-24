import { Schedule } from "models/Schedule";
import { Ranking } from "models/Ranking";
import { League } from "models/League";

export interface LeagueDetails extends League {
    schedule: Schedule[];
    rankings: Ranking;
}
  