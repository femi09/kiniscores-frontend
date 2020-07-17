import React, { Component } from "react";

class Standings extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="shadow text-gray-800 lg font-bold w-2/3 mx-auto">
        <h1>Standings</h1>
        </div>
        <table className="table-auto container mx-auto w-2/3 bg-gray-200">
          <thead className="bg-blue-900 text-gray-300 text-sm">
            <tr className="">
              <th className="px-2 py-2">Position</th>
              <th className="px-2 w-1/2 text-left py-2">Club</th>
              <th className="px-4 py-2">Played</th>
              <th className="px-4 py-2">Won</th>
              <th className="px-4 py-2">Drew</th>
              <th className="px-4 py-2">Lost</th>
              <th className="px-4 py-2">GF</th>
              <th className="px-4 py-2">GA</th>
              <th className="px-4 py-2">GD</th>
              <th className="px-4 py-2">Points</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="">
              <td className="py-2">1</td>
              <td className=" text-left py-2">Liverpool</td>
              <td className="px-4 py-2">36</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">77</td>
              <td className="px-4 py-2">29</td>
              <td className="px-4 py-2">48</td>
              <td className="px-4 py-2">93</td>
            </tr>

            <tr className="">
              <td className=" py-2">2</td>
              <td className=" text-left py-2">Manchester City</td>
              <td className="px-4 py-2">36</td>
              <td className="px-4 py-2">24</td>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">9</td>
              <td className="px-4 py-2">93</td>
              <td className="px-4 py-2">35</td>
              <td className="px-4 py-2">58</td>
              <td className="px-4 py-2">75</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Standings;
