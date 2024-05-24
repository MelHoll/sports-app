// import Edit from 'assets/svg/edit.svg?react';
// import Placeholder from 'assets/svg/slider.svg?react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Match } from 'src/models/Match';

interface MatchProps {
    match: Match;
    showDate?: boolean;
}

const MatchCard:  FC<MatchProps> = ({
    match,
    showDate = false
}) => 
{
    const {
        time, 
        court, 
        teamHome, 
    teamAway} = match;
    const timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric'});
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', weekday: "long" });

    return (
        <div>
            {showDate && <div>{dateFormat.format(typeof time === 'string' ? new Date(time) : time)}</div>}
            <div> 
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
        </div>
    );
};

MatchCard.displayName = 'MatchCard';

export default MatchCard;
