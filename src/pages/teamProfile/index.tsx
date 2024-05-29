import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { useParams } from 'react-router-dom';
import ProfilePage from 'src/shared/components/profile';
import TeamCard from 'src/shared/components/card/team-card';
import { Team } from 'src/models/Team';

const TeamProfilePage = () => {
  const {teamId} = useParams()
  const [team, setTeam] = useState<Team | undefined>();

  useEffect(() => {
    if(teamId){
      serviceClient.teamGet(teamId).then((team: Team) => {
        setTeam(team);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<>
   { team && <ProfilePage profileElement={<TeamCard team={team}/>} leagues={[team.league]} /> }
  </>);
};

TeamProfilePage.displayName = 'TeamProfile';

export default TeamProfilePage;

