import React from "react";
import { formatCurrentDate, formatMatchTime} from "../utils";
const Fixture = ({ fixtures }) => {
  const today = new Date();
  return (
    <div>
      <div className="text-blue-800 shadow-lg bg-gray-200 text-center mx-auto mt-8 p-6">
        <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
          {formatCurrentDate(today)}
        </h1>
        {fixtures.map((fixture) => (
          <div className="flex items-center my-4">
            <div class="w-2/3 bg-gray-400 p-4">
              <div className="flex items-center text-lg font-bold">
                <div className="font-bold text-xs">
                  <p>
                    {fixture.status !== "Not Started" && fixture.statusShort}
                  </p>
                </div>
                <div className="text-center w-1/3">
                  <p className="">{fixture.homeTeam.team_name}</p>
                </div>
                {fixture.status === "Not Started" ? (
                  <div className="w-1/3 flex items-center justify-center mx-2">
                    <img
                      className="h-6 w-6"
                      src={fixture.homeTeam.logo}
                      alt=""
                    />
                    <p className="bg-blue-900 text-sm text-white mx-4 px-2 py-1">
                      {formatMatchTime(fixture.event_date)}
                    </p>
                    <img
                      className="h-6 w-6"
                      src={fixture.awayTeam.logo}
                      alt=""
                    />
                  </div>
                ) : fixture.status === "Match Finished" ? (
                  <div className="text-sm text-white mx-1 py-1">
                    <span className="px-3 py-1 bg-blue-800 border-r border-r-white">
                      {fixture.goalsHomeTeam}
                    </span>
                    <span className="px-3 py-1 bg-blue-800">
                      {fixture.goalsAwayTeam}
                    </span>
                  </div>
                ) : (
                  <div className="text-sm text-white mx-1 py-1">
                    <span className="px-3 py-1 bg-pink-500 border-r border-r-white">
                      {fixture.goalsHomeTeam}
                    </span>
                    <span className="px-3 py-1 bg-pink-500 border-l border-l-white">
                      {fixture.goalsAwayTeam}
                    </span>
                  </div>
                )}
                <div className="w-1/3 text-center">
                  <p>{fixture.awayTeam.team_name}</p>
                </div>
              </div>
            </div>
            <div className="w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
              <p className="text-m">Venue: </p>
              <p>{fixture.venue}</p>
            </div>
            <div class="w-1/5 bg-gray-400 p-2 text-xs font-bold">
              <h1 className="font-bold text-sm">Refree: </h1>
              <p>{fixture.referee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixture;
