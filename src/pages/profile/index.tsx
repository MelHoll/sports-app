import classes from './styles.module.scss';
import Panel from "components/panel";
import Button from "components/button";
import Card from "src/shared/components/card";
import Edit from 'assets/svg/edit.svg?react';
import Placeholder from 'assets/svg/slider.svg?react';
import MatchCard from 'src/shared/components/card/match-card';
import { useEffect, useState } from 'react';
import { serviceClient } from 'src/services/serviceClient';
import { Match } from 'src/models/Match';

const ProfilePage = () => {
  const [matches, setMatches] = useState<Match[] | undefined>();

  useEffect(() => {
    serviceClient.matchesGetForTeam("321").then((matches: Match[]) => {
      setMatches(matches);
    });
  }, [])

  return (
    <div className={classes.container}>
      <Panel className={classes.panel} header="Profile Info"/>
      <Panel className={classes.panel} header="Leagues">
        <Card 
          title="Cooed Doubles (BB)" 
          subtitle="Thursdays / Miller Park / May 16 - August 30" 
          buttons={[
            () => <Button LeftIcon={Placeholder} onClick={() => console.log("pressed!!")}/>, 
            () => <Button LeftIcon={Edit} onClick={() => console.log("pressed!!")}/>, 
          ]}
        >
          { matches?.map((match: Match) =>  <MatchCard {...match}/>) }
        </Card>
        </Panel>
    </div>
  );
};

ProfilePage.displayName = 'Profile';

export default ProfilePage;
