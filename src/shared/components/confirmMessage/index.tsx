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
        <div className={classes.headerText} title={title}>{title}</div>
        <div className={classes.content} title={content}>{content}</div>
        {buttons && <div className={classes.buttonContainer}>
          {buttons.map(Button => <Button />)}
        </div>}
      </div>
    </>
  );
};

ConfirmMessage.displayName = 'ConfirmMessage';

export default ConfirmMessage;
