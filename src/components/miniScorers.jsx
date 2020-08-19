import React from "react";
import { useEffect, useState } from "react";
import { getPremierLeagueScorers } from "../services/scorerService";
import { Link } from "react-router-dom";

const MiniScorers = () => {
  const [scorers, setScorers] = useState([]);
  useEffect(() => {
    const getScorers = async () => {
      const { data: scorers } = await getPremierLeagueScorers();
      const miniScorers = scorers.slice(0, 4);
      console.log(miniScorers);
      setScorers(miniScorers);
    };
    getScorers();
  }, []);
  return (
    <div>
      <div className="bg-white py-1 text-sm text-center font-bold mx-auto">
        <h1 className="text-blue-800">Top Scorers</h1>
      </div>
      {scorers.length === 0 ? (
        <h1 className="text-sm font-semibold text-blue-900 text-center mx-auto mt-8">
          No scorers for the current season
        </h1>
      ) : (
        <table className="table-auto container mx-auto bg-gray-200">
          <thead className="bg-blue-900 text-gray-200 text-xs">
            <tr className="">
              <th className="px-2 py-1">Pos</th>
              <th className="px-2 w-full text-left py-2">Player</th>
              <th className="px-2 py-1">Team</th>
              <th className="px-2 py-1">Goals</th>
            </tr>
          </thead>
          <tbody className="text-xs text-center text-gray-800">
            {scorers.map((scorer, index) => (
              <tr key={scorer.team.id}>
                <td className="py-2 font-semibold">{index + 1}</td>
                <td className=" flex text-left font-semibold py-2">
                  {scorer.player.name}
                </td>
                <td className="px-2 font-semibold py-2">
                  <img
                    className="w-4 h-4 mr-1"
                    src={`./assets/${scorer.team.id}.png`}
                    alt=""
                  />
                </td>
                <td className="px-2 font-semibold text-xs py-2">
                  {scorer.numberOfGoals}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="text-right text-xs p-2 font-bold text-blue-900">
        <Link to="/scorers">View full list</Link>
      </div>
    </div>
  );
};

export default MiniScorers;
