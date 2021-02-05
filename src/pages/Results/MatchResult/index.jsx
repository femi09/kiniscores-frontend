import React from "react";
import moment from "moment";
import { truncateString } from "../../../utils/truncate";
import "./index.css";
const Result = ({ match, matchDate, matchTime }) => {
  let today = new Date();
  return (
    <>
      <div className="result mb-2 grid grid-cols-3 py-6 bg-gray-300 sm:mb-0">
        <div className="flex items-center col-span-2 justify-between mx-2 sm:mx-4">
          <div className="flex flex-col justify-start text-sm items-start font-bold text-blue-800 left">
            <div className="flex justify-between items-center py-2 sm:p-2 team-name">
              <img
                className="w-5 h-5 mr-2 sm:mr-4"
                src={match.homeTeam.logo}
                alt=""
              />
              <p>{truncateString(match.homeTeam.team_name, 15)}</p>
            </div>
            <div className="flex justify-between items-center py-2 sm:p-2 team-name">
              <img
                className="w-5 h-5 mr-2 sm:mr-4"
                src={match.awayTeam.logo}
                alt=""
              />
              <p>{truncateString(match.awayTeam.team_name, 15)}</p>
            </div>
          </div>
          {match.statusShort === "NS" ||
          match.statusShort === "PST" ||
          match.statusShort === "TBD" ||
          match.statusShort === "CANC" ? (
            <div className="text-xs font-bold text-white middle sm:text-sm"></div>
          ) : match.statusShort === "FT" ? (
            <div className="text-xs font-bold text-white middle sm:text-sm ">
              <p className="bg-blue-900 px-2 py-1 my-2 rounded-lg sm:my-1  sm:py-2 sm:px-3">
                {match.goalsHomeTeam}
              </p>
              <p className="bg-blue-900 px-2 py-1 my-2 rounded-lg sm:my-1 sm:py-2 sm:px-3">
                {match.goalsAwayTeam}
              </p>
            </div>
          ) : (
            <div className="text-xs font-bold text-white middle sm:text-xs">
              <p className="bg-pink-500 px-2 py-1 my-1 rounded-lg sm:py-2 sm:px-3 ">
                {match.goalsHomeTeam}
              </p>
              <p className="bg-pink-500 px-2 py-1 my-1 rounded-lg sm:py-2 sm:px-3 ">
                {match.goalsAwayTeam}
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center text-xs text-center font-semibold text-blue-800 right border-l-2">
          {match.statusShort === "NS" ? (
            <p className="py-1 px-3"></p>
          ) : (
            <p className="py-1 px-3">{match.statusShort}</p>
          )}
          {match.statusShort === "1H" ||
          match.statusShort === "2H" ||
          match.statusShort === "HT" ? (
            <div className="my-3 text-sm font-bold flex justify-center items-center">
              <img className="w-4 h-4" src="/assets/red-circle-48.png" alt="" />
              <p className="mx-1 bg-yellow-500 text-gray-800 px-2">Live</p>
            </div>
          ) : matchDate(match.event_date) === matchDate(today) ? (
            <div className="p-3 flex flex-col font-bold text-xs justify-center items-center lg:flex-row">
              <img className="w-3 h-3" src="/assets/calendar.png" alt="" />
              <p className=" px-1 sm:mx-1 sm:px-2">TODAY</p>
            </div>
          ) : matchDate(moment(today).add(-1, "days").format()) ===
            matchDate(match.event_date) ? (
            <div className="p-3 flex flex-col justify-center items-center lg:flex-row">
              <img className="w-3 h-3" src="/assets/calendar.png" alt="" />
              <p className="px-1 sm:mx-1 sm:px-2">YESTERDAY</p>
            </div>
          ) : matchDate(moment(today).add(1, "days").format()) ===
            matchDate(match.event_date) ? (
            <div className="p-3 flex flex-col justify-center items-center lg:flex-row">
              <img className="w-3 h-3" src="/assets/calendar.png" alt="" />
              <p className="px-1 sm:mx-1 sm:px-2">TOMORROW</p>
            </div>
          ) : (
            <div className="p-3 flex-col justify-center items-center sm:justify-around flex lg:flex-row">
              <img className="w-3 h-3" src="/assets/calendar.png" alt="" />
              <p>{matchDate(match.event_date)}</p>
            </div>
          )}

          {match.statusShort === "NS" && (
            <div className="text-white mx-4 font-bold flex items-center justify-center">
              <img className="w-4 h-4 mr-1" src="/assets/clock-24.png" alt="" />
              <p className="p-1 bg-blue-900 rounded-lg">
                {matchTime(match.event_date)}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
