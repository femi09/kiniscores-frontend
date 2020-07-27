import React from "react";
const Match = ({ match, date }) => {
  return (
    <>
      <div className="grid grid-cols-3 py-6 border-r-2 bg-gray-100">
        <div className="flex items-center col-span-2 justify-between">
          <div className="flex justify-start text-xs items-start font-semibold text-gray-700 flex-col left">
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

          <div className="text-xs middle border-r-2">
            <p className="p-3">{match.score.fullTime.homeTeam}</p>
            <p className="p-3">{match.score.fullTime.awayTeam}</p>
          </div>
        </div>
        <div className="text-xs text-center text-gray-700 right">
          <p className="p-3">FT</p>
          <p className="p-3">{date(match.utcDate)}</p>
        </div>
      </div>
    </>
  );
};

export default Match;
