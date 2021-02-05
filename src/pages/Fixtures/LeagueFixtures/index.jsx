import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import LeagueFixture from "./LeagueFixture";
import SkeletonFixtures from "../../../components/Skeletons/Fixtures";
import { getLeagueFixtures } from "../../../services/fixturesService";
import NoFixtures from "../NoFixtures";
import { competitions } from "../../../utils/competitions";
import { formatDay } from "../../../utils/formatTime";

const LeagueFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("Premier League");
  const today = new Date();
  const day = formatDay(today);
  const { league_id, league: league_slug } = useParams();

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const { data: fixtures } = await getLeagueFixtures(day, league_id);
        setFixtures(fixtures);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFixtures();
  }, [day, league_id]);

  return (
    <div className="mx-2 lg:mx-4">
      {loading ? (
        <SkeletonFixtures />
      ) : (
        <LeagueFixture
          fixtures={fixtures}
          league={league}
          league_slug={league_slug}
          league_id={league_id}
        />
      )}
      {!loading && fixtures.length === 0 && (
        <NoFixtures
          league={league}
          league_slug={league_slug}
          league_id={league_id}
        />
      )}
    </div>
  );
};
export default LeagueFixtures;
