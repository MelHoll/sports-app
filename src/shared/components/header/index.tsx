/// <reference types="vite-plugin-svgr/client" />

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { strings } from 'src/shared/localizations/strings';
import Home from 'assets/svg/home.svg?react';
import Gear from 'assets/svg/settings.svg?react';
import User from 'assets/svg/user-profile.svg?react';
import classes from './styles.module.scss';

const NAVIGATION_ITEMS = [
  {
    name: strings.routeNames.home,
    path: '/',
    Icon: Home
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

interface HeaderProps {
  isSignedIn?: boolean
}

export const Header: FC<HeaderProps> = ({isSignedIn = false}) => {

const profileItems = isSignedIn ? [
  {
    name: strings.routeNames.profile,
    path: '/profile',
    Icon: User
  } as NavItemProps,
  {
    name: strings.routeNames.settings,
    path: '/settings',
    Icon: Gear
  } as NavItemProps,
] : [
  {
    name: strings.routeNames.login,
    path: '/login',
    Icon: User
  } as NavItemProps
];

  return (
    <>
      <nav className={classes.containerWrapper}>
        <div className={classes.container}>
        <NavLinkList 
          items={NAVIGATION_ITEMS} 
          className={classes.list}
          />
          <NavLinkList 
          items={profileItems} 
          className={classes.list}
          />
          </div>
      </nav>
    </>
  );
};

interface NavLinkListProps {
  items: NavItemProps[];
  className: string | undefined;
  iconSize?: number;
}

const NavLinkList: FC<NavLinkListProps> = ({ 
  items, 
  className, 
  iconSize = 18
})  => {
  return <ul className={className}>
    {items.map(item => {
      const Icon = item.Icon;
      return  <NavLink
        className={({ isActive }) => `${classes.item} ${classes.noTextDecoration} ${isActive ? classes.active : ''}`}
        to={item.path}
        key={item.path}
        title={item.name}
        >
        {Icon ? <Icon className={classes.icon} fill={classes.iconColor} height={iconSize} width={iconSize} /> : null}
        <li>{item.name}</li>
      </NavLink>
 })}
</ul>
}

Header.displayName = 'Header';

export default Header;
