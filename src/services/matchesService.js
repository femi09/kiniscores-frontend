import femi from './httpService'
import { kiniscoresApi } from '../config.json'


export function getLeagueResults(matchday, id){
    return femi.get(`${kiniscoresApi}/results/${id}/${matchday}`)
    // return femi.get(`http://localhost:5001/api/results/${id}/${matchday}`)
}

export function getMatchday(id){
    return femi.get(`${kiniscoresApi}/results/${id}/matchday`)
    // return femi.get(`http://localhost:5001/api/results/${id}/matchday`)
}

