import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export function getLeagueStandings(id) {
  // return femi.get(`${kiniscoresApi}/standings/${id}`);
  return femi.get(`http://localhost:5001/api/v0/standings/${39}`)
}


