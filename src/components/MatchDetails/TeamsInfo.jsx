import React from "react";

const TeamsInfo = () => {
  return (
    <div className="flex flex-col justify-center p-2 bg-gray-200">
      {/* upper */}
      <div className="flex justify-between items-center text-center items-center mx-4">
        {/* TeamA */}
        <div className="flex items-center  teamA font-bold text-xl">
          <img className="" src="./assets/t14.png" alt="" />
          <p className="p-2">Liverpool</p>
        </div>
        {/* ScoreBoard */}
        <div className="flex text-3xl p-2 font-bold text-blue-900 score">
          <p className="px-1">3</p>
          <p className="px-1">-</p>
          <p className="px-1">1</p>
        </div>
        {/* TeamB */}
        <div className="flex items-center teamA font-bold text-xl">
          <p className="p-2">Arsenal</p>
          <img className="" src="./assets/t3.png" alt="" />
        </div>
      </div>
      {/* Middle */}

      <div className="flex justify-around my-4">
        <div className="text-xs font-bold text-gray-700 teamA-scorers">
          <p>Sadio Mane 28'</p>
          <p>Andrew Robertson 34'</p>
          <p>Diogo Jota 88'</p>
        </div>
        <div className="status text-center px-2 font-bold text-blue-900">
          <p>FT</p>
          <p>Kick-Off: 20:00</p>
        </div>
        <div className="text-xs font-bold text-gray-700 teamB-scorers">
          <p>Alexandre Lacazette 25'</p>
        </div>
      </div>
      {/* Lower */}
      <div className="flex justify-around my-4">
        <div className="text-xs font-bold text-gray-700 teamA-scorers">
          <p>Sadio Mane 28'</p>
          <p>Andrew Robertson 34'</p>
          <p>Diogo Jota 88'</p>
        </div>
        <div className="status text-center font-bold text-blue-900">
          <p>FT</p>
          <p>Kick-Off: 20:00</p>
        </div>
        <div className="text-xs font-bold text-gray-700 teamB-scorers">
          <p>Alexandre Lacazette 25'</p>
        </div>
      </div>
    </div>
  );
};

export default TeamsInfo;
