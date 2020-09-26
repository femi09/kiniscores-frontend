import React, { useState, useEffect } from "react";
import { getLastPremierLeagueFixtures } from "../services/fixturesService";
import { formatMatchTime, formatCurrentDate } from "../utils";

const LastFixtures = () => {
  const [lastFixtures, setLastFixtures] = useState([]);

  useEffect(() => {
    const getNextFixtures = async () => {
      const { data } = await getLastPremierLeagueFixtures();
      // A reducer function to group the array of fixtures by event_date
      let lastFixtures = data.reduce((r, a) => {
        r[a.event_date] = [...(r[a.event_date] || []), a];
        return r;
      }, {});
      setLastFixtures(lastFixtures);
    };
    getNextFixtures();
  }, []);
  return (
    <div>
      <div className="text-blue-800 shadow-lg bg-gray-200 text-center mx-auto mt-8 p-6">
        <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
          {formatCurrentDate(lastFixtures[0][0].event_date)}
        </h1>
        {lastFixtures[0].map((lastFixture) => (
            <div className="flex items-center my-4">
              <div class="w-2/3 bg-gray-400 p-4">
                <div className="flex items-center text-lg font-bold">
                  <div className="text-center w-1/3">
                    <p className="">{lastFixture.homeTeam.team_name}</p>
                  </div>
                  <div className="w-1/3 flex items-center justify-center mx-2">
                    <img
                      className="h-6 w-6"
                      src={lastFixture.homeTeam.logo}
                      alt=""
                    />
                    <p className="bg-blue-900 text-sm text-white mx-4 px-2 py-1">
                      {formatMatchTime(lastFixture.event_date)}
                    </p>
                    <img
                      className="h-6 w-6"
                      src={lastFixture.awayTeam.logo}
                      alt=""
                    />
                  </div>
                  <div className="w-1/3 text-center">
                    <p>{lastFixture.awayTeam.team_name}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                <p className="text-m">Venue: </p>
                <p>{lastFixture.venue}</p>
              </div>
              <div class="w-1/5 bg-gray-400 p-2 text-xs font-bold">
                <h1 className="font-bold text-sm">Refree: </h1>
                <p>{lastFixture.referee}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Day 2 */}

      <div className="text-blue-800 shadow-lg bg-gray-200 text-center mx-auto mt-8 p-6">
        <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
          {formatCurrentDate(lastFixtures[1][0].event_date)}
        </h1>
        {lastFixtures[1].length !== 0 && lastFixtures[1].map((lastFixture) => (
            <div className="flex items-center my-4">
              <div class="w-2/3 bg-gray-400 p-4">
                <div className="flex items-center text-lg font-bold">
                  <div className="text-center w-1/3">
                    <p className="">{lastFixture.homeTeam.team_name}</p>
                  </div>
                  <div className="w-1/3 flex items-center justify-center mx-2">
                    <img
                      className="h-6 w-6"
                      src={lastFixture.homeTeam.logo}
                      alt=""
                    />
                    <p className="bg-blue-900 text-sm text-white mx-4 px-2 py-1">
                      {formatMatchTime(lastFixture.event_date)}
                    </p>
                    <img
                      className="h-6 w-6"
                      src={lastFixture.awayTeam.logo}
                      alt=""
                    />
                  </div>
                  <div className="w-1/3 text-center">
                    <p>{lastFixture.awayTeam.team_name}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                <p className="text-m">Venue: </p>
                <p>{lastFixture.venue}</p>
              </div>
              <div class="w-1/5 bg-gray-400 p-2 text-xs font-bold">
                <h1 className="font-bold text-sm">Refree: </h1>
                <p>{lastFixture.referee}</p>
              </div>
            </div>
          ))}
      </div>
      {/* Day 3 */}
      <div className="text-blue-800 shadow-lg bg-gray-200 text-center mx-auto mt-8 p-6">
        <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
          {formatCurrentDate(lastFixtures[2][0].event_date)}
        </h1>
        {lastFixtures[2].length !== 0 && lastFixtures[2].map((lastFixture) => (
            <div className="flex items-center my-4">
              <div class="w-2/3 bg-gray-400 p-4">
                <div className="flex items-center text-lg font-bold">
                  <div className="text-center w-1/3">
                    <p className="">{lastFixture.homeTeam.team_name}</p>
                  </div>
                  <div className="w-1/3 flex items-center justify-center mx-2">
                    <img
                      className="h-6 w-6"
                      src={lastFixture.homeTeam.logo}
                      alt=""
                    />
                    <p className="bg-blue-900 text-sm text-white mx-4 px-2 py-1">
                      {formatMatchTime(lastFixture.event_date)}
                    </p>
                    <img
                      className="h-6 w-6"
                      src={lastFixture.awayTeam.logo}
                      alt=""
                    />
                  </div>
                  <div className="w-1/3 text-center">
                    <p>{lastFixture.awayTeam.team_name}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                <p className="text-m">Venue: </p>
                <p>{lastFixture.venue}</p>
              </div>
              <div class="w-1/5 bg-gray-400 p-2 text-xs font-bold">
                <h1 className="font-bold text-sm">Refree: </h1>
                <p>{lastFixture.referee}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LastFixtures;
