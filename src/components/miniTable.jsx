import React from "react";

const MiniTable = () => {
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
            <tr>
              <td className="py-2 font-semibold text-xs">1</td>
              <td className=" flex text-left text-sm py-2">
                <img
                  className="w-4 h-4 mr-1"
                  src={`./assets/64.png`}
                  alt=""
                />
                <p className="w-full text-xs font-semibold">Liverpool</p>
              </td>
              <td className="px-2 font-semibold text-xs py-2">38</td>
              <td className="px-2 font-semibold text-xs py-2">52</td>
              <td className="px-2 font-semibold text-xs py-2">99</td>
            </tr>

            <tr>
              <td className="py-2 font-semibold text-xs">2</td>
              <td className=" flex text-left text-sm py-2">
                <img
                  className="w-4 h-4 mr-1"
                  src={`./assets/65.png`}
                  alt=""
                />
                <p className="w-full text-xs font-semibold">Man City</p>
              </td>
              <td className="px-2 font-semibold text-xs py-2">38</td>
              <td className="px-2 font-semibold text-xs py-2">67</td>
              <td className="px-2 font-semibold text-xs py-2">81</td>
            </tr>

            <tr>
              <td className="py-2 font-semibold text-xs">3</td>
              <td className=" flex text-left text-sm py-2">
                <img
                  className="w-4 h-4 mr-1"
                  src={`./assets/66.png`}
                  alt=""
                />
                <p className="text-xs font-semibold">Man Utd</p>
              </td>
              <td className="px-2 font-semibold text-xs py-2">38</td>
              <td className="px-2 font-semibold text-xs py-2">30</td>
              <td className="px-2 font-semibold text-xs py-2">66</td>
            </tr>

            <tr>
              <td className="py-2 font-semibold text-xs">4</td>
              <td className=" flex text-left text-sm py-2">
                <img
                  className="w-4 h-4 mr-1"
                  src={`./assets/61.png`}
                  alt=""
                />
                <p className="text-xs font-semibold">Chelsea</p>
              </td>
              <td className="px-2 font-semibold text-xs py-2">38</td>
              <td className="px-2 font-semibold text-xs py-2">15</td>
              <td className="px-2 font-semibold text-xs py-2">66</td>
            </tr>
        </tbody>
      </table>
      <div className="text-right text-xs p-2 font-bold  text-blue-900">
      View full table
      </div>
    </div>
  );
};

export default MiniTable;
