import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { competitions } from "../../utils/competitions";
import { getLeagueStandings } from "../../services/standingsService";
import StandingTable from "../../components/Tables/StandingTable";
import SkeletonStandings from "../../components/Skeletons/Standings";

const Standings = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState("");
  const { league_id } = useParams();

  useEffect(() => {
    const getTable = async () => {
      try {
        const { data: standings } = await getLeagueStandings(league_id);
        setTables(standings[0]);
        const league = competitions.filter(
          (competition) => competition.id.toString() === league_id
        );
        setLeague(league[0].name);
        console.log(league);
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
        <SkeletonStandings />
      ) : (
        <StandingTable tables={tables} league={league} />
      )}
    </div>
  );
};

export default Standings;
