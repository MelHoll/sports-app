import classes from './styles.module.scss';
import Panel from "components/panel";
import Button from "components/button";
import Card from "src/shared/components/card";
import Edit from 'assets/svg/edit.svg?react';
import Placeholder from 'assets/svg/slider.svg?react';
import LeagueList from "src/shared/components/list/league-list";

const Home = () => {
  return (
    <div className={classes.container}>
      <Panel className={classes.panel} header="Active Leagues">
        <span>Test</span>
        <Button label="Test Button"/>
        <Button disabled label="Test Button"/>
        <Button secondary label="Test Button"/>
        <Card 
          title="Cooed Doubles (BB)" 
          subtitle="Thursdays / Miller Park / May 16 - August 30" 
          buttons={[
            () => <Button LeftIcon={Placeholder} onClick={() => console.log("pressed!!")}/>, 
            () => <Button LeftIcon={Edit} onClick={() => console.log("pressed!!")}/>, 
          ]}
        />
        </Panel>
      <Panel className={classes.panel} header="Upcoming Games">
        <LeagueList />
      </Panel>
    </div>
  );
};

export default Home;
