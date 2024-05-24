export interface Player {
    id: string;
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    teamIds?: string[]; 
}