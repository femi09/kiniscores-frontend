import femi from './httpService'
import {kiniscoresApi} from '../config.json'


export function getPremierLeagueResults(matchday){
    return femi.get(`http://localhost:5001/api/results/${matchday}`)
}

export function getMatchday(){
    return femi.get("http://localhost:5001/api/results/matchday")
}

export function getLaLigaMatches() {}

export function SeriAMathches() {}

export function BundesligaMatches() {}

export function getLigueOneMatches() {}

export function getChampionsLeagueMatches() {}

export function getEuropaLeagueMatches() {}

export function getFACupMatches() {}

export function getCarlingCupMatches() {}
