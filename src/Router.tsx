import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { strings } from './shared/localizations/strings';
import { Home } from './pages';
import { Header } from './components';
import ConfirmMessage from './components/confirmMessage';
import Panel from './components/panel';

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
            <Route path={path} key={path} element={<Panel id={'page-wrapper'}><Component /></Panel>} />
          ))}
        </Routes>
    </Router>
  );
};

export default AppRouter;
