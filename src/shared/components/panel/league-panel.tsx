import { useState } from 'react';
import Panel from "components/panel";
import LeagueList from "components/list/league-list";
import Filter, { FilterOption } from 'components/filter';
import { strings } from 'src/shared/localizations/strings';
import classes from './styles.module.scss';


const LeaguesPanel = ({...props}) => {
  const [leagueFilter, setLeagueFilters] = useState<FilterOption[] | undefined>(undefined);

  return (
    <Panel {...props}>
        <div className={classes.flexSpaceBetween}>
            <div className={classes.headerText}>{strings.league.activeLeagues}</div>
        <Filter 
            options={[
                {
                    propertyKey: 'level',
                    propertyName: 'Level',
                    values: ['B', 'BB', 'A']
                },
                {
                    propertyKey: 'day',
                    propertyName: 'Day',
                    values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
                }
            ]}
            onChange={setLeagueFilters} />
        </div>
        <LeagueList filters={leagueFilter}/>
    </Panel>
  );
};

LeaguesPanel.displayName = 'LeaguesPanel';

export default LeaguesPanel;
