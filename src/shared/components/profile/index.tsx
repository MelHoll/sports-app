import classes from 'styles/_common.module.scss';
import Panel from "components/panel";
import MatchCard from 'src/shared/components/card/match-card';
import { FC, } from 'react';
import { Match } from 'src/models/Match';
import List from 'src/shared/components/list';
import LeagueCard from 'src/shared/components/card/league-card';
import { strings } from 'src/shared/localizations/strings';
import { League } from 'src/models/League';

interface ProfileProps {
  profileElement: JSX.Element;
  leagues: League[];
}

const ProfilePage: FC<ProfileProps> = ({profileElement, leagues}) => {
  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.mainPanel} header={strings.routeNames.profile}> 
        {profileElement}
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
