import List from '.';
import LeagueCard from 'components/card/league-card';
import classes from './styles.module.scss';
import { useNavigate } from "react-router-dom";

export const LeagueList = () => {
    const navigate = useNavigate();

    const elements = [
        {
            id: '321',
            name: 'Cooed Quads', 
            level: 'BB', 
            location: 'Miller Park',
            day: 'Thursday', 
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            id: '4321',
            name: "Men's Doubles", 
            level: 'A', 
            location: 'Miller Park',
            day: 'Monday', 
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            id: '3210',
            name: 'Cooed Doubles', 
            level: 'BB', 
            location: 'Miller Park',
            day: 'Wednesday', 
            startDate: new Date(),
            endDate: new Date(),
        }
    ];

  return <List elements={elements?.map((league) => 
        () => <div 
                key={league.id}
                className={`${classes.wrapper} ${classes.clickable}`} 
                onClick={() => navigate(`/leagues/${league.id}`)}>
                    <LeagueCard league={league} />
            </div>
    )}/>;
};

LeagueList.displayName = 'LeagueList';

export default LeagueList;
