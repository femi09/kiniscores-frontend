import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export const getPremierLeagueFixtures = (day) => {
    // return femi.get(`${kiniscoresApi}/fixtures`);
    return femi.get(`${kiniscoresApi}/fixtures?day=${day}`)
    // return femi.get(`http://localhost:5001/api/fixtures?day=${day}`)
};

export const getNextPremierLeagueFixtures = () => {
    return femi.get(`${kiniscoresApi}/fixtures/nextFixtures`)
}

export const getLastPremierLeagueFixtures = () => {
    return femi.get('http://localhost:5001/api/fixtures/lastFixtures')
}