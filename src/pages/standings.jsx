import React, { useState, useEffect } from "react";
import { getPremierLeagueStandings } from "../services/standingsService";
import StandingTable from "../components/Standingtable";

const Standings = () => {
  const [tables, setTables] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTable = async () => {
      const { data: standings } = await getPremierLeagueStandings()
      setTables(standings[0].table);
      setIsLoading(false);
    };

    getTable();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="font-bold p-8 bg-white text-center text-2xl text-blue-700">
          <h1>Loading Table...</h1>
        </div>
      ) : (
        <StandingTable tables={tables} />
      )}
    </div>
  );
};

export default Standings;
