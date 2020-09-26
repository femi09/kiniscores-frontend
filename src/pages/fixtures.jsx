import React, { useState, useEffect } from "react";
import Fixture from "../components/fixture";
import SkeletonFixtures from "../components/Skeletons/Fixtures";
import { getPremierLeagueFixtures } from "../services/fixturesService";
import NoFixtures from "./noFixtures";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFixtures = async () => {
      const { data: fixtures } = await getPremierLeagueFixtures();
      setFixtures(fixtures);
      setLoading(false);
    };
    getFixtures();
  }, []);

  return (
    <div className="w-2/3 mx-auto">
      {loading ? <SkeletonFixtures /> : <Fixture fixtures={fixtures} />}
      {!loading && fixtures.length === 0 && <NoFixtures />}
    </div>
  );
};
export default Fixtures;
