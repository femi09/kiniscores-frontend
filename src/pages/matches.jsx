import React, { useState, useEffect } from "react";
import { footballApi } from "../config.json";
import femi from "../services/httpService";
import { formatDate } from "../utils";
import Match from "./../components/match";
import MatchDay from "./../components/matchDay";

const authToken = process.env.REACT_APP_KINISCORES_API_KEY;

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [currentMatchDay, setCurrentMatchDay] = useState(38);

  useEffect(() => {
    const getMatches = async () => {
      const { data } = await femi.get(
        `${footballApi}/matches?matchday=${currentMatchDay}`,
        {
          headers: { "X-Auth-Token": authToken },
        }
      );
      setMatches(data.matches);
    };
    getMatches();
  }, [currentMatchDay]);

  const getPrevMatchDay = async () => {
    const matchday =
      currentMatchDay === 1 ? currentMatchDay : currentMatchDay - 1;
    const { data } = await femi.get(
      `${footballApi}/matches?matchday=${matchday}`,
      {
        headers: { "X-Auth-Token": authToken },
      }
    );
    setMatches(data.matches);
    setCurrentMatchDay(matchday);
  };

  const getNextMatchDay = async () => {
    const matchday =
      currentMatchDay === 38 ? currentMatchDay : currentMatchDay + 1;
    const { data } = await femi.get(
      `${footballApi}/matches?matchday=${matchday}`,
      {
        headers: { "X-Auth-Token": authToken },
      }
    );
    setMatches(data.matches);
    setCurrentMatchDay(matchday);
  };

  return (
    <div className="container mx-auto bg-white w-2/3 shadow-lg">
      <div className="bg-white py-4 text-gray-800 text-center font-bold shadow-lg">
        <MatchDay
          matchday={currentMatchDay}
          nextMatch={getNextMatchDay}
          prevMatch={getPrevMatchDay}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {matches.map((match) => (
          <Match key={match.id} match={match} date={formatDate} />
        ))}
      </div>
    </div>
  );
};

export default Matches;
