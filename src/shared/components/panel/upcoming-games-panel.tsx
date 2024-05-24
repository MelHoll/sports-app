import classes from 'styles/_common.module.scss';
import Panel from "components/panel";
import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { League } from 'models/League';
import { Match } from 'models/Match';
import Card from 'src/shared/components/card';
import MatchCard from 'src/shared/components/card/match-card';
import List from 'components/list';

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
    serviceClient.upcomingGamesGet(user.id).then((upcomingLeagues: League[]) => {
      const upcoming: UpcomingMatch[] = [];
      upcomingLeagues.forEach((league) => {
        const upcomingMatch = league.matches.map((match) => { return {
          leagueid: league.id,
          leagueName: `${league.name} (${league.level})`, 
          leagueLocation: league.location, 
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
  }, []);

  return (
      <Panel className={classes.mainPanel} header="Upcoming Games">
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
