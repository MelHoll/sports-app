import classes from 'styles/_common.module.scss';
import Panel from 'src/shared/components/panel';

const RulesPage = () => {
  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.flexSpaceBetween}>
        <div>This is where rules will go.</div>
      </Panel>
    </div>
  );
};

RulesPage.displayName = 'Rules';

export default RulesPage;
