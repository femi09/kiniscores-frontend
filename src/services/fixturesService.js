import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export const getPremierLeagueFixtures = () => {
    return femi.get(`${kiniscoresApi}/fixtures`);
};

export const getNextPremierLeagueFixtures = () => {
    // return femi.get(`${kiniscoresApi}/fixtures/nextFixtures`)
    return femi.get('http://localhost:5001/api/fixtures/nextFixtures')
}