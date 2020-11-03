import React, { useState, useEffect } from "react";
import { getPremierLeagueScorers } from "../../services/scorerService";
import ScorersTable from "../../components/Tables/ScorersTable";
import SkeletonScorers from "../../components/Skeletons/Scorers";

const Scorers = () => {
  const [scorers, setScorers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getScorers = async () => {
      const { data: scorers } = await getPremierLeagueScorers();
      setScorers(scorers);
      setIsLoading(false);
    };
    getScorers();
  }, []);
  return (
    <div>
      {!isLoading && scorers.length === 0 && (
        <h1 className="text-3xl font-semibold text-blue-800  text-center mx-auto mt-8">
          No scorers for the current season
        </h1>
      )}
      {isLoading ? (
        <SkeletonScorers />
      ) : (
        scorers.length !== 0 && <ScorersTable scorers={scorers} />
      )}
    </div>
  );
};

export default Scorers;
