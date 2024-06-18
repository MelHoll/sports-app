import { FC } from 'react';
import Card, { CardProps } from '.';
import { League } from 'models/League';
import Button from 'components/button';
import Group from 'assets/svg/group.svg?react';
import { useNavigate } from 'react-router-dom';
import { strings } from 'src/shared/localizations/strings';

interface LeagueCardProps extends CardProps {
    league: League;
    hideSeeTeams?: boolean;
}

export const LeagueCard: FC<LeagueCardProps & CardProps> = ({league, hideSeeTeams, children, ...props}) => {
  const navigate = useNavigate();

  const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric'});
  const startDate = dateFormat.format(typeof league.startDate === 'string' ? new Date(league.startDate) : league.startDate);
  const endDate = dateFormat.format(typeof league.endDate === 'string' ? new Date(league.endDate) : league.endDate);

  const buttons = hideSeeTeams ? [] : [() => <Button title={strings.league.seeTeams} LeftIcon={Group} onClick={() => navigate(`/leagues/${league.id}/teams`)}/>];
  
  return (
    <Card 
        {...props}
        title={`${league.name} (${league.level})`} 
        subtitle={`${league.day} / ${league.location} / ${startDate} - ${endDate}`} 
        buttons={buttons}
        >
          {children as unknown as JSX.Element}
    </Card>
  );
};

LeagueCard.displayName = 'LeagueCard';

export default LeagueCard;
