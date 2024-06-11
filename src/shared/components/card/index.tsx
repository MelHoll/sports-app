import { FC } from 'react';
import classes from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export interface CardProps {
  title?: string;
  subtitle?: string;
  buttons?: (() => JSX.Element)[];
  children?: JSX.Element[] | JSX.Element;
  navigateTo?: string;
}

export const Card: FC<CardProps> = ({title, subtitle, buttons, navigateTo, children}) => {
  const navigate = useNavigate();

  return (
    <div key={crypto.randomUUID()} className={`${classes.container} ${classes.cardStyles}`}>
      <div 
        className={`${classes.textContainer} ${navigateTo ? classes.clickable : ''}`}
        onClick={() => {if(navigateTo)navigate(navigateTo)}}>
        <div className={classes.headerText} title={title}>{title}</div>
        {subtitle && <div className={classes.content} title={subtitle}>{subtitle}</div>}
      </div>
      {children}
      {buttons && <div className={classes.buttonContainer}>
        {buttons.map((Button, index)=> <Button key={index} />)}
      </div>}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
