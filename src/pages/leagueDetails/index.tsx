import classes from './styles.module.scss';
import Panel from "components/panel";
import Card from "components/card";
// import Edit from 'assets/svg/edit.svg?react';
// import Placeholder from 'assets/svg/slider.svg?react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LeagueProps } from 'components/card/league-card';

interface LeagueDetailsProps extends LeagueProps {
  schedule: Schedule[];
  rankings: Rankings;
}

interface Team {
  teamName: string;
  teamId: string;
}

interface Schedule {
  date: Date;
  matches: Match[];
}

interface Match {
  time: Date;
  teamHome: Team;
  teamAway: Team;
  court: string;
}

interface Rankings {
  team: Team;
  ranking: number;
  wins: number;
  ties: number;
  loses: number;
}

const LeagueDetails = () => {
  const { leagueId } = useParams();
  const [leagueData, setLeagueData] = useState<LeagueDetailsProps>();
  const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric'});
  const timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric'})

  useEffect(() => {
    setLeagueData({
      id: leagueId,
      name: 'Cooed Doubles',
      schedule: [{
        date: new Date(),
        matches: [{
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }]
      },{
        date: new Date(),
        matches: [{
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }]
      },{
        date: new Date(),
        matches: [{
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }]
      },{
        date: new Date(),
        matches: [{
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }, {
          time: new Date(),
          teamHome: {
            teamName: 'Party of Two', 
            teamId: '123'
          },
          teamAway: {
            teamName: 'Will work for Sets', 
            teamId: '321'
          }, 
          court: 'Court 1'
        }]
      },]
    } as LeagueDetailsProps);
  }, [])

  return (
    <div className={classes.container}>
      
      <Panel className={classes.panel} header="Schedule">
      {leagueData && leagueData.schedule.map((matchup: Schedule, index: number) => 
        <Card key={index} title={dateFormat.format(matchup.date)}>
            {matchup.matches.map((match: Match, index: number) => 
              <div key={index}> 
                {timeFormat.format(match.time)} 
                {match.court}
                <Link 
                  to={`/leagues/team/${match.teamHome.teamId}`} 
                  title={match.teamHome.teamName}>
                  {match.teamHome.teamName}
                </Link> 
                vs 
                <Link 
                  to={`/leagues/team/${match.teamAway.teamId}`}
                  title={match.teamAway.teamName}>
                  {match.teamAway.teamName}
                </Link>
              </div>
            )}
          </Card> 
        )}
        </Panel>
      <Panel className={classes.panel} header="Ranking">
        <span>TODO</span>
        </Panel>
    </div>
  );
};

export default LeagueDetails;
