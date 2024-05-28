import commonClasses from "styles/_common.module.scss";
import classes from './styles.module.scss';

interface PanelProps {
    children?: JSX.Element[] | JSX.Element;
    headerItem?: JSX.Element;
    header?: string;
    bottomElement?: JSX.Element
    className?: string;
}

export const Panel = ({children, header, headerItem, bottomElement, ...props}: PanelProps) => {
  return (
    <>
      <div className={`${commonClasses.mainPanel} ${classes.mainPanel} ${props.className}`}>
        {header &&<div className={commonClasses.flexSpaceBetween}>
            <div className={commonClasses.headerText}>{header}</div>
         {headerItem}
        </div>}
        {children}
        { bottomElement && <div className={classes.bottomElement}>{bottomElement}</div> }
      </div>
    </>
  );
};

Panel.displayName = 'Panel';

export default Panel;
