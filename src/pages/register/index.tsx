import classes from 'styles/_common.module.scss';
import Panel from 'src/shared/components/panel';

const RegisterPage = () => {
  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.flexSpaceBetween}>
        <div>List of available leagues to register</div>
      </Panel>
    </div>
  );
};

RegisterPage.displayName = 'Register';

export default RegisterPage;
