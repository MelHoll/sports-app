import { FC } from 'react';
import Card from '.';

export interface LeagueProps {
    id: string;
    name: string; 
    level: string; 
    location: string;
    day: string;
    startDate: Date;
    endDate: Date;
}

interface LeagueCardProps {
    league: LeagueProps;
}

export const LeagueCard: FC<LeagueCardProps> = ({league}) => {
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric'});
    const startDate = dateFormat.format(league.startDate);
    const endDate = dateFormat.format(league.endDate);

  return (
    <Card 
        title={`${league.name} (${league.level})`} 
        subtitle={`${league.day} / ${league.location} / ${startDate} - ${endDate}`} />
  );
};

LeagueCard.displayName = 'LeagueCard';

export default LeagueCard;
