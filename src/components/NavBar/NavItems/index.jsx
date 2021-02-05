import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavItems = () => {
  return (
    <div className="lg:hidden bg-white py-2 xl:p-4 flex-row items-center">
      <ul className="nav flex disable-scrollbars overflow-x-auto justify-between xl:justify-center align-center">
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/">News Stream</Link>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/fixtures">Fixtures</Link>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/results/premier_league/2790">Results</Link>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/standings/premier_league/2790">Standings</Link>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/scorers/premier_league/2790">Top Scorers</Link>
        </li>
        <li className="px-6 flex flex-none xl:px-8 text-blue-800 font-semibold cursor-pointer hover:text-gray-500">
          <Link to="/column">Column</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
