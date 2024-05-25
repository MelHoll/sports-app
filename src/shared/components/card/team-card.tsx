import { FC, useEffect, useState } from 'react';
import { Team } from 'src/models/Team';
import Card from '.';
import PlayerCard from './player-card';
import classes from 'styles/_common.module.scss'
import { serviceClient } from 'src/services/serviceClient';
import { Ranking } from 'src/models/Ranking';
import RankingCard from './ranking-card';

interface TeamProp {
    team: Team;
}

const TeamCard:  FC<TeamProp> = ({
    team
}) => 
{
    const [ranking, setRanking] = useState<Ranking | undefined>();

    useEffect(() => {
        serviceClient.rankingGetForTeam(team.teamId).then((rank: Ranking) => {
            console.log("rank", rank);
            setRanking(rank);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Card>
        <>
        <div className={classes.headerText}>{team.teamName}</div>
        { ranking && <RankingCard ranking={ranking}/> }
        {team.players.map((player) => 
            <PlayerCard player={player}/>
        )}
        </>
    </Card>;
}

TeamCard.displayName = 'TeamCard';

export default TeamCard;
