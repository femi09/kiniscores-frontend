import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Fixture from "./Today'sFixtures";
import SkeletonFixtures from "../../../components/Skeletons/Fixtures";
import { getLeagueFixtures } from "../../../services/fixturesService";
import NoFixtures from "./NoFixtures";
import { formatDay } from "../../../utils/formatTime";
import Dropdown from "../../../components/Dropdowns/Dropdown";

const OtherFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("Premier League");
  const today = new Date();
  const day = formatDay(today);
  const { league_id } = useParams();

  useEffect(() => {
    const getFixtures = async () => {
      try {
        const { data: fixtures } = await getLeagueFixtures(day, league_id)
        setFixtures(fixtures);
        setLoading(false); 
        console.log(fixtures)
      } catch (error) {
        console.log(error);
      }
    };
    getFixtures();
    console.log(league_id);
  }, [day]);

  const handleCompetition = (league) => {
    setLeague(league);
  };

  return (
    <div className="mx-2 lg:mx-4 xl:w-2/3 xl:mx-auto">
      <div className="my-4">
        <Dropdown league={league} handleCompetition={handleCompetition} />
      </div>

      {/* {loading ? (
        <SkeletonFixtures />
      ) : (
        <Fixture
          fixtures={fixtures}
        />
      )} */}
      {!loading && fixtures.length === 0 && <NoFixtures />}
    </div>
  );
};
export default OtherFixtures;
