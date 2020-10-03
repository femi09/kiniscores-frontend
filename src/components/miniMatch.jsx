import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatCurrentDate, truncateTeamName, formatMatchTime, formatDay } from "../utils";
import { getPremierLeagueFixtures } from "../services/fixturesService";

const MiniMatch = () => {
  const [today, setToday] = useState(new Date())
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getFixtures = async () => {
      const day = formatDay(today);
      const { data: fixtures } = await getPremierLeagueFixtures(day);
      setFixtures(fixtures);
      setLoading(false)
      setToday(day)
    };

    getFixtures();
  }, [today]);

  return (
    <div>
      <div className="bg-white py-1 text-sm text-center font-bold m-auto">
        <h1 className="text-blue-800">Today's Fixtures</h1>
      </div>
      <p className="text-xs text-center py-1 font-bold bg-blue-900 text-white">
        {formatCurrentDate(today)}
      </p>
      <div className="bg-gray-200 py-8 border-b">
        {!loading && fixtures.length === 0 && (
          <h1 className="text-sm font-semibold text-blue-900 text-center mx-auto">
            No fixtures for the current day
          </h1>
        )}
        {fixtures.map((fixture, index) => (
          <div
            key={index}
            className="w-full flex items-center text-xs text-blue-800 font-bold mb-6"
          >
            <div>
              <p className="text-xs font-normal">
                {fixture.status !== "Not Started" && fixture.statusShort}
              </p>
            </div>
            <div className="text-center w-1/2">
              <p className="">{truncateTeamName(fixture.homeTeam.team_name)}</p>
            </div>

            <div className="w-1/8 flex items-center justify-center mx-1">
              <img className="h-5 w-5" src={fixture.homeTeam.logo} alt="" />
              {fixture.status === "Not Started" ? (
                <p className="bg-blue-800 text-xs text-white mx-1 px-1 py-1">
                  {formatMatchTime(fixture.event_date)}
                </p>
              ) : fixture.status === "Match Finished" ? (
                <div className="text-xs text-white mx-1 px-1 py-1">
                  <span className="px-2 bg-blue-800 border-r border-r-white">
                    {fixture.goalsHomeTeam}
                  </span>
                  <span className="px-2 bg-blue-800">
                    {fixture.goalsAwayTeam}
                  </span>
                </div>
              ) : (
                <div className="text-sm text-white mx-1 py-1">
                  <span className="px-2 py-1 bg-pink-500 border-r border-r-white">
                    {fixture.goalsHomeTeam}
                  </span>
                  <span className="px-2 py-1 bg-pink-500 border-l border-l-white">
                    {fixture.goalsAwayTeam}
                  </span>
                </div>
              )}

              <img className="h-5 w-5" src={fixture.awayTeam.logo} alt="" />
            </div>

            <div className="w-1/2 text-center">
              <p>{truncateTeamName(fixture.awayTeam.team_name)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right text-xs px-2 py-1 font-bold mb-8 text-blue-900">
        <Link to="/fixtures">View All</Link>
      </div>
    </div>
  );
};

export default MiniMatch;
