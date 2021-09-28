import React, { Fragment, useEffect, useState } from "react";
import { getLeagueScorers } from "../../../../services/scorerService";
import { shortTeamName } from "../../../../utils/truncate";
import { Link } from "react-router-dom";
import MiniDropdown from "../../dropdowns/miniDropdowns";

const MiniScorers = () => {
  const [scorers, setScorers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("Premier League");
  const [leagueSlug, setLeagueSlug] = useState("premier_league");
  const [leagueId, setLeagueId] = useState(2790);
  useEffect(() => {
    const getScorers = async () => {
      try {
        const { data: scorers } = await getLeagueScorers(leagueId);
        const miniScorers = scorers.slice(0, 4);
        setLoading(false);
        setScorers(miniScorers);
      } catch (error) {
        console.log(error);
      }
    };
    getScorers();
  }, [leagueId]);

  const handleCompetition = async (id, league, slug) => {
    try {
      setLoading(true);
      setLeague(league);
      setLeagueId(id);
      setLeagueSlug(slug);
      const { data: scorers } = await getLeagueScorers(id);
      const miniScorers = scorers.slice(0, 4);
      setLoading(false);
      setScorers(miniScorers);
    } catch (error) {
      console.log(error.toString());
    }
  };
  return (
    <div>
      <div className="py-1 text-sm text-center font-bold mx-auto">
        <h1 className="text-blue-800">Top Scorers</h1>
      </div>
      <Fragment>
        <div className="my-2">
          <MiniDropdown title={league} handleCompetition={handleCompetition} />
        </div>

        {!loading && scorers.length === 0 && (
          <h1 className="text-sm font-semibold text-blue-900 text-center mx-auto my-4">
            No scorers for the current season
          </h1>
        )}

        <table className="table-auto shadow-xs border-b py-2 container mx-auto bg-gray-300">
          <thead className="bg-blue-900 text-gray-200 text-xs">
            <tr className="">
              <th className="px-2 py-1">Pos</th>
              <th className="px-2 w-full text-left py-2">Player</th>
              <th className="px-2 py-1">Team</th>
              <th className="px-2 py-1">Goals</th>
            </tr>
          </thead>
          {loading ? (
            <tbody className="text-sm text-center text-blue-900">
              <tr className="w-1/2 mx-auto px-4 text-center">
                <td>Loading...</td>
              </tr>
            </tbody>
          ) : (
            <tbody className="text-xs text-center text-blue-900">
              {scorers.map((scorer, index) => (
                <tr key={index}>
                  <td className="py-2 font-bold">{index + 1}</td>
                  <td className=" flex text-left font-bold py-2">
                    {scorer.player_name}
                  </td>
                  <td className="px-2 font-bold py-2">
                    {shortTeamName(scorer.team_name, 3)}
                  </td>
                  <td className="px-2 font-bold text-xs py-2">
                    {scorer.goals.total}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </Fragment>

      <div className="text-right text-xs p-2 font-bold text-blue-900">
        <Link to={`/scorers/${leagueSlug}/${leagueId}`}>View full list</Link>
      </div>
    </div>
  );
};
export default MiniScorers;
