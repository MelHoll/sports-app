/// <reference types="vite-plugin-svgr/client" />

import classes from './styles.module.scss';


interface ConfirmMessageProps {
  title: string;
  content: string;
  buttons?: (() => JSX.Element)[];
}

export const ConfirmMessage = ({title, content, buttons}: ConfirmMessageProps) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title} title={title}>{title}</div>
        <div className={classes.content} title={content}>{content}</div>
        {buttons && <div className={classes.buttonContainer} title={content}>
          {buttons.map(Button => <Button />)}
        </div>}
      </div>
    </>
  );
};

ConfirmMessage.displayName = 'Header';

export default ConfirmMessage;
