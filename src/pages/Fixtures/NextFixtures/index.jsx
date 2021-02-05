import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { competitions } from "../../../utils/competitions";
import SkeletonFixtures from "../../../components/Skeletons/Fixtures";
import { getNextLeagueFixtures } from "../../../services/fixturesService";
import { formatFixturesDate } from "../../../utils/formatTime";
import NextFixture from "./NextFixture";

const NextFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fixtures_dates, setFixturesDates] = useState([]);
  const [league, setLeague] = useState("");
  const { league_id } = useParams();

  useEffect(() => {
    const getNextFixtures = async () => {
      try {
        const { data } = await getNextLeagueFixtures(league_id);
        let fixtures = data.reduce((r, a) => {
          r[formatFixturesDate(a.event_date)] = [
            ...(r[formatFixturesDate(a.event_date)] || []),
            a,
          ];
          return r;
        }, {});
        let fixtures_dates = Object.keys(fixtures);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        setFixturesDates(fixtures_dates);
        setFixtures(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getNextFixtures();
  }, [league_id]);

  return (
    <div className="mx-2 lg:mx-4">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <div>
          <NextFixture fixtures={fixtures} fixtures_dates={fixtures_dates} league={league} />
        </div>
      )}
    </div>
  );
};

export default NextFixtures;
