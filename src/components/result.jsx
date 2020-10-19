import React from "react";
const Result = ({ match, matchDate, matchTime }) => {
  return (
    <>
      <div className="grid grid-cols-3 py-6 bg-gray-100">
        <div className="flex items-center col-span-2 justify-between">
          <div className="flex flex-col justify-start text-xs items-start font-bold text-blue-900 left">
            <div className="flex justify-between items-center p-2 team-name">
              <img
                className="w-5 h-5 mr-4"
                src={match.homeTeam.logo}
                alt=""
              />
              <p>{match.homeTeam.team_name}</p>
            </div>
            <div className="flex justify-between items-center p-2 team-name">
              <img
                className="w-5 h-5 mr-4"
                src={match.awayTeam.logo}
                alt=""
              />
              <p>{match.awayTeam.team_name}</p>
            </div>
          </div>

          <div className="text-xs font-bold text-blue-900 middle border-r-2">
            <p className="p-3">{match.goalsHomeTeam}</p>
            <p className="p-3">{match.goalsAwayTeam}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-xs text-center font-semibold text-blue-900 right">
          <p className="py-2 px-3">{match.statusShort}</p>
          <div className="p-3 flex justify-around items-center">
          <img className="w-4 h-4"src="./assets/calendar.png" alt=""/>
            <p >{matchDate(match.event_date)}</p>
          </div>

          <div className="text-white mx-4 font-bold flex items-center justify-center">
          <img className="w-4 h-4 mr-1"src="./assets/clock-24.png" alt=""/>
            <p className="p-1 bg-blue-900 ">{matchTime(match.event_date)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
