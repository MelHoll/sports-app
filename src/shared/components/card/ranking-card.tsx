import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Ranking } from 'src/models/Ranking';
import classes from 'styles/_common.module.scss'

interface RankingProps {
    ranking: Ranking;
}

const RankingCard: FC<RankingProps> = ({
    ranking,
}) => 
{
    return (
        <div className={classes.flexSpaceBetween}>
            <div>
                {ranking.ranking}
            </div> 
            <div>
                <Link 
                    to={`/leagues/team/${ranking.team.teamId}`} 
                    title={ranking.team.teamName}>
                    {ranking.team.teamName}
                </Link> 
            </div>
            <div>
                {ranking.wins} / {ranking.ties} / {ranking.loses}
            </div>
        </div>
    );
};

RankingCard.displayName = 'RankingCard';

export default RankingCard;
