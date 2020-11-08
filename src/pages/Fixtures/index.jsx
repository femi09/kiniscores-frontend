import React, { useState, useEffect } from "react";
import Fixture from "./Today'sFixtures";
import SkeletonFixtures from "../../components/Skeletons/Fixtures";
import { getPremierLeagueFixtures } from "../../services/fixturesService";
import NoFixtures from "./NoFixtures";
import { formatDay } from "../../utils/formatTime";
import moment from "moment";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const getFixtures = async () => {
      const day = formatDay(today);
      const { data: fixtures } = await getPremierLeagueFixtures(day);
      setFixtures(fixtures);
      setToday(today);
      setLoading(false);
    };
    getFixtures();
  }, [today]);

  const handleNextDay = async () => {
    setLoading(true)
    let tommorrow = moment(today).add(1, "days").format();
    const day = formatDay(tommorrow);
      const { data: fixtures } = await getPremierLeagueFixtures(day);
      setFixtures(fixtures);
    setToday(new Date(tommorrow));
    setLoading(false)
  };

  const handlePrevDay = async () => {
    setLoading(true)
    
    let yesterday = moment(today).add(-1, "days").format();
    
    const day = formatDay(yesterday);
    const { data: fixtures } = await getPremierLeagueFixtures(day);
    setFixtures(fixtures);
    setToday(new Date(yesterday));
    setLoading(false)
  };
  return (
    <div className="mx-2 lg:mx-4 xl:w-2/3 xl:mx-auto">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <Fixture
          fixtures={fixtures}
          today={today}
          handleNextDay={handleNextDay}
          handlePrevDay={handlePrevDay}
        />
      )}
      {!loading && fixtures.length === 0 && <NoFixtures />}
    </div>
  );
};
export default Fixtures;
