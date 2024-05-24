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
import { League } from 'src/models/League';
import LeagueCard from 'src/shared/components/card/league-card';

const ProfilePage = () => {
  const {teamId} = useParams()
  const [team, setTeam] = useState<Team | undefined>();


  useEffect(() => {
    if(teamId) {
      serviceClient.teamGet("321").then((team: Team) => {
        setTeam(team);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.mainPanel} header="Profile Info">
        <div>
          Name: {team?.teamName}
          Team: {team?.players.map((player) => `${player.firstName} ${player.lastName}`).join(", ")}
        </div>
      </Panel>
      <Panel className={classes.mainPanel} header="Leagues">
        {team && team.leagues.map((league: League) => {
        return <LeagueCard key={league.id} league={league}>
          {league && <List elements={league.matches?.map((match: Match) => () => <MatchCard match={match}/>) }/>}
        </LeagueCard>
        })}
      </Panel>
    </div>
  );
};

ProfilePage.displayName = 'Profile';

export default ProfilePage;
