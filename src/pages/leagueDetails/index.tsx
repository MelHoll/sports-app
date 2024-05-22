import classes from './styles.module.scss';
import Panel from "components/panel";
import Card from "components/card";
// import Edit from 'assets/svg/edit.svg?react';
// import Placeholder from 'assets/svg/slider.svg?react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LeagueDetails } from 'models/LeagueDetails';
import { Schedule } from 'src/models/Schedule';
import { Match } from 'src/models/Match';
import MatchCard from 'src/shared/components/card/match-card';
import { serviceClient } from 'src/services/serviceClient';

const LeagueDetailsPage = () => {
  const { leagueId } = useParams();
  const [leagueData, setLeagueData] = useState<LeagueDetails | undefined>();
  const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric'});

  useEffect(() => {
    if(leagueId) {
      serviceClient.leagueDetailGet(leagueId).then((leagueDetails: LeagueDetails)  => {
        setLeagueData(leagueDetails);
      });
    }
  }, []);

  return (
    <div className={classes.container}>    
      <Panel className={classes.panel} header="Schedule">
      {leagueData && leagueData.schedule.map((matchup: Schedule, index: number) => 
        <Card key={index} title={dateFormat.format(typeof matchup.date === 'string' ? new Date(matchup.date) : matchup.date)}>
            {matchup.matches.map((match: Match) => <MatchCard {...match}/>)}
        </Card> 
        )}
        </Panel>
      <Panel className={classes.panel} header="Ranking">
        <span>TODO</span>
        </Panel>
    </div>
  );
};

LeagueDetailsPage.displayName = 'LeagueDetails';

export default LeagueDetailsPage;
