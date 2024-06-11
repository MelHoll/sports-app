import List from '.';
import LeagueCard from 'components/card/league-card';
import { FC, useEffect, useState } from 'react';
import { FilterOption } from 'components/filter';
import { serviceClient } from 'src/services/serviceClient';
import { League } from 'src/models/League';
interface LeagueListProps {
    filters?: FilterOption[];
    register?: boolean;
}

export const LeagueList: FC<LeagueListProps> = ({filters, register}) => {
    const [leagues, setLeagues] = useState<League[] | undefined>();

    useEffect(() => {
        serviceClient.leagueGetAll(register).then((leagues: League[])  => {
            setLeagues(leagues);
        });
    }, []);

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
        () => {
        const navigateString = `/${register ? 'register' : 'leagues'}/${league.id}`;
        
        return <div 
                key={league.id}>
                    <LeagueCard 
                    league={league} 
                    navigateTo={navigateString} />
            </div>}
    )}/>;
};

LeagueList.displayName = 'LeagueList';

export default LeagueList;
