import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export function getPremierLeagueStandings() {
  return femi.get(`${kiniscoresApi}/standings`);
}

export function getLaLigaStandings() {}

export function SeriAStandings() {}

export function BundesligaStandings() {}

export function getLigueOneStandings() {}

export function getChampionsLeagueStandings() {}

export function getEuropaLeagueStandings() {}

export function getFACupStandings() {}

export function getCarlingCupStandings() {}
