import axios, { Axios } from "axios";
import { League } from "models/League";
import { LeagueDetails } from "models/LeagueDetails";
import { Team } from "models/Team";
import { LeagueTeams } from "models/LeagueTeams";
import { GameResult } from "models/Match";
import { Ranking } from "models/Ranking";
import { API_URL, API_VERSION } from "src/shared/constants";
import { LeagueMatches } from "src/models/LeagueMatches";
import { PlayerProfile } from "src/models/PlayerProfile";

export class ServiceClient {
  private restUrl: string;
  public axiosConfig: { headers: {[id: string]: string}};
  public axiosInstance: Axios;

  constructor(restUrl: string) {
    this.restUrl = restUrl;
    this.axiosConfig = { headers: {} };
    this.axiosInstance = axios.create({
      baseURL: `${restUrl}/${API_VERSION}`,
      headers: this.axiosConfig.headers,
    });
  }

  async playerProfileGet(id: string): Promise<PlayerProfile> {
    const response = await axios.get<PlayerProfile>(`${this.restUrl}/${API_VERSION}/player/${id}`, this.axiosConfig);
    return response.data
  }
 
  async leagueGet(id: string): Promise<League> {
    const response = await axios.get<League>(`${this.restUrl}/${API_VERSION}/league/${id}`, this.axiosConfig);
    return response.data
  }

  async leagueGetAll(): Promise<League[]> {
    const response = await axios.get<League[]>(`${this.restUrl}/${API_VERSION}/league`, this.axiosConfig);
    return response.data
  }

  async leagueDetailGet(id: string): Promise<LeagueDetails> {
    const response = await axios.get<LeagueDetails>(`${this.restUrl}/${API_VERSION}/league/details/${id}`, this.axiosConfig);
    return response.data
  }

  async leagueTeamsGet(leagueId: string): Promise<LeagueTeams> {
    const response = await axios.get<LeagueTeams>(`${this.restUrl}/${API_VERSION}/league/${leagueId}/teams`, this.axiosConfig);
    return response.data
  }

  async upcomingGamesGet(teamId: string): Promise<LeagueMatches[]> {
    const response = await axios.get<LeagueMatches[]>(`${this.restUrl}/${API_VERSION}/upcoming/${teamId}`, this.axiosConfig);
    return response.data
  }

  async teamGet(teamId: string): Promise<Team> {
    const response = await axios.get<Team>(`${this.restUrl}/${API_VERSION}/team/${teamId}`, this.axiosConfig);
    return response.data
  }

  async rankingGetForTeam(teamId: string): Promise<Ranking> {
    const response = await axios.get<Ranking>(`${this.restUrl}/${API_VERSION}/team/ranking/${teamId}`, this.axiosConfig);
    return response.data
  }

  async updateMatchGameResults(matchId: string, gameIndex: number, result: GameResult) {
    const response = await axios.post<GameResult>(`${this.restUrl}/${API_VERSION}/match/${matchId}/game/${gameIndex}`, result, this.axiosConfig);
    return response.data!
  }

  async matchGameRemove(matchId: string, gameIndex: number): Promise<void> {
    await axios.delete(`${this.restUrl}/${API_VERSION}/match/${matchId}/game/${gameIndex}`, this.axiosConfig)
  }
}

export const serviceClient: ServiceClient = new ServiceClient(API_URL);
