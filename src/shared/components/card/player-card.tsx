import { FC } from 'react';
import { Link } from 'react-router-dom';
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
    return <div>
        <div className={classes.subHeaderText}>{player.firstName} {player.lastName} 
        { player.captain && <Captain width={20} height={20} fill="black"/> }
        </div>
        <div>{player.phone}</div>
        <Link to={`mailto:${player.email}`}>{player.email}</Link>
    </div>;
}

PlayerCard.displayName = 'PlayerCard';

export default PlayerCard;
