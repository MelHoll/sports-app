import { FC } from 'react';
import Panel from "components/panel";
import { strings } from 'src/shared/localizations/strings';
import classes from './styles.module.scss';
import { Ranking } from 'src/models/Ranking';
import List from 'src/shared/components/list';
import RankingCard from 'src/shared/components/card/ranking-card';

interface RankingsProps {
  rankings: Ranking[];
}

const RankingsPanel: FC<RankingsProps> = ({rankings}) => {
  return (
    <Panel className={classes.mainPanel} header={strings.team.ranking}>
      <List elements={rankings?.map((ranking: Ranking) => () => <RankingCard ranking={ranking}/>)}/>
    </Panel>
  );
};

RankingsPanel.displayName = 'RankingsPanel';

export default RankingsPanel;
