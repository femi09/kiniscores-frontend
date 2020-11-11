import React, { useState, useEffect } from "react";
import Fixture from "./Today'sFixtures";
import SkeletonFixtures from "../../components/Skeletons/Fixtures";
import { getPremierLeagueFixtures } from "../../services/fixturesService";
import NoFixtures from "./NoFixtures";
import { formatDay } from "../../utils/formatTime";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const today = new Date();
  const day = formatDay(today);

  useEffect(() => {
    const getFixtures = async () => {
      const { data: fixtures } = await getPremierLeagueFixtures(day);
      setFixtures(fixtures);
      setLoading(false);
    };
    getFixtures();
  }, [day]);
  
  return (
    <div className="mx-2 lg:mx-4 xl:w-2/3 xl:mx-auto">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <Fixture
          fixtures={fixtures}
        />
      )}
      {!loading && fixtures.length === 0 && <NoFixtures />}
    </div>
  );
};
export default Fixtures;
