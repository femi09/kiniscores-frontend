import React from "react";
import { useEffect, useState } from "react";
import { getPremierLeagueStandings } from "../services/standingsService";
import { Link } from "react-router-dom";
import {truncateTeamName} from '../utils'

const MiniTable = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const getTable = async () => {
      const { data: standings } = await getPremierLeagueStandings();
      const miniTable = standings[0].table.slice(0, 5);
      console.log(miniTable);
      setTables(miniTable);
    };

    getTable();
  }, []);
  return (
    <div>
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
        <tbody className="text-sm text-center text-gray-800">
          {tables.map((table) => (
            <tr>
              <td className="py-2 font-semibold text-xs">{table.position}</td>
              <td className=" flex items-center text-left text-sm py-2">
                <img className="w-4 h-4" src={`./assets/${table.team.id}.png`} alt="" />
                <span className="w-full px-2 text-xs font-semibold">{truncateTeamName(table.team.name)}</span>
              </td>
          <td className="px-2 font-semibold text-xs py-2">{table.playedGames}</td>
          <td className="px-2 font-semibold text-xs py-2">{table.goalDifference}</td>
          <td className="px-2 font-semibold text-xs py-2">{table.points}</td>
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

export default MiniTable;
