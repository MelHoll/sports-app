import classes from 'styles/_common.module.scss';
import Panel from 'src/shared/components/panel';
import { FieldType, Form } from 'form/form-builder';
import { FieldValues } from 'react-hook-form';

interface IFormInputs {
  FirstName: string, 
  LastName: string
}

const RegisterPage = () => {
  const fields = [
    {
      type: FieldType.Text,
      label: "First Name",
      required: true, 
      name: "FirstName"
    }, 
    {
      type: FieldType.Text,
      label: "Last Name",
      required: true, 
      name: "LastName"
    }, 
  ];

  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.flexSpaceBetween}>
        <div>List of available leagues to register</div>
        <Form<IFormInputs> 
          onSubmitForm={(data: FieldValues) => {
            console.log(data);
          } }
          defaultvalues={{ 
            FirstName: '', 
            LastName: '' 
          }} 
          fields={fields}        
        />
      </Panel>
    </div>
  );
};

RegisterPage.displayName = 'Register';

export default RegisterPage;
