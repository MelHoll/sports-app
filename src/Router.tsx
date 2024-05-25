import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { strings } from 'src/shared/localizations/strings';
import { HomePage } from 'src/pages';
import { Header } from 'components/index';
import ConfirmMessage from 'components/confirmMessage';
import classes from 'styles/_common.module.scss';
import LeaguesPanel from './panels/league';
import LeagueDetailsPage from 'src/pages/leagueDetails';
import ProfilePage from './pages/profile';

const { routeNames } = strings;

export interface RouteType {
  path: string;
  name?: string;
  Component: () => JSX.Element;
}

const routes: RouteType[] = [
  { path: '/', name: routeNames.home, Component: HomePage },
  { path: '/leagues', name: routeNames.leagues, Component: () => <LeaguesPanel /> },
  { path: '/leagues/:leagueId', name: routeNames.leagues,  Component: LeagueDetailsPage},
  { path: '/leagues/team/:teamId', name: routeNames.profile,  Component: ProfilePage},
  { path: '*', Component: () => <ConfirmMessage title={'No Page Found'} content={'This page does not exist.'}/> },
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
