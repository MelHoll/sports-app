import classes from 'styles/_common.module.scss';
import Panel from "components/panel";
// import Button from "components/button";
// import Card from "src/shared/components/card";
// import Edit from 'assets/svg/edit.svg?react';
// import Placeholder from 'assets/svg/slider.svg?react';
import MatchCard from 'src/shared/components/card/match-card';
import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { Match } from 'src/models/Match';
import { useParams } from 'react-router-dom';
import { Team } from 'models/Team';
import List from 'src/shared/components/list';
import LeagueCard from 'src/shared/components/card/league-card';
import { strings } from 'src/shared/localizations/strings';
import TeamCard from 'src/shared/components/card/team-card';
import { League } from 'src/models/League';
import { PlayerProfile } from 'src/models/PlayerProfile';
import { Player } from 'src/models/Player';
import PlayerCard from 'src/shared/components/card/player-card';

const ProfilePage = () => {
  const {teamId, playerId} = useParams()
  const [team, setTeam] = useState<Team | undefined>();
  const [player, setPlayer] = useState<Player | undefined>();
  const [leagues, setLeagues] = useState<League[] | undefined>();

  useEffect(() => {
    if(teamId) {
      serviceClient.teamGet(teamId).then((team: Team) => {
        setTeam(team);
        setLeagues([team.league]);
      });
    }

    if(playerId){
      serviceClient.playerProfileGet(playerId).then((user: PlayerProfile) => {
        setPlayer(user.player);
        setLeagues(user.leagues);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.mainPanel} header={strings.routeNames.profile}> 
        <> 
        {team && <TeamCard team={team}/>}
        {player && <PlayerCard player={player} />}
        </>
      </Panel>
      <Panel className={classes.mainPanel} header={strings.routeNames.leagues}>
        {leagues && leagues.map((league) => <LeagueCard key={league.id} league={league}>
          <List elements={league.matches?.map((match: Match) => () => <MatchCard key={match.id} match={match}/>) }/>
        </LeagueCard>)
        }
      </Panel>
    </div>
  );
};

ProfilePage.displayName = 'Profile';

export default ProfilePage;
