import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export const getPremierLeagueFixtures = () => {
    return femi.get(`${kiniscoresApi}/fixtures`);
};
