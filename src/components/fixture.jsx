import React from "react";
import { Link } from "react-router-dom";
import { formatCurrentDate, formatMatchTime } from "../utils/formatTime";
const Fixture = ({ fixtures, today, handleNextDay, handlePrevDay }) => {
  return (
    <div>
      <div className="text-blue-800 shadow-lg bg-gray-200 text-center mx-auto mt-8 p-6">
        <div className="flex justify-between text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
        <button
            onClick={handlePrevDay}
            className="flex items-center text-sm mx-2 font-bold focus:outline-none"
          >
            
            <img
              className="h-4 w-4 mr-1"
              src="./assets/icons8-left.png"
              alt=""
            />
            <span>prev</span>
          </button>
          <p>{formatCurrentDate(today)}</p>
          <button
            onClick={handleNextDay}
            className="flex items-center text-sm mx-2 font-bold focus:outline-none"
          >
            next
            <img
              className="h-4 w-4 ml-1"
              src="./assets/icons8-right.png"
              alt=""
            />
          </button>
        </div>
        {fixtures.map((fixture) => (
          <Link
            key={fixture.fixture_id}
            to={`/fixture/${fixture.fixture_id}/${
              fixture.status === "Not Started" ? `head-to-head` : `events`
            }`}
          >
            <div className="flex items-center my-4">
              <div className="w-3/4 bg-gray-400 p-4">
                <div className="flex items-center text-lg font-bold">
                  <div className="flex items-center justfy-between text-center w-1/3">
                    <div className="font-normal text-xs">
                      <p>
                        {fixture.status !== "Not Started" &&
                          fixture.statusShort}
                      </p>
                    </div>
                    <div  className="ml-2">
                      <p>{fixture.homeTeam.team_name}</p>
                    </div>
                  </div>

                  <div className="w-1/4 flex items-center justify-center mx-2">
                    <img
                      className="h-6 w-6"
                      src={fixture.homeTeam.logo}
                      alt=""
                    />
                    {fixture.status === "Not Started" ? (
                      <p className="bg-blue-900 text-sm text-white mx-4 px-2 py-1">
                        {formatMatchTime(fixture.event_date)}
                      </p>
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
                        <span className="px-3 py-1 bg-pink-500">
                          {fixture.goalsAwayTeam}
                        </span>
                      </div>
                    )}
                    <img
                      className="h-6 w-6"
                      src={fixture.awayTeam.logo}
                      alt=""
                    />
                  </div>

                  <div className="w-1/3 text-center">
                    <p>{fixture.awayTeam.team_name}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                <p className="text-m">Venue: </p>
                <p>{fixture.venue}</p>
              </div>
              <div className="w-1/5 bg-gray-400 p-2 text-xs font-bold">
                <h1 className="font-bold text-sm">Refree: </h1>
                <p>{fixture.referee}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Fixture;
