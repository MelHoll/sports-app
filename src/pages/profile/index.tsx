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

const ProfilePage = () => {
  const {teamId} = useParams()
  const [team, setTeam] = useState<Team | undefined>();


  useEffect(() => {
    if(teamId) {
      serviceClient.teamGet(teamId).then((team: Team) => {
        setTeam(team);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.mainPanel} header={strings.routeNames.profile}> 
        {team && <TeamCard team={team}/>}
      </Panel>
      <Panel className={classes.mainPanel} header={strings.routeNames.leagues}>
        {team && <LeagueCard key={team.league.id} league={team.league}>
          {team.league && <List elements={team.league.matches?.map((match: Match) => () => <MatchCard match={match}/>) }/>}
        </LeagueCard>
        }
      </Panel>
    </div>
  );
};

ProfilePage.displayName = 'Profile';

export default ProfilePage;
