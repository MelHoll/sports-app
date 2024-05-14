import classes from "./styles.module.scss"; //TODO pull classes from common directly?

interface PanelProps {
    children: JSX.Element[] | JSX.Element;
}

export const Panel = ({children, ...props}: PanelProps) => {
  return (
    <>
      <div {...props} className={classes.mainPanel}>
        {children}
      </div>
    </>
  );
};

Panel.displayName = 'Panel';

export default Panel;
