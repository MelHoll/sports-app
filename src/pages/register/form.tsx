import classes from 'styles/_common.module.scss';
import Panel from 'src/shared/components/panel';
import { FieldType, Form } from 'form/form-builder';
import { FieldValues } from 'react-hook-form';
import LeagueCard from 'src/shared/components/card/league-card';
import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { useParams } from 'react-router-dom';
import { League } from 'src/models/League';

interface IFormInputs {
  FirstName: string, 
  LastName: string
}

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
    {
      type: FieldType.Text,
      label: "Team Name",
      required: true, 
      name: "TeamName"
    }, 
];

const RegisterPage = () => {
  const { leagueId } = useParams();
  const [league, setLeague] = useState<League | undefined>();
  
  useEffect(() => {
    if(leagueId) {
        serviceClient.leagueGet(leagueId).then((response) => {
            setLeague(response);
        });
    }
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Panel className={classes.flexSpaceBetween}>
        {league && <LeagueCard league={league} />}
        <Form<IFormInputs> 
          onSubmitForm={(data: FieldValues) => {
            console.log(data);
          } }
          defaultValues={{ 
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
