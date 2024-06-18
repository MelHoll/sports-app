import { FC, useState } from 'react';
import Panel from "components/panel";
import LeagueList from "components/list/league-list";
import Filter, { FilterOption } from 'components/filter';
import { strings } from 'src/shared/localizations/strings';
import classes from './styles.module.scss';

interface LeaguePanelProps {
  register?: boolean;
}

const LeaguesPanel: FC<LeaguePanelProps> = ({register = false}) => {
  const [leagueFilter, setLeagueFilters] = useState<FilterOption[] | undefined>(undefined);

  return (
    <Panel className={classes.mainPanel} 
        header={register ? strings.league.register : strings.league.activeLeagues}
        headerItem={<Filter 
        options={[ //TODO programatically generate from data
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
        onChange={setLeagueFilters} />}>
        <LeagueList register={register} filters={leagueFilter}/>
    </Panel>
  );
};

LeaguesPanel.displayName = 'LeaguesPanel';

export default LeaguesPanel;
