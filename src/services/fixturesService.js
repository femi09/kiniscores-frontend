import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export const getTodaysFixtures = (day) => {
  // return femi.get(`${kiniscoresApi}/fixtures?day=${day}`);
  return femi.get(`http://localhost:5001/api/v0/fixtures?day=${day}`);
};

export const getLeagueFixtures = (day, id) => {
  // return femi.get(`${kiniscoresApi}/fixtures/${id}?day=${day}`);
  return femi.get(`http://localhost:5001/api/v0/fixtures/${id}?day=${day}`)
};

export const getNextLeagueFixtures = (id) => {
  // return femi.get(`${kiniscoresApi}/fixtures/${id}/next`);
  return femi.get(`http://localhost:5001/api/v0/fixtures/${id}/next`)
};

export const getLastLeagueFixtures = (id) => {
  // return femi.get(`${kiniscoresApi}/fixtures/${id}/last`);
  return femi.get(`http://localhost:5001/api/v0/fixtures/${id}/last`)
};
export const getFixtureDetails = (id) => {
  return femi.get(`${kiniscoresApi}/fixtures/fixture/${id}`);
};

export const getHeadtoHead = (teamAId, teamBId) => {
  return femi.get(`${kiniscoresApi}/fixtures/h2h/${teamAId}/${teamBId}`);
};
