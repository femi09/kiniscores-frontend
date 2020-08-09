import React from "react";

const MiniScorers = () => {
  return (
    <div>
      <div className="bg-white py-1 text-sm text-center font-bold mx-auto">
        <h1 className="text-blue-800">Top Scorers</h1>
      </div>
      <table className="table-auto container mx-auto bg-gray-200">
        <thead className="bg-blue-900 text-gray-200 text-xs">
          <tr className="">
            <th className="px-2 py-1">Pos</th>
            <th className="px-2 w-full text-left py-2">Player</th>
            <th className="px-2 py-1">Team</th>
            <th className="px-2 py-1">Goals</th>
          </tr>
        </thead>
        <tbody className="text-xs text-center text-gray-800">
          <tr>
            <td className="py-2 font-semibold">1</td>
            <td className=" flex text-left font-semibold py-2">Jaime Vardy</td>
            <td className="px-2 font-semibold py-2">
            <img
                  className="w-4 h-4 mr-1"
                  src={`./assets/338.png`}
                  alt=""
                />
            </td>
            <td className="px-2 font-semibold text-xs py-2">23</td>
          </tr>
          <tr>
            <td className="py-2 font-semibold text-xs">2</td>
            <td className=" flex text-left font-semibold py-2">Aubameyang</td>
            <td className="px-2 font-semibold text-xs py-2">
            <img
                  className="w-4 h-4 mr-1"
                  src={`./assets/57.png`}
                  alt=""
                />
            </td>
            <td className="px-2 font-semibold text-xs py-2">22</td>
          </tr>
          <tr>
            <td className="py-2 font-semibold">3</td>
            <td className=" flex text-left font-semibold py-2">Danny Ings</td>
            <td className="px-2 font-semibold text-xs py-2">
            <img
                  className="w-4 h-4 mr-1"
                  src={`./assets/340.png`}
                  alt=""
                />
            </td>
            <td className="px-2 font-semibold text-xs py-2">22</td>
          </tr>
        </tbody>
      </table>
      <div className="text-right text-xs p-2 font-bold  text-blue-900">
        View full list
      </div>
    </div>
  );
};

export default MiniScorers;
