import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { strings } from 'src/shared/localizations/strings';
import { Home } from 'src/pages';
import { Header } from 'components/index';
import ConfirmMessage from 'components/confirmMessage';

const { routeNames } = strings;

export interface RouteType {
  path: string;
  name?: string;
  Component: () => JSX.Element;
}

const routes: RouteType[] = [
  { path: '/', name: routeNames.home, Component: Home },
  { path: '*', Component: () => <ConfirmMessage title={'No Page Found'} content={'This page does not exist.'}/> },
];

const AppRouter = () => {
  return (
    <Router>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path} element={<div id={'page-wrapper'}><Component /></div>} />
          ))}
        </Routes>
    </Router>
  );
};

export default AppRouter;
