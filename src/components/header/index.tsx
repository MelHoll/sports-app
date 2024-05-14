/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from 'react-router-dom';
import classes from './styles.module.scss';
import { strings } from '../../shared/localizations/strings';
import Logo from '../../assets/react.svg?react';

const NAVIGATION_ITEMS = [
  {
    name: strings.routeNames.home,
    path: '/',
    Icon: Logo
  } as NavItemProps,
  {
    name: strings.routeNames.rules,
    path: '/rules',
  } as NavItemProps,
  {
    name: strings.routeNames.sublist,
    path: '/sublist',
  } as NavItemProps,
  {
    name: strings.routeNames.register,
    path: '/register',
  } as NavItemProps,
];

interface NavItemProps {
  name: string;
  path: string;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const Header = () => {
  const isSignedIn = true;

const profileItems = isSignedIn ? [
  {
    name: strings.routeNames.profile,
    path: '/profile',
    Icon: Logo
  } as NavItemProps,
  {
    name: strings.routeNames.settings,
    path: '/settings',
    Icon: Logo
  } as NavItemProps,
] : [
  {
    name: strings.routeNames.login,
    path: '/login',
  } as NavItemProps
];

  return (
    <>
      <nav className={classes.container}>
        <NavLinkList 
          items={NAVIGATION_ITEMS} 
          className={classes.list}
          />
          <NavLinkList 
          items={profileItems} 
          className={classes.list}
          />
      </nav>
    </>
  );
};

interface NavLinkListProps {
  items: NavItemProps[];
  className: string | undefined;
  iconSize?: number;
}

const NavLinkList = ({ 
  items, 
  className, 
  iconSize = 18
}: NavLinkListProps)  => {
  return <ul className={className}>
    {items.map(item => {
      const Icon = item.Icon;
      return  <NavLink
        className={({ isActive }) => `${classes.item} ${classes.noTextDecoration} ${isActive ? classes.active : ''}`}
        to={item.path}
        key={item.path}
        title={item.name}
        >
        {Icon ? <Icon className={classes.icon} height={iconSize} width={iconSize} /> : null}
        <li>{item.name}</li>
      </NavLink>
 })}
</ul>
}

Header.displayName = 'Header';

export default Header;
