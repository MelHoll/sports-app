import classes from 'styles/_common.module.scss';
import Panel from 'src/shared/components/panel';
import LeagueList from 'src/shared/components/list/league-list';

const RegisterLeagueListPage = () => {

  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.flexSpaceBetween}>
        <LeagueList register />
      </Panel>
    </div>
  );
};

RegisterLeagueListPage.displayName = 'RegisterLeagueList';

export default RegisterLeagueListPage;
