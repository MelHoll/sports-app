import classes from "./styles.module.scss"; //TODO pull classes from common directly?

interface PanelProps {
    children?: JSX.Element[] | JSX.Element;
    headerItem?: JSX.Element;
    header?: string;
    className?: string;
}

export const Panel = ({children, header, headerItem, ...props}: PanelProps) => {
  return (
    <>
      <div className={`${classes.mainPanel} ${props.className}`}>
        {header &&<div className={classes.flexSpaceBetween}>
            <div className={classes.headerText}>{header}</div>
         {headerItem}
        </div>}
        {children}
      </div>
    </>
  );
};

Panel.displayName = 'Panel';

export default Panel;
