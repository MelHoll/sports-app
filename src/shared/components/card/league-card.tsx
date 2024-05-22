import { FC } from 'react';
import Card from '.';
import { League } from 'models/League';

interface LeagueCardProps {
    league: League;
}

export const LeagueCard: FC<LeagueCardProps> = ({league}) => {
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric'});
    const startDate = dateFormat.format(typeof league.startDate === 'string' ? new Date(league.startDate) : league.startDate);
    const endDate = dateFormat.format(typeof league.endDate === 'string' ? new Date(league.endDate) : league.endDate);

  return (
    <Card 
        title={`${league.name} (${league.level})`} 
        subtitle={`${league.day} / ${league.location} / ${startDate} - ${endDate}`} />
  );
};

LeagueCard.displayName = 'LeagueCard';

export default LeagueCard;
