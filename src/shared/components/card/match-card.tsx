import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import { Match } from 'src/models/Match';
import Button from 'components/button';
import RightArrow from 'assets/svg/arrow-right.svg?react';
import DownArrow from 'assets/svg/arrow-down.svg?react';
import classes from 'styles/_common.module.scss'
import ResultCard from './result-card';

interface MatchProps {
    match: Match;
    showDate?: boolean;
}

const MatchCard:  FC<MatchProps> = ({
    match,
    showDate = false
}) => 
{
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState(match.results);

    const {
        time, 
        court, 
        teamHome, 
    teamAway} = match;

    const timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric'});
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', weekday: "long" });

    const addGame = () => {
        setResults([...results, {homeScore: 0, awayScore: 0}]);
    };

    const removeResult = (index: number) => {
        const updatedResults = [...results];
        updatedResults.splice(index, 1);
        setResults(updatedResults);
    };

    const Icon = showResults ? DownArrow : RightArrow ;

    return (
        <div>
            {showDate && <div>{dateFormat.format(typeof time === 'string' ? new Date(time) : time)}</div>}
            <div> 
                <div className={classes.flexSpaceBetween}>
                    
                    <div><Icon height={20} width={20} 
                        fill='black'
                        className={classes.clickable} 
                        onClick={() => setShowResults(!showResults)}/> 
                        {timeFormat.format(typeof time === 'string' ? new Date(time) : time)}</div> 
                    <div>{court}</div>
                    <div>
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
                {showResults && 
                <div>
                    {results && results.map((result, index) => <ResultCard result={result} onRemoved={() => removeResult(index)}/>)}
                    {!results && <div>No games to show.</div>}
                    <Button label={"Add game"} onClick={addGame}/>
                </div>}
            </div>
        </div>
    );
};

MatchCard.displayName = 'MatchCard';

export default MatchCard;
