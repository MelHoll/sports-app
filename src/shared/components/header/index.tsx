/// <reference types="vite-plugin-svgr/client" />

import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { strings } from 'src/shared/localizations/strings';
import Home from 'assets/svg/home.svg?react';
import Gear from 'assets/svg/settings.svg?react';
import User from 'assets/svg/user-profile.svg?react';
import Sun from 'assets/svg/sun.svg?react';
import Moon from 'assets/svg/moon.svg?react';
import classes from './styles.module.scss';

const NAVIGATION_ITEMS = [
  {
    name: strings.routeNames.home,
    path: '/',
    Icon: Home
  } as NavItemProps,
  {
    name: strings.routeNames.leagues,
    path: '/leagues',
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
  const [theme, setTheme] = useState(document.body.dataset['theme']);

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

const changeTheme = () => {
  const updatedTheme = theme == 'dark'? 'light': 'dark';
  document.body.dataset['theme'] = updatedTheme
  setTheme(updatedTheme);
}

return (
  <>
    <nav className={classes.containerWrapper}>
      <div className={classes.container}>
      <NavLinkList 
        items={NAVIGATION_ITEMS} 
        className={classes.list}
        />
        <div className={classes.rightContainer}>
          <NavLinkList 
            items={profileItems} 
            className={classes.list}
            />
          <a 
            className={`${classes.clickable} ${classes.theme}`} 
            title={strings.common.changeTheme}
            onClick={changeTheme}>
            { theme == 'dark' ? 
              <Sun fill={classes.iconColor} height={20} width={20}/> : 
              <Moon fill={classes.iconColor} height={20} width={20}/>}
          </a>
        </div>
      </div>
    </nav>
  </>
);};

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
