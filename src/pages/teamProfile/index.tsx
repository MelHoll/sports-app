import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { useParams } from 'react-router-dom';
import ProfilePage from 'src/shared/components/profile';
import TeamCard from 'src/shared/components/card/team-card';
import { TeamMatches } from 'src/models/TeamMatches';

const TeamProfilePage = () => {
  const {teamId} = useParams()
  const [team, setTeam] = useState<TeamMatches | undefined>();

  useEffect(() => {
    if(teamId){
      serviceClient.teamMatchesGet(teamId).then((team: TeamMatches) => {
        setTeam(team);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (<>
   { team && <ProfilePage profileElement={<TeamCard team={team.team}/>} 
                          leagues={[team.leagueMatches]} /> }
  </>);
};

TeamProfilePage.displayName = 'TeamProfile';

export default TeamProfilePage;

