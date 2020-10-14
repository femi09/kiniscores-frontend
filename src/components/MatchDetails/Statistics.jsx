import React from "react";

const Stats = () => {
  return (
    <div>
      <div className="py-4 bg-gray-100">
        <div className="flex justify-around border-t-2 border-b-2 text-blue-900 text font-bold py-2">
          <div className="flex justify-start items-center">
            <p className="mr-1">Liverpool</p>
            <img src="/assets/64.png" className="w-6 h-6" alt="" />
          </div>
          <div className="mr-2">
            <p>Match Stats</p>
          </div>
          <div className="flex justify-between items-center">
            <img src="/assets/57.png" className="w-6 h-6" alt="" />
            <p className="ml-1">Arsenal</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">5</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Shots</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">3</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">60%</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Possession</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">40%</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">3</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Shots on target</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">2</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">84%</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Pass accuracy</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">72%</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">14</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Fouls</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">11</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">2</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Yellow cards</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">1</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">1</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Red cards</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">0</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">4</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Offsides</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">4</p>
          </div>
        </div>
        <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
          <div className="w-1/3 text-center">
            <p className="">10</p>
          </div>
          <div className="w-1/3 text-center ml-2">
            <p>Corners</p>
          </div>
          <div className="w-1/3 text-center">
            <p className="">8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
