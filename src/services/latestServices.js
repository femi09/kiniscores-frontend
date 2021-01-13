import femi from "./httpService";
import { kiniscoresApi } from "../config.json";

export function getLatestNews() {
  return femi.get(`${kiniscoresApi}/news`);
}

export function getLatestNewsBody(id) {
  return femi.get(`${kiniscoresApi}/news/${id}`)
//   return femi.get(`http://localhost:5001/api/news/${id}`);
}

export function getTweets() {
  // return femi.get(`${kiniscoresApi}/news/${id}`)
  return femi.get(`http://localhost:5001/api/recent/tweets`);
}