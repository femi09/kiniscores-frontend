import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export const getPremierLeagueFixtures = (day) => {
    return femi.get(`${kiniscoresApi}/fixtures?day=${day}`)
    // return femi.get(`http://localhost:5001/api/fixtures?day=${day}`)
};

export const getNextPremierLeagueFixtures = () => {
    return femi.get(`${kiniscoresApi}/fixtures/next`)
}

export const getFixtureDetails = (id) => {
    return femi.get(`${kiniscoresApi}/fixtures/fixture/${id}`)
}

export const getHeadtoHead = (teamAId, teamBId) => {
    return femi.get(`${kiniscoresApi}/fixtures/h2h/${teamAId}/${teamBId}`)
}
