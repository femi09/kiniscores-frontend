import React from "react";
import { Link } from "react-router-dom";

const MiniMatch = () => {
  return (
    <div>
      <div className="bg-white py-1 text-sm text-center font-bold m-auto">
        <h1 className="text-blue-800">Today's Fixtures</h1>
      </div>
      <p className="text-xs py-1 font-bold bg-blue-900 text-white">
        19 August 2020
      </p>
      <div className="flex bg-gray-200 items-center justify-center px-2 py-8 border-b">
        <h1 className="text-sm font-semibold text-blue-900 text-center mx-auto">
          No fixtures for the current day
        </h1>
        {/* <div className="flex justify-between items-center px-1 team-name">
          <img className="w-3 h-3 mr-1" src={`./assets/57.png`} alt="" />
          <span className=" font-bold text-xs">Bayern Munich</span>
          <span className="font-bold text-xs px-1"></span>
        </div>
        <div className="bg-blue-900 text-white px-1 text-xs">
          <span className="font-bold text-xs">19:30</span>
        </div>

        <div className="flex justify-between items-center px-1 team-name">
          <span className="font-bold px-1 text-xs"></span>
          <img className="w-3 h-3 mr-1" src={`./assets/61.png`} alt="" />
          <span className="font-bold text-xs">Lyon</span>
        </div> */}
      </div>
      <div className="text-right text-xs p-2 font-bold mb-8 text-blue-900">
        <Link to="/fixtures">View All</Link>
      </div>
    </div>
  );
};

export default MiniMatch;
