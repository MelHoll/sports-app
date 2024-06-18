import commonClasses from "styles/_common.module.scss";
import classes from './styles.module.scss';

interface PanelProps extends React.HTMLProps<HTMLDivElement> {
    headerItem?: JSX.Element;
    header?: string;
    bottomElement?: JSX.Element
}

export const Panel = ({children, header, headerItem, bottomElement, ...props}: PanelProps) => {
  return (
    <div {...props} className={`${commonClasses.mainPanel} ${classes.mainPanel} ${props.className}`}>
      {header &&<div className={commonClasses.flexSpaceBetween}>
          <div className={commonClasses.headerText} title={header}>{header}</div>
        {headerItem}
      </div>}
      {children}
      { bottomElement && <div className={classes.bottomElement}>{bottomElement}</div> }
    </div>
  );
};

Panel.displayName = 'Panel';

export default Panel;
