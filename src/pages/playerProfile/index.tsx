import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { useParams } from 'react-router-dom';
import { PlayerProfile } from 'src/models/PlayerProfile';
import PlayerCard from 'src/shared/components/card/player-card';
import ProfilePage from 'src/shared/components/profile';

const PlayerProfilePage = () => {
  const {playerId} = useParams()
  const [playerProfile, setPlayer] = useState<PlayerProfile | undefined>();

  useEffect(() => {
    if(playerId){
      serviceClient.playerProfileGet(playerId).then((player: PlayerProfile) => {
        setPlayer(player);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ( <>
    {playerProfile && <ProfilePage profileElement={<PlayerCard player={playerProfile.player}/>} leagues={playerProfile.leagues} />}
  </>);
};

PlayerProfilePage.displayName = 'PlayerProfile';

export default PlayerProfilePage;
