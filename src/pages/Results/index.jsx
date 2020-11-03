import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getPremierLeagueResults,
  getMatchday,
} from "../../services/matchesService";
import { formatDate, formatMatchTime } from "../../utils/formatTime";
import Result from "./MatchResult";
import MatchDay from "./MatchDay";
import SkeletonMatches from "../../components/Skeletons/Match";
import SkeletonMatchDay from "../../components/Skeletons/Match/SkeletonMatchDay";


const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [currentMatchDay, setCurrentMatchDay] = useState("");
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getMatches = async () => {
      const { data: matchday } = await getMatchday();
      setCurrentMatchDay(matchday);
    };
    getMatches();
  }, []);

  useEffect(() => {
    const getResults = async () => {
      const { data: latestmatches } = await getPremierLeagueResults(
        currentMatchDay
      );
      setMatches(latestmatches);
      setLoading(false);
    };
    getResults();
  }, [currentMatchDay]);

  const getPrevMatchDay = async () => {
    const matchday =
      currentMatchDay === 1 ? currentMatchDay : currentMatchDay - 1;
    setLoading(true);
    setCurrentMatchDay(matchday);
    const { data: latestmatches } = await getPremierLeagueResults(matchday);
    setMatches(latestmatches);
    setLoading(false);
  };

  const getNextMatchDay = async () => {
    const matchday =
      currentMatchDay === 38 ? currentMatchDay : currentMatchDay + 1;
    setCurrentMatchDay(matchday);
    setLoading(true);
    const { data: latestmatches } = await getPremierLeagueResults(matchday);

    setMatches(latestmatches);
    setLoading(false);
  };

  return (
    <div className="container mx-auto bg-white w-2/3 shadow-lg">
      {!loading && currentMatchDay === "" && (
        <h1 className="text-3xl font-semibold text-blue-800  text-center mx-auto mt-8">
          No matches for the current season
        </h1>
      )}

      <div className="bg-white py-4 text-gray-800 text-center font-bold">
        {loading && matches.length === 0 ? (
          <SkeletonMatchDay />
        ) : (
          <MatchDay
            matchday={currentMatchDay}
            nextMatch={getNextMatchDay}
            prevMatch={getPrevMatchDay}
          />
        )}
      </div>

      {loading ? (
        <SkeletonMatches />
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {matches.map((match) => (
            <Link
              to={`/fixture/${match.fixture_id}/${
                match.status === "Not Started" ? `head-to-head` : `events`
              }`}
              key={match.fixture_id}
            >
              <Result
                match={match}
                matchDate={formatDate}
                matchTime={formatMatchTime}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;
