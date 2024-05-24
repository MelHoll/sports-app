import List from '.';
import LeagueCard from 'components/card/league-card';
import { useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from 'react';
import { FilterOption } from 'components/filter';
import { serviceClient } from 'src/services/serviceClient';
import { League } from 'src/models/League';
import classes from 'styles/_common.module.scss';

interface LeagueListProps {
    filters?: FilterOption[];
}

export const LeagueList: FC<LeagueListProps> = ({filters}) => {
    const [leagues, setLeagues] = useState<League[] | undefined>();
    const navigate = useNavigate();

    useEffect(() => {
        serviceClient.leagueGetAll().then((leagues: League[])  => {
            setLeagues(leagues);
        });
    }, [])

    const filteredItems = leagues ? leagues.filter((item) => {
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
    }) : [];

    return <List elements={filteredItems?.map((league) => 
        () => <div 
                key={league.id}
                className={`${classes.clickable}`} 
                onClick={() => navigate(`/leagues/${league.id}`)}>
                    <LeagueCard league={league} />
            </div>
    )}/>;
};

LeagueList.displayName = 'LeagueList';

export default LeagueList;
