import classes from 'styles/_common.module.scss';
import LeaguesPanel from 'src/panels/league';
import UpcomingGamesPanel from 'src/panels/upcoming-games';

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
