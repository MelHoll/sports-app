import { useState } from "react";
import classes from './styles.module.scss';
import Panel from "../../components/panel";


const Home = () => {
  return (
    <div className={classes.container}>
      <Panel className={classes.panel} header="Active Leagues"><span>Test</span></Panel>
      <Panel className={classes.panel} header="Upcoming Games"><span>Test2</span></Panel>
    </div>
  );
};

export default Home;
