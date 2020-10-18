import React, { useState, useEffect } from "react";
import _ from "lodash";

const Stats = ({ fixture }) => {
  const [stats, setStats] = useState([]);
  const [statsName, setStatsName] = useState([]);

  useEffect(() => {
    if (fixture.status === "Not Started") {
      setStats([]);
      setStatsName([]);
    } else {
      let matchStats = fixture.statistics;
      matchStats = _.toArray(matchStats);

      let statsName = fixture.statistics;
      statsName = Object.keys(statsName);

      setStats(matchStats);
      setStatsName(statsName);
    }
  }, [fixture]);

  return (
    <div>
      {stats.length === 0 ? (
        <div className="w-2/3 mx-auto bg-gray-200 text-xl text-center shadow-lg my-6">
          <h1 className="text-blue-900 p-4">
            There are no match statistics yet for this fixture
          </h1>
        </div>
      ) : (
        <div className="py-4 bg-gray-100">
          <div className="flex justify-around items-center border-t-2 border-b-2 text-blue-900 text font-bold py-2">
            <div className="w-2/5 flex justify-center items-center">
              <p className="mr-3">{fixture.homeTeam.team_name}</p>
              <img src={fixture.homeTeam.logo} className="w-8 h-8" alt="" />
            </div>
            <div className="w-1/5 text-center">
              <p>Match Stats</p>
            </div>
            <div className=" w-2/5 flex justify-center items-center">
              <img src={fixture.awayTeam.logo} className="w-8 h-8" alt="" />
              <p className="ml-3">{fixture.awayTeam.team_name}</p>
            </div>
          </div>
          <div className="flex justify-around font-semibold text-sm text-blue-900 py-2">
            <div className="w-1/3 text-center">
              {stats.map((stat, index) => (
                <p key={index} className="py-2">
                  {stat.home === null ? 0 : stat.home}
                </p>
              ))}
            </div>
            <div className="w-1/3 text-center ml-2">
              {statsName.map((stat, index) => (
                <p className="py-2" key={index}>
                  {stat}
                </p>
              ))}
            </div>
            <div className="w-1/3 text-center">
              {stats.map((stat, index) => (
                <p key={index} className="py-2">
                  {stat.away === null ? 0 : stat.away}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
