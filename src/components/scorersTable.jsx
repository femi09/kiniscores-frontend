import React from "react";

const ScorersTable = ({ scorers }) => {
  return (
    <div>
      <div className="shadow-lg text-center py-4 font-bold w-1/2 mx-auto">
        <h1 className="text-blue-900"> 2019/2020 Premier League Top Scorers</h1>
      </div>
      <table className="table-auto container mx-auto w-1/2 bg-gray-200">
        <thead className="bg-blue-900 text-gray-200 text-sm">
          <tr>
            <th className="px-2 py-2">Position</th>
            <th className="px-2 text-left py-2">Player Name</th>
            <th className="py-2 text-left">Team</th>
            <th className="px-4 py-2">Goals</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {scorers.map((scorer, index) => (
            <tr key={scorer.player.id} className="border-b-4">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{scorer.player.name}</td>
              <td className="flex text-left py-2">
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
    </div>
  );
};

export default ScorersTable;
