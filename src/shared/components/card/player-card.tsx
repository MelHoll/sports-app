import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Player } from 'src/models/Player';
import classes from 'styles/_common.module.scss'
import Captain from 'assets/svg/captain.svg?react';


interface PlayerProp {
    player: Player;
}

const PlayerCard:  FC<PlayerProp> = ({
    player
}) => 
{
    const navigate = useNavigate();
    
    return <div>
        <div onClick={() => navigate(`/leagues/player/${player.id}`)}
            className={`${classes.subHeaderText} ${classes.clickable}`}>
            {player.firstName} {player.lastName} 
            { player.captain && <Captain width={20} height={20} fill="black"/> }
        </div>
        <div>{player.phone}</div>
        <Link to={`mailto:${player.email}`}>{player.email}</Link>
    </div>;
}

PlayerCard.displayName = 'PlayerCard';

export default PlayerCard;
