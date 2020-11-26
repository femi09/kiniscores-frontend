import { kiniscoresApi } from "../config.json";
import femi from "./httpService";

export function getLeagueScorers(id) {
  return femi.get(`${kiniscoresApi}/scorers/${id}`);
  // return femi.get(`http://localhost:5001/api/scorers/${id}`)
}


