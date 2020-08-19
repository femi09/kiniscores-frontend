import femi from './httpService'
import {kiniscoresApi} from '../config.json'


export function getPremierLeagueMatches() {
    return femi.get(`${kiniscoresApi}/matches`)
}

export function getPrevPremierLeagueMatches(matchday){
    return femi.get(`${kiniscoresApi}/matches?matchday=${matchday}`)
}

export function getLaLigaMatches() {}

export function SeriAMathches() {}

export function BundesligaMatches() {}

export function getLigueOneMatches() {}

export function getChampionsLeagueMatches() {}

export function getEuropaLeagueMatches() {}

export function getFACupMatches() {}

export function getCarlingCupMatches() {}
