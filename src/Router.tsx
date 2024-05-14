import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { strings } from './shared/localizations/strings';
import { Home } from './pages';
import { Header } from './components';

const { routeNames } = strings;

export interface RouteType {
  path: string;
  name: string;
  Component: JSX.Element;
}

const routes: RouteType[] = [
  { path: '/', name: routeNames.home, Component: <Home /> },
];

const AppRouter = () => {
  return (
    <Router>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path} element={Component} />
          ))}
        </Routes>
    </Router>
  );
};

export default AppRouter;
