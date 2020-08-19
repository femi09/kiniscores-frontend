import React, { useState, useEffect } from "react";
import { getPremierLeagueMatches } from "../services/matchesService";
import { formatDate } from "../utils";
import Match from "../components/match";
import MatchDay from "../components/matchDay";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [currentMatchDay, setCurrentMatchDay] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMatches = async () => {
      const { data } = await getPremierLeagueMatches();
      // A reducer function to group the array of matches by matchday
      let matches = data.reduce((r, a) => {
        r[a.matchday] = [...(r[a.matchday] || []), a];
        return r;
      }, {});

      // displaying the latest match by getting the last item in the matches object
      let latestMatch = Object.keys(matches).pop();
      latestMatch !== undefined && setMatches(matches[latestMatch]);
      setCurrentMatchDay(latestMatch);
      setIsLoading(false);
    };
    getMatches();
  }, []);

  const getPrevMatchDay = async () => {
    const matchday =
      currentMatchDay === 1 ? currentMatchDay : currentMatchDay - 1;
    const { data: matches } = await getPremierLeagueMatches();
    const prevMatches = matches.filter((match) => match.matchday === matchday);
    console.log(prevMatches);
    setMatches(prevMatches);
    setCurrentMatchDay(matchday);
  };

  const getNextMatchDay = async () => {
    const matchday =
      currentMatchDay === 38 ? currentMatchDay : currentMatchDay + 1;
    const { data: matches } = await getPremierLeagueMatches();
    const nextMatches = matches.filter((match) => match.matchday === matchday);
    setMatches(nextMatches);
    setCurrentMatchDay(matchday);
  };

  return (
    <div className="container mx-auto bg-white w-2/3 shadow-lg">
      {!isLoading && matches.length === 0 && (
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

      {isLoading ? (
        <div className="font-bold p-8 bg-white text-center text-2xl text-blue-700">
          <h1>Loading Matches...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {matches.map((match) => (
            <Match key={match.id} match={match} date={formatDate} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;
