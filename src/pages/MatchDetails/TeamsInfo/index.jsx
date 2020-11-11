import React, { useState, useEffect } from "react";
import { formatFixturesDate, formatMatchTime } from "../../../utils/formatTime";
import { truncateTeamName } from "../../../utils/truncate";
import moment from "moment";

const TeamsInfo = ({ fixture }) => {
  const [homeScorers, setHomeScorers] = useState([]);
  const [awayScorers, setAwayScorers] = useState([]);

  useEffect(() => {
    if (fixture.status === "Not Started") {
      setHomeScorers([]);
      setAwayScorers([]);
    } else if (fixture.events === null) {
      setHomeScorers([]);
      setAwayScorers([]);
    } else {
      let events = fixture.events;
      let homeScorers = events.filter(
        (event) =>
          event.type === "Goal" &&
          event.detail !== "Missed Penalty" &&
          event.teamName === fixture.homeTeam.team_name
      );
      let awayScorers = events.filter(
        (event) =>
          event.type === "Goal" &&
          event.detail !== "Missed Penalty" &&
          event.teamName === fixture.awayTeam.team_name
      );
      setHomeScorers(homeScorers);
      setAwayScorers(awayScorers);
    }
  }, [fixture]);

  let today = new Date();
  return (
    <div
      className="flex flex-col justify-between"
      style={{
        backgroundImage: "url('/assets/pitch.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "center",
      }}
    >
      {/* upper */}
      <div className="flex bg-blue-900 bg-opacity-75 px-2 sm:px-4 py-2 my-3 justify-between text-gray-100 text-xs font-bold">
        <div className="flex justify-between">
          {fixture.statusShort === "1H" ||
          fixture.statusShort === "2H" ||
          fixture.statusShort === "HT" ? (
            <div className="flex items-center sm:mr-4">
              <img className="w-4 h-4" src="/assets/red-circle-48.png" alt="" />
              <p className="mx-1 text-xs sm:text-md">LIVE</p>
            </div>
          ) : formatFixturesDate(fixture.event_date) ===
            formatFixturesDate(today) ? (
            <div className="flex items-center mr-4">
              <img className="w-4 h-4" src="/assets/calendar.png" alt="" />
              <p className="text-xs sm:text-md mx-2">TODAY</p>
            </div>
          ) : formatFixturesDate(moment(today).add(-1, "days").format()) ===
            formatFixturesDate(fixture.event_date) ? (
            <div className="flex items-center sm:mr-4">
              <img
                className="w-2 h-2 sm:w-4 sm:h-4"
                src="/assets/calendar.png"
                alt=""
              />
              <p className="text-xs sm:text-md mx-2">YESTERDAY</p>
            </div>
          ) : formatFixturesDate(moment(today).add(1, "days").format()) ===
            formatFixturesDate(fixture.event_date) ? (
            <div className="flex items-center sm:mr-4">
              <img
                className="w-2 h-2 sm:w-4 sm:h-4"
                src="/assets/calendar.png"
                alt=""
              />
              <p className="mx-2">TOMORROW</p>
            </div>
          ) : (
            <div className="flex items-center sm:mr-4">
              <img
                className="w-4 h-4 sm:w-4 sm:h-4"
                src="/assets/calendar.png"
                alt=""
              />
              <p className="mx-2">{formatFixturesDate(fixture.event_date)}</p>
            </div>
          )}
          <div className="flex mx-2 items-center">
            <img
              className="w-4 h-4 sm:w-6 sm:h-6"
              src="/assets/stadium-48.png"
              alt=""
            />
            <p className="ml-1">{fixture.venue}</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-4 h-4 sm:w-6 sm:h-6"
            src="/assets/referee-48.png"
            alt=""
          />
          <p className="ml-1">{fixture.referee}</p>
        </div>
      </div>
      <div className="flex justify-around items-center bg-blue-900 mt-16">
        {/* TeamA */}
        <div className="w-3/5 sm:w-2/5 flex items-center justify-start font-bold text-sm sm:text-xl lg:text-2xl text-white sm:px-4">
          <img
            className="w-8 h-8 sm:w-16 sm:h-16 my-1"
            src={fixture.homeTeam.logo}
            alt=""
          />
          <p className="px-2 hidden sm:block">{fixture.homeTeam.team_name}</p>
          <p className="mx-1 sm:hidden">
            {truncateTeamName(fixture.homeTeam.team_name)}
          </p>
        </div>

        {/* ScoreBoard */}
        {fixture.statusShort === "NS" ||
        fixture.statusShort === "TBD" ||
        fixture.statusShort === "PST" ? (
          <div className="sm:w-1/5 text-white text-lg sm:text-3xl text-center font-bold py-6">
            vs
          </div>
        ) : (
          <div
            className={
              fixture.status === "Match Finished"
                ? `sm:w-1/7 flex text-xl sm:text-4xl justify-center py-3 px-2 font-bold text-white bg-red-500`
                : `sm:w-1/7 text-xl flex sm:text-4xl justify-center py-3 px-2 font-bold text-white bg-green-500`
            }
          >
            <p className="sm:px-1">{fixture.goalsHomeTeam}</p>
            <p className="px-1">-</p>
            <p className="sm:px-1">{fixture.goalsAwayTeam}</p>
          </div>
        )}

        {/* TeamB */}
        <div className="w-3/5 sm:w-2/5 flex items-center justify-end font-bold text-sm sm:text-xl lg:text-2xl text-white sm:px-4">
          <p className="px-2 hidden sm:block">{fixture.awayTeam.team_name}</p>
          <p className="mx-1 sm:hidden">
            {truncateTeamName(fixture.awayTeam.team_name)}
          </p>
          <img
            className="w-8 h-8 sm:w-16 sm:h-16 my-1"
            src={fixture.awayTeam.logo}
            alt=""
          />
        </div>
      </div>
      <div className="bg-blue-800 bg-opacity-75 text-white p-2 sm:p-4">
        <div className="flex sm:justify-around text-xs font-semibold mx-auto py-2 sm:p-4 sm:mx-4 border-b">
          <div className="w-3/5 sm:w-1/3">
            {homeScorers.length !== 0 &&
              homeScorers.map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right mx-1 items-center justify-start"
                >
                  <p className="mr-2 sm:w-1/2">
                    {`${scorer.elapsed_plus}` === "null"
                      ? `${scorer.player} ${scorer.elapsed}'`
                      : `${scorer.player} ${scorer.elapsed}+${scorer.elapsed_plus}'`}
                    {scorer.detail === "Penalty"
                      ? " (pen)"
                      : scorer.detail === "Own Goal"
                      ? " (og)"
                      : ""}
                  </p>

                  <div className="text-left">
                    {scorer.detail === "Own Goal" ? (
                      <img
                        className="w-3 h-3"
                        src="/assets/soccer-ball-red.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-3 h-3"
                        src="/assets/soccer-ball-2.png"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="sm:w-1/3 text-center sm:pl-2">
            <p>{fixture.statusShort}</p>
            <p className="font-semibold">
              Kick-Off:{" "}
              <span className="font-bold">
                {formatMatchTime(fixture.event_date)}
              </span>
            </p>
          </div>
          <div className="w-3/5 sm:w-1/3">
            {awayScorers.length !== 0 &&
              awayScorers.map((scorer, index) => (
                <div key={index} className="flex items-center justify-end">
                  <p className="mr-2">
                    {`${scorer.elapsed_plus}` === "null"
                      ? `${scorer.player} ${scorer.elapsed}'`
                      : `${scorer.player} ${scorer.elapsed}+${scorer.elapsed_plus}'`}
                    {scorer.detail === "Penalty"
                      ? " (pen)"
                      : scorer.detail === "Own Goal"
                      ? " (og)"
                      : ""}
                  </p>
                  {scorer.detail === "Own Goal" ? (
                    <img
                      className="w-3 h-3"
                      src="/assets/soccer-ball-red.png"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-3 h-3"
                      src="/assets/soccer-ball-2.png"
                      alt=""
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="flex sm:justify-around text-xs font-semibold mx-auto py-2 sm:p-4 sm:mx-4">
          <div className="w-3/5 sm:w-1/3 text-left">
            {homeScorers.length !== 0 &&
              homeScorers.map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right mx-1 items-center justify-start"
                >
                  {scorer.assist !== null && (
                    <p className="mr-2 sm:w-1/2">
                      {`${scorer.elapsed_plus}` === "null"
                        ? `${scorer.assist} ${scorer.elapsed}'`
                        : `${scorer.assist} ${scorer.elapsed}+${scorer.elapsed_plus}'`}
                    </p>
                  )}
                </div>
              ))}
          </div>
          <div className="sm:w-1/3 text-center sm:pl-4">
            {fixture.status !== "Not Started" && <p>Assits</p>}
          </div>
          <div className="w-3/5 sm:w-1/3 text-right">
            {awayScorers.length !== 0 &&
              awayScorers.map((scorer, index) => (
                <div
                  key={index}
                  className="flex text-right items-center justify-end"
                >
                  {scorer.assist !== null && (
                    <p className="mr-2 sm:w-1/2">
                      {`${scorer.elapsed_plus}` === "null"
                        ? `${scorer.assist} ${scorer.elapsed}'`
                        : `${scorer.assist} ${scorer.elapsed}+${scorer.elapsed_plus}'`}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsInfo;
