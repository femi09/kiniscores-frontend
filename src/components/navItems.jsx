import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="bg-gray-200 p-4 flex-row items-center">
      <ul className="flex center justify-center align-center">
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/matches">Matches</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/standings">Standings</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/news">Transfer News</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/scorers">Top Scorers</Link>
        </li>
        <li className="px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
        <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
