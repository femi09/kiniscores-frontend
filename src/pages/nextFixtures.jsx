import React, { useState, useEffect } from "react";
import SkeletonFixtures from "../components/Skeletons/Fixtures";
import { getNextPremierLeagueFixtures } from "../services/fixturesService";
import {
  formatMatchTime,
  formatCurrentDate,
  formatFixturesDate,
} from "../utils";

const NextFixtures = () => {
  const [nextFixtures, setNextFixtures] = useState([]);
  const [firstDay, setFirstDay] = useState([]);
  const [secondDay, setSecondDay] = useState([]);
  const [thirdDay, setThirdDay] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNextFixtures = async () => {
      const { data } = await getNextPremierLeagueFixtures();
      let firstDay = data.filter(
        (datum) =>
          formatFixturesDate(datum.event_date) ===
          formatFixturesDate(data[0].event_date)
      );
      let secondDay = data.filter(
        (datum) =>
          formatFixturesDate(datum.event_date) ===
          formatFixturesDate(data[4].event_date) && formatFixturesDate(datum.event_date) !==
          formatFixturesDate(data[0].event_date)
      );
      let thirdDay = data.filter(
        (datum) =>
          formatFixturesDate(datum.event_date) ===
            formatFixturesDate(data[9].event_date) &&
          formatFixturesDate(datum.event_date) !==
            formatFixturesDate(data[4].event_date)
      );
      let nextFixtures = [firstDay, secondDay, thirdDay];
      setFirstDay(firstDay);
      console.log(nextFixtures);
      setSecondDay(secondDay);
      setThirdDay(thirdDay);
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
          <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
            {firstDay[0] !== undefined &&
              formatFixturesDate(firstDay[0].event_date)}
          </h1>
          {firstDay.map((fixture) => (
            <div key={fixture.fixture_id} className="flex items-center my-4">
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
              <div className ="w-1/5 bg-gray-400 p-2 text-xs font-bold">
                <h1 className="font-bold text-sm">Refree: </h1>
                <p>{fixture.referee}</p>
              </div>
            </div>
          ))}

          {
            secondDay.length !== 0 && <div className="text-blue-800 text-center mx-auto mt-8">
            <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
              {secondDay[0] !== undefined &&
                formatFixturesDate(secondDay[0].event_date)}
            </h1>
            {secondDay.map((fixture) => (
              <div key={fixture.fixture_id} className="flex items-center my-4">
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
            ))}
          </div>
          }

          
          {thirdDay.length !== 0 &&
            <div className="text-blue-800  text-center mx-auto mt-8">
              <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
                {thirdDay[0] !== undefined &&
                  formatFixturesDate(thirdDay[0].event_date)}
              </h1>
              {thirdDay.map((fixture) => (
                <div key={fixture.fixture_id} className="flex items-center my-4">
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
              ))}
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default NextFixtures;
