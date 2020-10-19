import React, { useState, useEffect } from "react";
import {
  getPremierLeagueResults,
  getMatchday,
} from "../services/matchesService";
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
      const { data: matchday } = await getMatchday();
      setCurrentMatchDay(matchday);
      setLoading(false);
    };
    getMatches();
  }, []);

  useEffect(() => {
    const getResults = async () => {
      const { data: matches } = await getPremierLeagueResults(currentMatchDay);
      setMatches(matches);
      setLoading(false);
    };
    getResults();
  }, [currentMatchDay]);

  const getPrevMatchDay = async () => {
    const matchday =
      currentMatchDay === 1 ? currentMatchDay : currentMatchDay - 1;

    // const prevMatches = matches.filter((match) => match.matchday === matchday);
    // const sortedMatches = _.sortBy(prevMatches, (dateObj) => {
    //   return new Date(dateObj.utcDate);
    // });
    // setMatches(sortedMatches);
    setCurrentMatchDay(matchday);
    setLoading(false);
  };

  const getNextMatchDay = async () => {
    // setLoading(true);
    const matchday =
      currentMatchDay === 38 ? currentMatchDay : currentMatchDay + 1;

    // const nextMatches = matches.filter((match) => match.matchday === matchday);
    // const sortedMatches = _.sortBy(nextMatches, (dateObj) => {
    //   return new Date(dateObj.utcDate);
    // });
    // setMatches(sortedMatches);
    setCurrentMatchDay(matchday);
    setLoading(false);
  };

  return (
    <div className="container mx-auto bg-white w-2/3 shadow-lg">
      {loading ? (
        <SkeletonMatches />
      ) : (
        <>
          <div className="bg-white py-4 text-gray-800 text-center font-bold shadow-lg">
            <MatchDay
              matchday={currentMatchDay}
              nextMatch={getNextMatchDay}
              prevMatch={getPrevMatchDay}
            />
          </div>
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
        </>
      )}

      {!loading && matches.length === 0 && (
        <h1 className="text-3xl font-semibold text-blue-800  text-center mx-auto mt-8">
          No matches for the current season
        </h1>
      )}
    </div>
  );
};

export default Matches;
