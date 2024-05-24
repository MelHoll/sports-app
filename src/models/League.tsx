import { Match } from "models/Match";

export interface League {
    id: string;
    active: boolean;
    name: string; 
    level: string; 
    location: string;
    day: string;
    startDate: Date;
    endDate: Date;
    matches: Match[];
}
  

