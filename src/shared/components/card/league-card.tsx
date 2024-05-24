import { FC, ReactElement } from 'react';
import Card from '.';
import { League } from 'models/League';

interface LeagueCardProps extends React.PropsWithChildren  {
    league: League;
    children?: ReactElement;
}

export const LeagueCard: FC<LeagueCardProps> = ({league, children}) => {
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric'});
    const startDate = dateFormat.format(typeof league.startDate === 'string' ? new Date(league.startDate) : league.startDate);
    const endDate = dateFormat.format(typeof league.endDate === 'string' ? new Date(league.endDate) : league.endDate);

  return (
    <Card 
        title={`${league.name} (${league.level})`} 
        subtitle={`${league.day} / ${league.location} / ${startDate} - ${endDate}`} >
          {children}
    </Card>
  );
};

LeagueCard.displayName = 'LeagueCard';

export default LeagueCard;
