import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  formatCurrentDate,
  formatMatchTime,
  formatDay,
} from "../../utils/formatTime";
import { truncateTeamName, truncateString } from "../../utils/truncate";
import { fixturesToDisplay } from "../../utils/fixturesToDisplay";
import { competitions } from "../../utils/competitions";
import {
  getLeagueFixtures,
  getTodaysFixtures,
} from "../../services/fixturesService";
import MiniDropdown from "../Dropdowns/MiniDropdown";

const today = new Date();
const MiniMatch = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("");
  const [leagueSlug, setLeagueSlug] = useState("");
  const [leagueId, setLeagueId] = useState(null);

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const day = formatDay(today);
        const { data } = await getTodaysFixtures(day);
        let fixtures = fixturesToDisplay(data);
        fixtures = fixtures.length > 10 ? fixtures.splice(0, 10) : fixtures;
        setFixtures(fixtures);
        setLeagueId(fixtures[0].league_id);
        const league = competitions.filter(
          (competition) => competition.id === fixtures[0].league_id
        );
        setLeagueSlug(league[0].slug);
        setLeague(fixtures[0].league.name);
        setLoading(false);
      } catch (error) {
        console.log(error.toString());
      }
    };

    getFixtures();
  }, []);

  const handleCompetition = async (id, league, slug) => {
    try {
      setLoading(true);
      setLeagueId(id);
      setLeagueSlug(slug);
      setLeague(league);
      const day = formatDay(today);
      const { data } = await getLeagueFixtures(day, id);
      const fixtures = data.length > 5 ? data.splice(0, 5) : data;
      setFixtures(fixtures);
      setLoading(false);
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div className="sm:w-2/3 sm:mx-auto lg:w-full">
      <div className="bg-white py-1 text-sm text-center font-bold m-auto">
        <h1 className="text-blue-800">Today's Fixtures</h1>
      </div>
      <p className="text-xs text-center py-1 font-bold bg-blue-900 text-white">
        {formatCurrentDate(today)}
      </p>
      {loading ? (
        <p className="text-sm p-8 font-semibold text-blue-900 text-center mx-auto">
          Loading...
        </p>
      ) : (
        <div className="bg-gray-200 py-4 border-b">
          <div>
            <MiniDropdown
              league={league}
              handleCompetition={handleCompetition}
            />
          </div>
          {!loading && fixtures.length === 0 && (
            <div>
              <h1 className="text-sm font-semibold text-blue-900 py-6 text-center mx-auto">
                No {league} fixtures today
              </h1>
            </div>
          )}
          {fixtures.map((fixture, index) => (
            <Link
              key={index}
              to={`/fixture/${fixture.fixture_id}/${
                fixture.status === "Not Started" ? `head-to-head` : `events`
              }`}
            >
              <div className="bg-gray-400 flex items-center text-xs text-blue-800 font-bold p-1 my-6">
                <div className="text-center w-1/3">
                  <p className="">
                    {truncateString(
                      truncateTeamName(fixture.homeTeam.team_name),
                      11
                    )}
                  </p>
                </div>

                <div className="w-1/3 flex items-center justify-center mx-1">
                  <img className="h-5 w-5" src={fixture.homeTeam.logo} alt="" />
                  {fixture.status === "Not Started" ? (
                    <p className="bg-blue-800 text-xs text-white mx-1 px-1 py-1">
                      {formatMatchTime(fixture.event_date)}
                    </p>
                  ) : fixture.status === "Match Finished" ? (
                    <div className="text-xs text-white mx-1 px-1 py-1">
                      <span className="px-2 py-1 bg-blue-800 border-r border-r-white">
                        {fixture.goalsHomeTeam}
                      </span>
                      <span className="px-2 py-1 bg-blue-800">
                        {fixture.goalsAwayTeam}
                      </span>
                    </div>
                  ) : (
                    <div className="text-sm text-white mx-1 py-1">
                      <span className="px-2 py-1 bg-pink-500 border-r border-r-white">
                        {fixture.goalsHomeTeam}
                      </span>
                      <span className="px-2 py-1 bg-pink-500">
                        {fixture.goalsAwayTeam}
                      </span>
                    </div>
                  )}

                  <img className="h-5 w-5" src={fixture.awayTeam.logo} alt="" />
                </div>

                <div className="w-1/3 text-center">
                  <p>
                    {truncateString(
                      truncateTeamName(fixture.awayTeam.team_name),
                      11
                    )}
                  </p>
                </div>
              </div>
              <div className="mx-1 px-1 text-center">
                <p className="text-center text-xs font-bold text-blue-800">
                  {fixture.status !== "Not Started" && fixture.statusShort}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
      {!loading && (
        <div className="text-right text-xs px-2 py-1 font-bold mb-8 text-blue-900">
          {fixtures.length === 0 ? (
            <div className="text-right text-xs px-2 py-1 font-bold mb-8 text-blue-900">
              {
                <Link to={`/fixtures/next/${leagueSlug}/${leagueId}`}>
                  See Next {league} Fixtures
                </Link>
              }
            </div>
          ) : (
            <Link to={`/fixtures/${leagueSlug}/${leagueId}`}>
              View All {league} Fixtures Today
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniMatch;
