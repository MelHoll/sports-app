import classes from 'styles/_common.module.scss';
import Panel from 'src/shared/components/panel';
import { FieldType, Form } from 'form/form-builder';
import { FieldValues } from 'react-hook-form';
import LeagueCard from 'src/shared/components/card/league-card';
import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { useParams } from 'react-router-dom';
import { League } from 'src/models/League';
import { strings } from 'src/shared/localizations/strings';

interface IRegisterData {
  FirstName: string, 
  LastName: string, 
  TeamName: string,
}

const defaultValues = { 
  FirstName: '', 
  LastName: '', 
  TeamName: '' 
};

const fields = [
    {
      type: FieldType.Text,
      label: strings.register.firstNameLabel,
      required: true, 
      name: "FirstName"
    }, 
    {
      type: FieldType.Text,
      label: strings.register.lastNameLabel,
      required: true, 
      name: "LastName"
    }, 
    {
      type: FieldType.Text,
      label: strings.register.teamNameLabel,
      required: true, 
      name: "TeamName"
    }, 
    {
      type: FieldType.Select,
      label: "Test",
      required: true, 
      name: "Test", 
      options: [{
        value: "value", 
        display: "Display of Value"
      },{
        value: "value2", 
        display: "Display of Value2"
      } ]
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
      <Panel className={classes.flexColumn}>
        {league && <LeagueCard league={league} />}
        <Form<IRegisterData> 
          onSubmitForm={(data: FieldValues) => {
            console.log(data);
          }}
          defaultValues={defaultValues} 
          fields={fields}        
        />
      </Panel>
    </div>
  );
};

RegisterPage.displayName = 'Register';

export default RegisterPage;
