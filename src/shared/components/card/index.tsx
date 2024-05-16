import { FC } from 'react';
import classes from './styles.module.scss';

interface CardProps {
  title: string;
  subtitle: string;
  buttons?: (() => JSX.Element)[];
}

export const Card: FC<CardProps> = ({title, subtitle, buttons}) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <div className={classes.headerText} title={title}>{title}</div>
          <div className={classes.content} title={subtitle}>{subtitle}</div>
        </div>
        {buttons && <div className={classes.buttonContainer}>
          {buttons.map((Button, index)=> <Button key={index} />)}
        </div>}
      </div>
    </>
  );
};

Card.displayName = 'Card';

export default Card;
