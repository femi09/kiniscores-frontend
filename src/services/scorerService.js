import { kiniscoresApi } from "../config.json";
import femi from "./httpService";

export function getPremierLeagueScorers() {
  return femi.get(`${kiniscoresApi}/scorers`);
}

export function getLaLigaScorers() {}

export function SeriAMathches() {}

export function BundesligaScorers() {}

export function getLigueOneScorers() {}

export function getChampionsLeagueScorers() {}

export function getEuropaLeagueScorers() {}

export function getFACupScorers() {}

export function getCarlingCupScorers() {}
