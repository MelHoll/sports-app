import classes from 'styles/_common.module.scss';
import LeaguesPanel from 'src/shared/components/panel/league-panel';
import UpcomingGamesPanel from 'src/shared/components/panel/upcoming-games-panel';

const HomePage = () => {
  return (
    <div className={classes.mainContainer}>
      <LeaguesPanel />
      <UpcomingGamesPanel />
    </div>
  );
};

HomePage.displayName = 'Home';

export default HomePage;
