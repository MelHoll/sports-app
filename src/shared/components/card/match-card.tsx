// import Edit from 'assets/svg/edit.svg?react';
// import Placeholder from 'assets/svg/slider.svg?react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Match } from 'src/models/Match';

interface MatchProps extends Match {
    key?: string;
}

const MatchCard:  FC<MatchProps> = ({
    time, 
    court, 
    teamHome, 
    teamAway, 
    key = crypto.randomUUID() 
}) => 
{
  const timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric'})

  return (
    <div key={key}> 
        {timeFormat.format(typeof time === 'string' ? new Date(time) : time)} 
        {court}
        <Link 
            to={`/leagues/team/${teamHome.teamId}`} 
            title={teamHome.teamName}>
            {teamHome.teamName}
        </Link> 
        vs 
        <Link 
            to={`/leagues/team/${teamAway.teamId}`}
            title={teamAway.teamName}>
            {teamAway.teamName}
        </Link>
    </div>
  );
};

MatchCard.displayName = 'MatchCard';

export default MatchCard;
