import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { competitions } from "../../../utils/competitions";
import { getLeagueStandings } from "../../../services/standingsService";
import CupTable from "../../../components/Tables/CupTable";
import CupStandingsSkeleton from "../../../components/Skeletons/Standings/CupStandings";
import Dropdown from "../../../components/Dropdowns/StandingsDropdown";

const CupStandings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("");
  const { league_id } = useParams();

  useEffect(() => {
    const getTable = async () => {
      try {
        const { data: standings } = await getLeagueStandings(league_id);
        setStandings(standings);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        setLoading(false);
      } catch (error) {
        console.log(error.toString());
      }
    };
    getTable();
  }, [league_id]);
  return (
    <div>
      {loading ? (
        <CupStandingsSkeleton />
      ) : (
        <Fragment>
          <div className="relative mx-4">
            <Dropdown league={league} />
          </div>

          {standings.map((tables, index) => (
            <CupTable key={index} tables={tables} league={league} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default CupStandings;
