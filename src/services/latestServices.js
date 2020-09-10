import femi from './httpService'
import {kiniscoresApi} from '../config.json'

export function getLatestNews(){
return femi.get(`${kiniscoresApi}/news`)
} 