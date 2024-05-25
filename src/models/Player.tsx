export interface Player {
    id: string;
    captain: boolean;
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    teamIds?: string[]; 
}