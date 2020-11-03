import React, { useState, useEffect } from "react";
import _ from "lodash";

const Lineups = ({ fixture }) => {
  const [lineups, setLineups] = useState([]);
  const [homestartXI, setHomeStartXI] = useState([]);
  const [awaystartXI, setAwayStartXI] = useState([]);

  useEffect(() => {
    if (fixture.status === "Not Started") {
      setHomeStartXI([]);
      setAwayStartXI([]);
      setLineups([]);
    } else {
      let lineup = fixture.lineups;
      lineup = Object.values(lineup);

      let homeStartXI = lineup[0].startXI;
      homeStartXI = _.groupBy(homeStartXI, "pos");

      let awayStartXI = lineup[1].startXI;
      awayStartXI = _.groupBy(awayStartXI, "pos");

      homeStartXI = _.toArray(homeStartXI);
      awayStartXI = _.toArray(awayStartXI);

      setHomeStartXI(homeStartXI);
      setAwayStartXI(awayStartXI);
      setLineups(lineup);
    }
  }, [fixture]);
  return (
    <div>
      {lineups.length === 0 ? (
        <div className="w-2/3 mx-auto bg-gray-200 text-xl text-center shadow-lg my-6">
          <h1 className="text-blue-900 p-4">
            Lineups are not announced until an hour before the match
          </h1>
        </div>
      ) : (
        <div className="flex justify-around mx-8 mt-8">
          {lineups[0] !== undefined && (
            <div className="w-1/2 mr-6 border-r border-l">
              <div className="flex font-bold bg-blue-900 text-white p-1">
                <img src={fixture.homeTeam.logo} className="w-6 h-6" alt="" />
                <p className="mx-2">{fixture.homeTeam.team_name}</p>
                <p>{lineups[0].formation}</p>
              </div>

              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Goalkeeper
                </h1>
                <div className="flex border-b font-semibold text-sm py-2">
                  <div className="w-1/6 text-center">
                    {homestartXI[0][0].number}
                  </div>
                  <div className="w-1/2">{homestartXI[0][0].player}</div>
                </div>
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Defenders
                </h1>
                {homestartXI[1].map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Midfielders
                </h1>
                {homestartXI[2].map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Forwards
                </h1>
                {homestartXI[3].map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Substitutes
                </h1>
                {lineups[0].substitutes.map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="border-b">
                <h1 className="font-bold py-1 px-4 bg-blue-900 text-white">
                  Manager
                </h1>
                <div className="font-semibold text-sm py-2">
                  <div className="mx-4">{lineups[0].coach}</div>
                </div>
              </div>
            </div>
          )}

          {lineups[1] !== undefined && (
            <div className="w-1/2 border-r border-l">
              <div className="flex font-bold bg-blue-900 text-white p-1">
                <img src={fixture.awayTeam.logo} className="w-6 h-6" alt="" />
                <p className="mx-2">{fixture.awayTeam.team_name}</p>
                <p>{lineups[1].formation}</p>
              </div>
              <div className="">
                {/* Lineups */}
                <h1 className="font-bold text-center border-b py-2">
                  Goalkeeper
                </h1>
                <div className="flex border-b font-semibold text-sm py-2">
                  <div className="w-1/6 text-center">
                    {awaystartXI[0][0].number}
                  </div>
                  <div className="w-1/2">{awaystartXI[0][0].player}</div>
                </div>
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Defenders
                </h1>
                {awaystartXI[1].map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Midfielders
                </h1>
                {awaystartXI[2].map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Forwards
                </h1>
                {awaystartXI[3].map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="">
                <h1 className="font-bold text-center border-b py-2">
                  Substitutes
                </h1>
                {lineups[1].substitutes.map((player) => (
                  <div
                    key={player.player_id}
                    className="flex border-b font-semibold text-sm py-2"
                  >
                    <div className="w-1/6 text-center">{player.number}</div>
                    <div className="w-1/2">{player.player}</div>
                  </div>
                ))}
              </div>
              <div className="border-b">
                <h1 className="font-bold py-1 px-4 bg-blue-900 text-white">
                  Manager
                </h1>
                <div className="font-semibold text-sm py-2">
                  <div className="mx-4">{lineups[1].coach}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Lineups;
