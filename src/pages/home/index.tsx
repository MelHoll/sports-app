import { useState } from "react";
import classes from './styles.module.scss';
import Panel from "components/panel";
import Button from "components/button";


const Home = () => {
  return (
    <div className={classes.container}>
      <Panel className={classes.panel} header="Active Leagues">
        <span>Test</span>
        <Button label="Test Button"/>
        <Button disabled label="Test Button"/>
        <Button secondary label="Test Button"/>
        </Panel>
      <Panel className={classes.panel} header="Upcoming Games"><span>Test2</span></Panel>
    </div>
  );
};

export default Home;
