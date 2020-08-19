import React from "react";

const StandingTable = ({ tables }) => {
  return (
    <div>
      <div className="shadow-lg py-4 text-center font-bold w-2/3 mx-auto">
        <h1 className="text-blue-800">2020/2021 Premier League Table</h1>
      </div>
      <table className="table-auto container mx-auto w-2/3 bg-gray-100">
        <thead className="bg-blue-900 text-gray-200 text-sm">
          <tr className="">
            <th className="px-2 py-2">Position</th>
            <th className="px-2 w-1/2 text-left py-2">Club</th>
            <th className="px-4 py-2">Played</th>
            <th className="px-4 py-2">Won</th>
            <th className="px-4 py-2">Drew</th>
            <th className="px-4 py-2">Lost</th>
            <th className="px-4 py-2">GF</th>
            <th className="px-4 py-2">GA</th>
            <th className="px-4 py-2">GD</th>
            <th className="px-4 py-2">Points</th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold text-center text-blue-900">
          {tables.map((table) => (
            <tr key={table.team.id}>
              <td className="py-2">{table.position}</td>
              <td className=" flex text-left py-2">
                <img
                  className="w-5 h-5 mr-4"
                  src={`./assets/${table.team.id}.png`}
                  alt=""
                />
                {table.team.name}
              </td>
              <td className="px-4 py-2">{table.playedGames}</td>
              <td className="px-4 py-2">{table.won}</td>
              <td className="px-4 py-2">{table.draw}</td>
              <td className="px-4 py-2">{table.lost}</td>
              <td className="px-4 py-2">{table.goalsFor}</td>
              <td className="px-4 py-2">{table.goalsAgainst}</td>
              <td className="px-4 py-2">{table.goalDifference}</td>
              <td className="px-4 py-2">{table.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StandingTable;
