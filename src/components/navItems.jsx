import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="bg-gray-200 p-4 flex-row items-center">
      <ul className="flex center justify-center align-center">
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/">Matches</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/standings">Standings</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/players">Players</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/teams">Teams</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/scorers">Scorers</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
