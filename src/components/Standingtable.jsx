import React from "react";

const Table = ({ tables }) => {
  return (
    <table className="table-auto container mx-auto w-2/3 bg-gray-200">
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
      <tbody className="text-sm text-center text-gray-800">
        {tables.map((table) => (
          <tr className="">
            <td className="py-2">{table.position}</td>
            <td className=" text-left py-2">
              <div className="flex">
                <img
                  className="w-5 h-5 mr-4"
                  src={`./assets/${table.team.id}.png`}
                  alt=""
                />
                {table.team.name}
              </div>
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
  );
};

export default Table;
