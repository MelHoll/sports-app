import { Link } from 'react-router-dom';
import { FC, useMemo, useState } from 'react';
import { GameResult, Match } from 'src/models/Match';
import Button from 'components/button';
import RightArrow from 'assets/svg/arrow-right.svg?react';
import DownArrow from 'assets/svg/arrow-down.svg?react';
import classes from 'styles/_common.module.scss'
import ResultCard from 'components/card/result-card';
import { serviceClient } from 'src/services/serviceClient';
import { strings } from 'src/shared/localizations/strings';
import { CardProps } from '.';

interface MatchProps extends CardProps {
    match: Match;
    showDate?: boolean;
}

const MatchCard:  FC<MatchProps> = ({
    match,
    showDate = false, 
    ...props
}) => 
{
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState(match.results || []);

    const {
        time, 
        court, 
        teamHome, 
        teamAway } = match;

    const timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric'});
    const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', weekday: "long" });

    const addGame = () => {
        setResults([...results, {homeScore: 0, awayScore: 0}]);
    };

    const removeResult = (index: number) => {
        serviceClient.matchGameRemove(match.id, index).then(() => {
            const updatedResults = [...results];
            updatedResults.splice(index, 1);
            setResults(updatedResults);
        })
    };

    const updateScore = (index: number, result: GameResult) => {
        return serviceClient.updateMatchGameResults(match.id, index, result).then(() => {
            const updated = [...results];
            updated[index] = result;
            setResults(updated);
        });
    }

    const Icon = showResults ? DownArrow : RightArrow;

    const dateTimeValue = useMemo(() => {
        return typeof time === 'string' ? new Date(time) : time
    }, [time]);

    return (
        <div {...props}>
            {showDate && <div title={dateFormat.format(dateTimeValue)}>{dateFormat.format(dateTimeValue)}</div>}
            <div> 
                <div className={`${classes.flexSpaceBetween}`}>
                    
                    <div title={timeFormat.format(dateTimeValue)}>
                        <Icon height={20} width={20} 
                            fill='black'
                            className={classes.clickable} 
                            onClick={() => setShowResults(!showResults)}
                        /> 
                        {timeFormat.format(dateTimeValue)}
                    </div> 
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
                    {results && results.map((result, index) => 
                        <ResultCard 
                            key={index} 
                            result={result} 
                            onRemoved={() => removeResult(index)} 
                            onUpdate={(result: GameResult) => updateScore(index, result)}
                        />
                    )}
                    {!results && <div title={strings.match.noGames}>{strings.match.noGames}</div>}
                    <Button label={strings.match.addGame} onClick={addGame}/>
                </div>}
            </div>
        </div>
    );
};

MatchCard.displayName = 'MatchCard';

export default MatchCard;
