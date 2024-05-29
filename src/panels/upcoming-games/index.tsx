import classes from 'styles/_common.module.scss';
import Panel from "components/panel";
import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { Match } from 'models/Match';
import Card from 'src/shared/components/card';
import MatchCard from 'src/shared/components/card/match-card';
import List from 'components/list';
import { strings } from 'src/shared/localizations/strings';
import { LeagueMatches } from 'src/models/LeagueMatches';

interface UpcomingMatch {
  leagueid: string;
  leagueName: string;
  leagueLocation: string;
  match: Match;
}

const UpcomingGamesPanel = () => {
  //const {user} = useAuth();
  const [upcomingMatches, setUpcomingMatches] = useState<UpcomingMatch[] | undefined>();

  const user = {id: "321"}

  useEffect(() => {
    serviceClient.upcomingGamesGet(user.id).then((upcomingLeagues: LeagueMatches[]) => {
      const upcoming: UpcomingMatch[] = [];
      upcomingLeagues.forEach((data) => {
        const upcomingMatch = data.matches.map((match) => { return {
          leagueid: data.league.id,
          leagueName: `${data.league.name} (${data.league.level})`, 
          leagueLocation: data.league.location, 
          match: match
        } as UpcomingMatch})
        upcoming.push(...upcomingMatch);
      });

      upcoming.sort((a, b) => {
        const aTime = typeof a.match.time == 'string' ? new Date(a.match.time).getTime() : a.match.time.getTime();
        const bTime = typeof b.match.time == 'string' ? new Date(b.match.time).getTime() : b.match.time.getTime();
        return  aTime - bTime;
      })

      setUpcomingMatches(upcoming);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <Panel className={classes.mainPanel} header={strings.league.upcomingGames}>
        <List elements={upcomingMatches?.map((upcoming) => () =>  
            <Card key={upcoming.leagueid} title={upcoming.leagueName} subtitle={upcoming.leagueLocation}>
                <MatchCard match={upcoming.match} showDate={true}/>
            </Card>)}
        />
      </Panel>
  );
};

UpcomingGamesPanel.displayName = 'UpcomingGamesPanel';

export default UpcomingGamesPanel;
