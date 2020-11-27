import React, { useState, useEffect } from "react";
import _ from "lodash";
import moment from "moment";
import Fixture from "./Today'sFixture";
import SkeletonFixtures from "../../../components/Skeletons/Fixtures";
import { getTodaysFixtures } from "../../../services/fixturesService";
import NoFixtures from "../NoFixtures";
import { formatDay } from "../../../utils/formatTime";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [competitions, setCompetitions] = useState("");
  const [day, setDay] = useState("");
  const date = new Date();
  const today = formatDay(date);

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const { data: fixtures } = await getTodaysFixtures(today);
        const grouped_fixtures = _.groupBy(fixtures, "league.name");
        const competitions = Object.keys(grouped_fixtures);
        setCompetitions(competitions);
        setFixtures(fixtures);
        setDay(new Date());
        setLoading(false);
      } catch (error) {}
    };
    getFixtures();
  }, [today]);

  const handleNext = async () => {
    try {
      const nextday = moment.utc(day).add(1, "days").toDate();
      setDay(nextday);
      setLoading(true);
      const tomorrow = formatDay(nextday);
      const { data: fixtures } = await getTodaysFixtures(tomorrow);
      const grouped_fixtures = _.groupBy(fixtures, "league.name");
      const competitions = Object.keys(grouped_fixtures);
      setCompetitions(competitions);
      setFixtures(fixtures);
      setLoading(false);
    } catch (error) {
      console.log(error.toString());
    }
  };

  const handlePrev = async () => {
    try {
      const prevday = moment.utc(day).add(-1, "days").toDate();
      setDay(prevday);
      setLoading(true);
      const yesterday = formatDay(prevday);
      const { data: fixtures } = await getTodaysFixtures(yesterday);
      const grouped_fixtures = _.groupBy(fixtures, "league.name");
      const competitions = Object.keys(grouped_fixtures);
      setCompetitions(competitions);
      setFixtures(fixtures);
      setLoading(false);
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <div className="mx-2 lg:mx-4 xl:w-2/3 xl:mx-auto">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <Fixture
          fixtures={fixtures}
          competitions={competitions}
          handlePrev={handlePrev}
          handleNext={handleNext}
          day={day}
        />
      )}
      {!loading && fixtures.length === 0 && <NoFixtures />}
    </div>
  );
};
export default Fixtures;
