import { HttpResponse, http } from "msw";
import LeagueList from 'src/mocks/data/leagueList.json';
import LeagueDetails from 'src/mocks/data/leagueDetails.json';
import Team from 'src/mocks/data/team.json';
import Upcoming from 'src/mocks/data/upcomingMatches.json';
import GameResult from 'src/mocks/data/gameResult.json';
import Ranking from 'src/mocks/data/ranking.json';
import { API_URL, API_VERSION } from "src/shared/constants";

const handlers = [
    http.get(`${API_URL}/${API_VERSION}/league`, () => {
        return HttpResponse.json(LeagueList);
    }), 
    http.get(`${API_URL}/${API_VERSION}/league/details/*`, () => {
        return HttpResponse.json(LeagueDetails);
    }), 
    http.get(`${API_URL}/${API_VERSION}/team/ranking/*`, () => {
        return HttpResponse.json(Ranking);
    }), 
    http.get(`${API_URL}/${API_VERSION}/team/*`, () => {
        return HttpResponse.json(Team);
    }), 
    http.get(`${API_URL}/${API_VERSION}/upcoming/*`, () => {
        return HttpResponse.json(Upcoming);
    }), 
    http.post(`${API_URL}/${API_VERSION}/match/*/game/*`, () => {
        return HttpResponse.json(GameResult);
    }), 
    http.delete(`${API_URL}/${API_VERSION}/match/*/game/*`, () => {
        return HttpResponse.json(true);
    }), 
];

export default handlers;