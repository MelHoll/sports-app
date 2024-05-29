import classes from 'styles/_common.module.scss';
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
import { strings } from 'src/shared/localizations/strings';
import RankingsPanel from 'src/panels/ranking';
import LeagueCard from 'src/shared/components/card/league-card';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>   
     {leagueData && <div><LeagueCard league={leagueData.league}/></div>}
     <div className={classes.flex}>
        <Panel className={classes.mainPanel} header={strings.league.schedule}>
        {leagueData && leagueData.schedule.map((matchup: Schedule, index: number) => 
          <Card key={index} title={dateFormat.format(typeof matchup.date === 'string' ? new Date(matchup.date) : matchup.date)}>
              <div>{matchup.matches.map((match: Match) => <MatchCard key={crypto.randomUUID()} match={match}/>)}</div>
          </Card> 
        )}
        </Panel>
        {leagueData && <RankingsPanel rankings={leagueData?.rankings}/>}
      </div>
    </div>
  );
};

LeagueDetailsPage.displayName = 'LeagueDetails';

export default LeagueDetailsPage;
