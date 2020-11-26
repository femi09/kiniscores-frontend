import React, { useState, useEffect } from "react";
import Fixture from "./Today'sFixtures";
import SkeletonFixtures from "../../components/Skeletons/Fixtures";
import { getTodaysFixtures } from "../../services/fixturesService";
import NoFixtures from "./NoFixtures";
import { formatDay } from "../../utils/formatTime";
import _ from "lodash";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [competitions, setCompetitions] = useState("");
  const today = new Date();
  const day = formatDay(today);

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const { data: fixtures } = await getTodaysFixtures(day);
        const grouped_fixtures = _.groupBy(fixtures, "league.name");
        const competitions = Object.keys(grouped_fixtures)
        setCompetitions(competitions)
        setFixtures(fixtures);
        setLoading(false);
      } catch (error) {}
    };
    getFixtures();
  }, [day]);

  

  return (
    <div className="mx-2 lg:mx-4 xl:w-2/3 xl:mx-auto">
      {loading ? (
        <SkeletonFixtures />
      ) : (
      <Fixture fixtures={fixtures} competitions={competitions} />
      )}
      {!loading && fixtures.length === 0 && <NoFixtures />}
    </div>
  );
};
export default Fixtures;
