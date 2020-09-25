import React, { useState, useEffect } from "react";
import Fixture from "../components/fixture";
import SkeletonFixtures from "../components/Skeletons/Fixtures";
import {
  getPremierLeagueFixtures,
  getNextPremierLeagueFixtures,
} from "../services/fixturesService";
import { formatCurrentDate } from "../utils";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState(new Date());
  const [nextDate, setNexDate] = useState("");

  useEffect(() => {
    const getFixtures = async () => {
      const { data: fixtures } = await getPremierLeagueFixtures();
      setFixtures(fixtures);
    };
    getFixtures();
    setLoading(false);
  }, []);

  useEffect(() => {
    const getNextFixtures = async () => {
      const { data: fixtures } = await getNextPremierLeagueFixtures();
      setNexDate(fixtures[0].event_date);
    };
    getNextFixtures();
    setLoading(false);
  }, []);

  return (
    <div className="w-2/3 mx-auto">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <Fixture fixtures={fixtures} today={today} />
      )}

      {!loading && fixtures.length === 0  && (
        <>
          <div className="text-3xl font-semibold text-blue-800 p-8 bg-gray-200 shadow-lg text-center mx-auto">
            No Premier League fixtures today
            <p className="text-sm my-6 font-bold">
              Next fixtures on {nextDate}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Fixtures;
