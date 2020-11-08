import React, { useState, useEffect } from "react";
import { getHeadtoHead } from "../../../services/fixturesService";
import { formatFixturesDate } from "../../../utils/formatTime";
import { truncateTeamName } from "../../../utils/truncate";
import _ from "lodash";

const HeadtoHead = ({ fixture }) => {
  const [teams, setTeams] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    let teamAId = fixture.homeTeam.team_id;
    let teamBId = fixture.awayTeam.team_id;

    const getHead2Head = async () => {
      const { data } = await getHeadtoHead(teamAId, teamBId);
      setTeams(data.teams);
      let fixtures = data.fixtures;
      fixtures = _.sortBy(fixtures).reverse();
      fixtures = fixtures.filter(
        (fixture) =>
          fixture.status === "Match Finished" &&
          fixture.league.name === "Premier League"
      );
      let recentMeetings = fixtures.slice(0, 5);
      setFixtures(recentMeetings);
    };
    getHead2Head();
  }, [fixture]);
  return (
    <div>
      {teams[0] !== undefined && teams[1] !== undefined && (
        <div className="bg-gray-100 pt-8">
          <div className="text-center font-bold text-2xl text-blue-900">
            <h1>Head to Head</h1>
          </div>
          <div>
            <div className="mx-3 sm:mx-0 py-2">
              <div className="flex justify-between sm:justify-around text-blue-900 text font-bold py-2">
                <div className="flex justify-between items-end">
                  <p className="hidden sm:block mr-1">{teams[0].team_name}</p>
                  <p className="sm:hidden mr-1">
                    {truncateTeamName(teams[0].team_name)}
                  </p>
                  <img src={teams[0].team_logo} className="w-6 h-6" alt="" />
                </div>
                <div className="mx-2 sm:mr-2"></div>
                <div className="flex justify-between items-center">
                  <img src={teams[1].team_logo} className="w-6 h-6" alt="" />
                  <p className="hidden sm:block ml-1">{teams[1].team_name}</p>
                  <p className="sm:hidden ml-1">
                    {truncateTeamName(teams[1].team_name)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between sm:justify-around items-center text-sm font-semibold text-blue-900">
              <div className="flex flex-col items-end">
                <div className="flex py-2 items-center">
                  <div className="mx-2 sm:mx-3 text-lg">
                    {teams[0].statistics.wins.total}
                  </div>
                  <div className="">Total Wins</div>
                </div>

                <div className="flex p-2 items-center">
                  <div className="mx-2 sm:mx-3 text-lg">
                    {teams[0].statistics.wins.home}
                  </div>
                  <div>Home</div>
                </div>

                <div className="flex p-2 items-center">
                  <div className="mx-2 sm:mx-3 text-lg">
                    {teams[0].statistics.wins.away}
                  </div>
                  <div>Away</div>
                </div>
              </div>
              <div className="flex flex-col px-2 items-center">
                <div>Played</div>
                <div className="text-6xl font-bold text-blue-900">
                  {teams[0].statistics.played.total}
                </div>
                <div>
                  Draws
                  <span className="text-xl font-bold mx-1">
                    {teams[0].statistics.draws.total}
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-start">
                  <div className="flex p-2 items-center">
                    <div className="">Total Wins</div>
                    <div className="mx-3 text-xl">
                      {teams[1].statistics.wins.total}
                    </div>
                  </div>

                  <div className="flex p-2 items-center">
                    <div className="">Home</div>
                    <div className="mx-2 sm:mx-3 text-lg">
                      {teams[1].statistics.wins.home}
                    </div>
                  </div>

                  <div className="flex p-2 items-center">
                    <div className="">Away</div>
                    <div className="mx-2 sm:mx-3 text-lg">
                      {teams[1].statistics.wins.away}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-2/3 mx-auto text-center mt-12">
            <div className="font-bold text-xl text-blue-900">
              <h1>Recent Meetings</h1>
            </div>
            {fixtures.map((fixture) => (
              <div key={fixture.fixture_id} className="mx-auto my-4">
                <p className="text-xs font-bold text-blue-800">
                  {formatFixturesDate(fixture.event_date)}
                </p>

                <div className="mx-2 flex bg-gray-300 items-center font-bold py-2 px-1">
                  <div className="text-center text-blue-800 w-1/3">
                    <p className="hidden sm:block">
                      {fixture.homeTeam.team_name}
                    </p>
                    <p className="sm:hidden text-sm">
                      {truncateTeamName(fixture.homeTeam.team_name)}
                    </p>
                  </div>
                  <div className="w-1/3 flex items-center justify-center mx-2">
                    <img
                      className="h-6 w-6"
                      src={fixture.homeTeam.logo}
                      alt=""
                    />
                    <div className="text-sm text-white mx-1 py-1">
                      <span className="px-2 sm:px-3 py-1 bg-blue-800 border-r border-r-white">
                        {fixture.goalsHomeTeam}
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-800">
                        {fixture.goalsAwayTeam}
                      </span>
                    </div>
                    <img
                      className="h-6 w-6"
                      src={fixture.awayTeam.logo}
                      alt=""
                    />
                  </div>
                  <div className="w-1/3 text-blue-800 text-center">
                    <p className="hidden sm:block">
                      {fixture.awayTeam.team_name}
                    </p>
                    <p className="sm:hidden text-sm">
                      {truncateTeamName(fixture.awayTeam.team_name)}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-bold text-blue-800">
                  {fixture.venue}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeadtoHead;
