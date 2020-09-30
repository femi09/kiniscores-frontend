import React from "react";
const Result = ({ match, matchDate, matchTime }) => {
  return (
    <>
      <div className="grid grid-cols-3 py-6 bg-gray-100">
        <div className="flex items-center col-span-2 justify-between">
          <div className="flex flex-col justify-start text-xs items-start font-bold text-blue-900 left">
            <div className="flex justify-between items-center p-3 team-name">
              <img
                className="w-5 h-5 mr-4"
                src={`./assets/${match.homeTeam.id}.png`}
                alt=""
              />
              <p>{match.homeTeam.name}</p>
            </div>
            <div className="flex justify-between items-center p-3 team-name">
              <img
                className="w-5 h-5 mr-4"
                src={`./assets/${match.awayTeam.id}.png`}
                alt=""
              />
              <p>{match.awayTeam.name}</p>
            </div>
          </div>

          <div className="text-xs font-bold text-blue-900 middle border-r-2">
            <p className="p-3">{match.score.fullTime.homeTeam}</p>
            <p className="p-3">{match.score.fullTime.awayTeam}</p>
          </div>
        </div>
        <div className="text-xs text-center font-semibold text-blue-900 right">
          <p className="p-3">{match.status}</p>
          <div className="p-3 flex justify-around items-center">
          <img className="w-4 h-4"src="./assets/calendar.png" alt=""/>
            <p>{matchDate(match.utcDate)}</p>
          </div>

          <div className="bg-yellow-500 font-bold flex items-center justify-center">
          <img className="w-4 h-4 mr-2"src="./assets/clock.png" alt=""/>
            <p className="">{matchTime(match.utcDate)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
