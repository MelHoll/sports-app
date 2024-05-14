import { NavLink } from 'react-router-dom';
import classes from './styles.module.scss';
import { strings } from '../../shared/localizations/strings';
import reactLogo from '../../assets/react.svg'

const NAVIGATION_ITEMS = [
  {
    name: strings.routeNames.home,
    path: '/',
    icon: reactLogo
  },
  {
    name: strings.routeNames.rules,
    path: '/rules',
  },
  {
    name: strings.routeNames.sublist,
    path: '/sublist',
  },
  {
    name: strings.routeNames.register,
    path: '/register',
  },
];

export const Header = () => {

  return (
    <>
      <nav className={classes.container}>
          <ul className={classes.list}>
            {NAVIGATION_ITEMS.map(item => {
              return  <NavLink
                  className={({ isActive }) => `${classes.item} ${classes.noTextDecoration} ${isActive ? classes.active : ''}`}
                  to={item.path}
                  key={item.path}
                  title={item.name}
                >
                  {/* {item.icon ? <img src={item.icon} /> : null} */}
                  <li>{item.name}</li>
                </NavLink>
            })}
          </ul>
      </nav>
    </>
  );
};

Header.displayName = 'Header';

export default Header;
