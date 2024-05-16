import List from '.';
import classes from './styles.module.scss';
import LeagueCard from 'components/card/league-card';
import { useNavigate } from "react-router-dom";
import { FC } from 'react';
import { FilterOption } from 'components/filter';

interface LeagueListProps {
    filters?: FilterOption[];
}

export const LeagueList: FC<LeagueListProps> = ({filters}) => {
    const navigate = useNavigate();

    const items = [
        {
            id: '321',
            name: 'Cooed Quads', 
            level: 'B', 
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
            id: '54321',
            name: "Women's Doubles", 
            level: 'A', 
            location: 'Miller Park',
            day: 'Wednesday', 
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

    const filteredItems = items.filter((item) => {
        if(!filters) return true;

        let include = false;
        filters.forEach((filter) => { //TODO currently OR between properties. Maybe make configurable
            const key = filter.propertyKey as keyof typeof item;
            const value = item[key].toString();
            
            if(filter.values.includes(value)) {
                include = true;
                return;
            }
        });

        return include;
    });

    return <List elements={filteredItems?.map((league) => 
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
