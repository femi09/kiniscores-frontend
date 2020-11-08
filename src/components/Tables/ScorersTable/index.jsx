import React from "react";

const ScorersTable = ({ scorers }) => {
  return (
    <div className="mx-2 my-2 sm:mx-4 xl:mx-auto xl:w-1/2">
      <div className="shadow-sm text-center my-2 py-2 lg:py-4 font-bold">
        <h1 className="text-sm text-blue-900">Premier League Top Scorers</h1>
      </div>
      <table className="hidden sm:block table-auto contain bg-gray-100">
        <thead className="bg-blue-900 text-center text-gray-200 text-sm">
          <tr>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 w-1/2 text-left py-2">Player Name</th>
            <th className="py-2 px-2 w-1/2 text-left">Team</th>
            <th className="px-4 py-2">Goals</th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold text-blue-900">
          {scorers.map((scorer, index) => (
            <tr key={scorer.player.id} className="border-b-4">
              <td className="px-4 text-center py-2">{index + 1}</td>
              <td className="px-4 py-2">{scorer.player.name}</td>
              <td className="flex text-center py-2">
                <img
                  className="w-5 h-5 mr-1"
                  src={`./assets/${scorer.team.id}.png`}
                  alt=""
                />
                {scorer.team.name}
              </td>
              <td className="px-4 text-center py-2">{scorer.numberOfGoals}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Mobile screens */}
      <table className="sm:hidden table-auto container bg-gray-200">
        <thead className="bg-blue-900 text-gray-200 text-sm">
          <tr className="">
            <th className="px-1 py-1">Pos</th>
            <th className="px-1 text-left py-2">Player</th>
            <th className="px-1 py-1">Team</th>
            <th className="px-1 py-1">Goals</th>
          </tr>
        </thead>
        <tbody className="text-sm text-center text-blue-900">
          {scorers.map((scorer, index) => (
            <tr className="border-b-4" key={index}>
              <td className="py-2 font-bold">{index + 1}</td>
              <td className="text-left font-bold py-2">{scorer.player.name}</td>
              <td className="flex justify-center font-bold py-2">
                <img
                  className="w-6 h-6 mx-4"
                  src={`./assets/${scorer.team.id}.png`}
                  alt=""
                />
              </td>
              <td className="px-1 text-center font-bold py-2">
                {scorer.numberOfGoals}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScorersTable;
