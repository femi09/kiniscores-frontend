import React from "react";
import { useEffect, useState } from "react";
import { getPremierLeagueStandings } from "../../../services/standingsService";
import { Link } from "react-router-dom";


const MiniStandings = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const getTable = async () => {
      const { data: standings } = await getPremierLeagueStandings();
      const MiniStandings = standings.slice(0, 5);
      setTables(MiniStandings);
    };

    getTable();
  }, []);
  return (
    <div className="sm:w-2/3 sm:mx-auto lg:w-full">
      <div className="bg-white py-1 text-sm text-center font-bold mx-auto">
        <h1 className="text-blue-800">Premier League Table</h1>
      </div>
      <table className="table-auto container mx-auto bg-gray-200">
        <thead className="bg-blue-900 text-gray-200 text-xs">
          <tr className="">
            <th className="px-2 py-1">Pos</th>
            <th className="px-2 w-full text-left py-2">Club</th>
            <th className="px-2 py-1">Pl</th>
            <th className="px-2 py-1">GD</th>
            <th className="px-2 py-1">Pts</th>
          </tr>
        </thead>
        <tbody className="text-sm text-center text-blue-900">
          {tables.map((table, index) => (
            <tr key={index}>
              <td className="py-2 font-bold text-xs">{table.rank}</td>
              <td className=" flex items-center text-left text-sm py-2">
                <img className="w-4 h-4" src={table.logo} alt="" />
                <span className="px-2 text-xs font-bold">{table.teamName}</span>
              </td>
          <td className="px-2 font-bold text-xs py-2">{table.all.matchsPlayed}</td>
          <td className="px-2 font-bold text-xs py-2">{table.goalsDiff}</td>
          <td className="px-2 font-bold text-xs py-2">{table.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right text-xs p-2 font-bold  mb-8 text-blue-900">
        <Link to="/standings">View full table</Link>
      </div>
    </div>
  );
};

export default MiniStandings;
