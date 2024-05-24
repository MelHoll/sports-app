import { HttpResponse, http } from "msw";
import LeagueList from 'src/mocks/data/leagueList.json';
import LeagueDetails from 'src/mocks/data/leagueDetails.json';
import Team from 'src/mocks/data/team.json';
import Upcoming from 'src/mocks/data/upcomingMatches.json';
import { API_URL, API_VERSION } from "src/shared/constants";

const handlers = [
    http.get(`${API_URL}/${API_VERSION}/league`, () => {
        return HttpResponse.json(LeagueList);
    }), 
    http.get(`${API_URL}/${API_VERSION}/league/details/321`, () => {
        return HttpResponse.json(LeagueDetails);
    }), 
    http.get(`${API_URL}/${API_VERSION}/team/321`, () => {
        return HttpResponse.json(Team);
    }), 
    http.get(`${API_URL}/${API_VERSION}/upcoming/321`, () => {
        return HttpResponse.json(Upcoming);
    }), 

];

export default handlers;