import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkeletonFixtures from "../../components/Skeletons/Fixtures";
import { getNextPremierLeagueFixtures } from "../../services/fixturesService";
import {
  formatMatchTime,
  formatFixturesDate,
  formatDate,
} from "../../utils/formatTime";
import { truncateTeamName } from "../../utils/truncate";
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
      setLoading(false);
    };
    getNextFixtures();
  }, []);

  return (
    <div className="mx-2 lg:mx-4 xl:w-2/3 xl:mx-auto">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <div className="text-blue-800 shadow-lg bg-gray-200 text-center mt-8 p-2 sm:p-6">
          {nextFixtures[0] && (
            <div>
              <h1 className="hidden sm:block text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
                {formatFixturesDate(nextFixtures[0][0].event_date)}
              </h1>
              <h1 className="sm:hidden text-gray-800 text-center p-2 font-bold bg-yellow-500">
                {formatDate(nextFixtures[0][0].event_date)}
              </h1>
              {nextFixtures[0].map((fixture) => (
                <Link
                  key={fixture.fixture_id}
                  to={`/fixture/${fixture.fixture_id}/head-to-head`}
                >
                  <div className="flex-col flex items-center my-4 sm:flex-row">
                    <div className="w-full text-sm font-bold sm:hidden">
                      <p className="text-xs">Venue: </p>
                      {fixture.venue}
                    </div>
                    <div className="w-full xl:w-3/4 bg-gray-400 py-4 px-2 sm:p-4">
                      <div className="flex items-center text-sm font-bold sm:text-lg">
                        <div className="flex items-center justfy-between text-center w-1/3">
                          <div className="sm:ml-2">
                            <p className="hidden lg:block">
                              {fixture.homeTeam.team_name}
                            </p>
                            <p className="lg:hidden">
                              {truncateTeamName(fixture.homeTeam.team_name)}
                            </p>
                          </div>
                        </div>
                        <div className="w-1/3 flex items-center justify-center mx-2 sm:mx-2">
                          <img
                            className="h-4 w-4 sm:h-6 sm:w-6"
                            src={fixture.homeTeam.logo}
                            alt=""
                          />
                          <p className="bg-blue-900 text-sm text-white mx-1 px-1 sm:mx-4 sm:px-2 py-1">
                            {formatMatchTime(fixture.event_date)}
                          </p>
                          <img
                            className="h-4 w-4 sm:h-6 sm:w-6"
                            src={fixture.awayTeam.logo}
                            alt=""
                          />
                        </div>
                        <div className="w-1/3 text-center">
                          <p className="hidden lg:block">
                            {fixture.awayTeam.team_name}
                          </p>
                          <p className="lg:hidden">
                            {truncateTeamName(fixture.awayTeam.team_name)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-sm font-bold sm:hidden">
                      {fixture.status !== "Not Started" && fixture.statusShort}
                    </div>
                    <div className="hidden sm:block w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                      <p className="text-m">Venue: </p>
                      <p>{fixture.venue}</p>
                    </div>
                    <div className="hidden sm:block w-1/5 bg-gray-400 p-2 text-xs font-bold">
                      <h1 className="font-bold text-sm">Refree: </h1>
                      <p>{fixture.referee}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {nextFixtures[1] && (
            <div>
              <h1 className="hidden sm:block text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
                {formatFixturesDate(nextFixtures[1][0].event_date)}
              </h1>
              <h1 className="sm:hidden text-gray-800 text-center p-2 font-bold bg-yellow-500">
                {formatDate(nextFixtures[1][0].event_date)}
              </h1>
              {nextFixtures[1].map((fixture) => (
                <Link
                  key={fixture.fixture_id}
                  to={`/fixture/${fixture.fixture_id}/head-to-head`}
                >
                  <div className="flex-col flex items-center my-4 sm:flex-row">
                    <div className="w-full text-sm font-bold sm:hidden">
                      <p className="text-xs">Venue: </p>
                      {fixture.venue}
                    </div>
                    <div className="w-full xl:w-3/4 bg-gray-400 py-4 px-2 sm:p-4">
                      <div className="flex items-center text-sm font-bold sm:text-lg">
                        <div className="flex items-center justfy-between text-center w-1/3">
                          <div className="sm:ml-2">
                            <p className="hidden lg:block">
                              {fixture.homeTeam.team_name}
                            </p>
                            <p className="lg:hidden">
                              {truncateTeamName(fixture.homeTeam.team_name)}
                            </p>
                          </div>
                        </div>
                        <div className="w-1/3 flex items-center justify-center mx-2 sm:mx-2">
                          <img
                            className="h-4 w-4 sm:h-6 sm:w-6"
                            src={fixture.homeTeam.logo}
                            alt=""
                          />
                          <p className="bg-blue-900 text-sm text-white mx-1 px-1 sm:mx-4 sm:px-2 py-1">
                            {formatMatchTime(fixture.event_date)}
                          </p>
                          <img
                            className="h-4 w-4 sm:h-6 sm:w-6"
                            src={fixture.awayTeam.logo}
                            alt=""
                          />
                        </div>
                        <div className="w-1/3 text-center">
                          <p className="hidden lg:block">
                            {fixture.awayTeam.team_name}
                          </p>
                          <p className="lg:hidden">
                            {truncateTeamName(fixture.awayTeam.team_name)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-sm font-bold sm:hidden">
                      {fixture.status !== "Not Started" && fixture.statusShort}
                    </div>
                    <div className="hidden sm:block w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                      <p className="text-m">Venue: </p>
                      <p>{fixture.venue}</p>
                    </div>
                    <div className="hidden sm:block w-1/5 bg-gray-400 p-2 text-xs font-bold">
                      <h1 className="font-bold text-sm">Refree: </h1>
                      <p>{fixture.referee}</p>
                    </div>
                  </div>
                </Link>
              ))}
              {nextFixtures[2] && (
                <div>
                  <h1 className="hidden sm:block text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
                    {formatFixturesDate(nextFixtures[2][0].event_date)}
                  </h1>
                  <h1 className="sm:hidden text-gray-800 text-center p-2 font-bold bg-yellow-500">
                    {formatDate(nextFixtures[2][0].event_date)}
                  </h1>
                  {nextFixtures[2].map((fixture) => (
                    <Link
                      key={fixture.fixture_id}
                      to={`/fixture/${fixture.fixture_id}/head-to-head`}
                    >
                      <div className="flex-col flex items-center my-4 sm:flex-row">
                        <div className="w-full text-sm font-bold sm:hidden">
                          <p className="text-xs">Venue: </p>
                          {fixture.venue}
                        </div>
                        <div className="w-full xl:w-3/4 bg-gray-400 py-4 px-2 sm:p-4">
                          <div className="flex items-center text-sm font-bold sm:text-lg">
                            <div className="flex items-center justfy-between text-center w-1/3">
                              <div className="sm:ml-2">
                                <p className="hidden lg:block">
                                  {fixture.homeTeam.team_name}
                                </p>
                                <p className="lg:hidden">
                                  {truncateTeamName(fixture.homeTeam.team_name)}
                                </p>
                              </div>
                            </div>
                            <div className="w-1/3 flex items-center justify-center mx-2 sm:mx-2">
                              <img
                                className="h-4 w-4 sm:h-6 sm:w-6"
                                src={fixture.homeTeam.logo}
                                alt=""
                              />
                              <p className="bg-blue-900 text-sm text-white mx-1 px-1 sm:mx-4 sm:px-2 py-1">
                                {formatMatchTime(fixture.event_date)}
                              </p>
                              <img
                                className="h-4 w-4 sm:h-6 sm:w-6"
                                src={fixture.awayTeam.logo}
                                alt=""
                              />
                            </div>
                            <div className="w-1/3 text-center">
                              <p className="hidden lg:block">
                                {fixture.awayTeam.team_name}
                              </p>
                              <p className="lg:hidden">
                                {truncateTeamName(fixture.awayTeam.team_name)}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full text-sm font-bold sm:hidden">
                          {fixture.status !== "Not Started" &&
                            fixture.statusShort}
                        </div>
                        <div className="hidden sm:block w-1/5 bg-gray-400 text-sm text-center p-4 font-bold">
                          <p className="text-m">Venue: </p>
                          <p>{fixture.venue}</p>
                        </div>
                        <div className="hidden sm:block w-1/5 bg-gray-400 p-2 text-xs font-bold">
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
      )}
    </div>
  );
};

export default NextFixtures;
