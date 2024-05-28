import commonClasses from 'styles/_common.module.scss';
import classes from './styles.module.scss';
import Panel from "components/panel";
import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { useNavigate, useParams } from 'react-router-dom';
import LeagueCard from 'src/shared/components/card/league-card';
import { strings } from 'src/shared/localizations/strings';
import TeamCard from 'src/shared/components/card/team-card';
import { LeagueTeams } from 'src/models/LeagueTeams';

const TeamsPage = () => {
  const {leagueId} = useParams()
  const navigate = useNavigate();
  const [teams, setTeams] = useState<LeagueTeams | undefined>();

  useEffect(() => {
    if(leagueId) {
      serviceClient.leagueTeamsGet(leagueId).then((league: LeagueTeams) => {
        setTeams(league);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={commonClasses.mainContainer}>
      <Panel className={commonClasses.mainPanel} header={strings.routeNames.teams}>
        <>
        {teams && <div className={commonClasses.clickable} 
          onClick={() => navigate(`/leagues/${leagueId}`)}>
            <LeagueCard league={teams?.league}/>
          </div>}
        <div className={classes.teamContainer}>
        {teams && teams.teams.map((team) => <TeamCard team={team}/>)}
        </div>
        </>
      </Panel>
    </div>
  );
};

TeamsPage.displayName = 'Teams';

export default TeamsPage;
