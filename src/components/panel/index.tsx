import classes from "./styles.module.scss"; //TODO pull classes from common directly?

interface PanelProps {
    children?: JSX.Element[] | JSX.Element;
    header?: string;
    className?: string;
}

export const Panel = ({children, header, ...props}: PanelProps) => {
  return (
    <>
      <div className={`${classes.mainPanel} ${props.className}`}>
        {header && <div className={classes.headerText}>{header}</div>}
        {children}
      </div>
    </>
  );
};

Panel.displayName = 'Panel';

export default Panel;
