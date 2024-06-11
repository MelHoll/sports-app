import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { strings } from 'src/shared/localizations/strings';
import { HomePage } from 'src/pages';
import { Header } from 'components/index';
import ConfirmMessage from 'components/confirmMessage';
import classes from 'styles/_common.module.scss';
import LeaguesPanel from 'src/panels/league';
import LeagueDetailsPage from 'src/pages/leagueDetails';
import RulesPage from 'src/pages/rules';
import TeamsPage from 'src/pages/teams';
import TeamProfilePage from 'src/pages/teamProfile';
import PlayerProfilePage from 'src/pages/playerProfile';
import RegisterLeagueListPage from 'src/pages/register';
import RegisterPage from './pages/register/form';

const { routeNames } = strings;

export interface RouteType {
  path: string;
  name?: string;
  Component: () => JSX.Element;
}

const routes: RouteType[] = [
  { path: '/', name: routeNames.home, Component: HomePage },
  { path: '/leagues', name: routeNames.leagues, Component: () => <LeaguesPanel /> },
  { path: '/leagues/:leagueId', name: routeNames.leagues,  Component: LeagueDetailsPage },
  { path: '/leagues/:leagueId/teams', name: routeNames.leagues,  Component: TeamsPage },
  { path: '/leagues/team/:teamId', name: routeNames.profile,  Component: TeamProfilePage },
  { path: '/leagues/player/:playerId', name: routeNames.profile,  Component: PlayerProfilePage },
  { path: '/rules/', name: routeNames.rules,  Component: RulesPage },
  { path: '/register/', name: routeNames.rules,  Component: RegisterLeagueListPage },
  { path: '/register/:leagueId', name: routeNames.rules,  Component: RegisterPage },
  { path: '*', Component: () => <ConfirmMessage title={strings.error.noPageTitle} content={strings.error.noPageContent}/> },
];

const AppRouter = () => {
  return (
    <Router>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route 
            path={path} 
            key={path} 
            element={<div className={classes.pageWrapper}>
                <div className={classes.page}>
                  <Component />
                </div>
              </div>} />
          ))}
        </Routes>
    </Router>
  );
};

export default AppRouter;
