import { FC } from 'react';
import classes from './styles.module.scss';

export interface CardProps {
  title?: string;
  subtitle?: string;
  buttons?: (() => JSX.Element)[];
  children?: JSX.Element[] | JSX.Element;
}

export const Card: FC<CardProps> = ({title, subtitle, buttons, children}) => {
  return (
    <div key={crypto.randomUUID()} className={`${classes.container} ${classes.cardStyles}`}>
      <div className={classes.textContainer}>
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
