import axios, { Axios } from "axios";
import { League } from "models/League";
import { LeagueDetails } from "models/LeagueDetails";
import { Team } from "models/Team";
import { Ranking } from "src/models/Ranking";
import { API_URL, API_VERSION } from "src/shared/constants";

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

  async upcomingGamesGet(teamId: string): Promise<League[]> {
    const response = await axios.get<League[]>(`${this.restUrl}/${API_VERSION}/upcoming/${teamId}`, this.axiosConfig);
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

  async rankingGetForLeague(id: string): Promise<Ranking[]> {
    const response = await axios.get<Ranking[]>(`${this.restUrl}/${API_VERSION}/league/ranking/${id}`, this.axiosConfig);
    return response.data
  }
}

export const serviceClient: ServiceClient = new ServiceClient(API_URL);
