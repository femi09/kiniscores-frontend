import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkeletonFixtures from "../components/Skeletons/Fixtures";
import { getNextPremierLeagueFixtures } from "../services/fixturesService";
import { formatMatchTime, formatFixturesDate } from "../utils/formatTime";
import _ from "lodash";

const NextFixtures = () => {
  const [nextFixtures, setNextFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNextFixtures = async () => {
      const { data: fixtures } = await getNextPremierLeagueFixtures();
      let nextFixtures = fixtures.reduce((r, a) => {
        r[formatFixturesDate(a.event_date)] = [
          ...(r[formatFixturesDate(a.event_date)] || []),
          a,
        ];
        return r;
      }, {});
      nextFixtures = _.toArray(nextFixtures);
      setNextFixtures(nextFixtures);
      console.log(nextFixtures);
      setLoading(false);
    };
    getNextFixtures();
  }, []);

  return (
    <div className="w-2/3 mx-auto">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <div className="text-blue-800 shadow-lg bg-gray-200 text-center mx-auto mt-8 p-6">
          {nextFixtures[0] !== undefined && (
            <div>
              <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
                {formatFixturesDate(nextFixtures[0][0].event_date)}
              </h1>
              {nextFixtures[0].map((fixture) => (
                <Link to={`/fixture/${fixture.fixture_id}/stats`}>
                  <div
                    key={fixture.fixture_id}
                    className="flex items-center my-4"
                  >
                    <div className="w-2/3 bg-gray-400 p-4">
                      <div className="flex items-center text-lg font-bold">
                        <div className="text-center w-1/3">
                          <p className="">{fixture.homeTeam.team_name}</p>
                        </div>
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
          )}

          {nextFixtures[1] !== undefined && (
            <div className="text-blue-800 text-center mx-auto mt-8">
              <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
                {formatFixturesDate(nextFixtures[1][0].event_date)}
              </h1>
              {nextFixtures[1].map((fixture) => (
                <Link to={`/fixture/${fixture.fixture_id}/stats`}>
                  <div
                    key={fixture.fixture_id}
                    className="flex items-center my-4"
                  >
                    <div className="w-2/3 bg-gray-400 p-4">
                      <div className="flex items-center text-lg font-bold">
                        <div className="text-center w-1/3">
                          <p className="">{fixture.homeTeam.team_name}</p>
                        </div>
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
          )}

          {nextFixtures[2] !== undefined && (
            <div className="text-blue-800  text-center mx-auto mt-8">
              <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
                {formatFixturesDate(nextFixtures[2][0].event_date)}
              </h1>
              {nextFixtures[2].map((fixture) => (
                <Link to={`/fixture/${fixture.fixture_id}/stats`}>
                  <div
                    key={fixture.fixture_id}
                    className="flex items-center my-4"
                  >
                    <div className="w-2/3 bg-gray-400 p-4">
                      <div className="flex items-center text-lg font-bold">
                        <div className="text-center w-1/3">
                          <p className="">{fixture.homeTeam.team_name}</p>
                        </div>
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
          )}
        </div>
      )}
    </div>
  );
};

export default NextFixtures;
