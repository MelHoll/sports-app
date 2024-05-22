import { HttpResponse, http } from "msw";
import LeagueList from 'src/mocks/data/leagueList.json';
import LeagueDetails from 'src/mocks/data/leagueDetails.json';
import Matches from 'src/mocks/data/matches.json';
import { API_URL, API_VERSION } from "src/shared/constants";

const handlers = [
    http.get(`${API_URL}/${API_VERSION}/league`, () => {
        return HttpResponse.json(LeagueList);
    }), 
    http.get(`${API_URL}/${API_VERSION}/league/details/321`, () => {
        return HttpResponse.json(LeagueDetails);
    }), 
    http.get(`${API_URL}/${API_VERSION}/team/321/matches`, () => {
        return HttpResponse.json(Matches);
    }), 
];

export default handlers;