import React, { useState, useEffect } from "react";
import { getPremierLeagueMatches } from "../services/matchesService";
import { formatDate, formatMatchTime } from "../utils/formatTime";
import Result from "../components/result";
import MatchDay from "../components/matchDay";
import _ from "lodash";
import SkeletonMatches from "../components/Skeletons/Match";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [currentMatchDay, setCurrentMatchDay] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMatches = async () => {
      const { data: matches } = await getPremierLeagueMatches();

      let latestMatches = matches.filter(
        (match) => match.matchday === match.season.currentMatchday
      );
      const sortedMatches = _.sortBy(latestMatches, (dateObj) => {
        return new Date(dateObj.utcDate);
      });
      setMatches(sortedMatches);
      setCurrentMatchDay(latestMatches[0].matchday);
      setLoading(false);
      console.log(matches)
    };
    getMatches();
  }, []);

  const getPrevMatchDay = async () => {
    setLoading(true);
    const matchday =
      currentMatchDay === 1 ? currentMatchDay : currentMatchDay - 1;
    const { data: matches } = await getPremierLeagueMatches();
    const prevMatches = matches.filter((match) => match.matchday === matchday);
    const sortedMatches = _.sortBy(prevMatches, (dateObj) => {
      return new Date(dateObj.utcDate);
    });
    setMatches(sortedMatches);
    setCurrentMatchDay(matchday);
    setLoading(false);
  };

  const getNextMatchDay = async () => {
    setLoading(true);
    const matchday =
      currentMatchDay === 38 ? currentMatchDay : currentMatchDay + 1;
    const { data: matches } = await getPremierLeagueMatches();
    const nextMatches = matches.filter((match) => match.matchday === matchday);
    const sortedMatches = _.sortBy(nextMatches, (dateObj) => {
      return new Date(dateObj.utcDate);
    });
    setMatches(sortedMatches);
    setCurrentMatchDay(matchday);
    setLoading(false);
  };

  return (
    <div className="container mx-auto bg-white w-2/3 shadow-lg">
      {!loading && matches.length === 0 && (
        <h1 className="text-3xl font-semibold text-blue-800  text-center mx-auto mt-8">
          No matches for the current season
        </h1>
      )}

      {matches.length !== 0 && (
        <div className="bg-white py-4 text-gray-800 text-center font-bold shadow-lg">
          <MatchDay
            matchday={currentMatchDay}
            nextMatch={getNextMatchDay}
            prevMatch={getPrevMatchDay}
          />
        </div>
      )}

      {loading ? (
        <SkeletonMatches />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {matches.map((match) => (
            <Result
              key={match.id}
              match={match}
              matchDate={formatDate}
              matchTime={formatMatchTime}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;
