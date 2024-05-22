import axios, { Axios } from "axios";
import { League } from "src/models/League";
import { LeagueDetails } from "src/models/LeagueDetails";
import { Match } from "src/models/Match";
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
    console.log(response);
    return response.data
  }

  async matchesGetForTeam(teamId: string): Promise<Match[]> {
    const response = await axios.get<Match[]>(`${this.restUrl}/${API_VERSION}/team/${teamId}/matches/`, this.axiosConfig);
    return response.data
  }
}

export const serviceClient: ServiceClient = new ServiceClient(API_URL);
