import React, { useState, useEffect } from "react";
import femi from "../services/httpService";
import StandingTable from "../components/Standingtable";

const Standings = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const getTable = async () => {
      const {
        data,
      } = await femi.get(
        "http://api.football-data.org/v2/competitions/2021/standings",
        { headers: { "X-Auth-Token": "964e10439c784972ad30aacb080af27c" } }
      );
      setTables(data.standings[0].table);
    };

    getTable();
  }, []);
  return (
    <div>
      <StandingTable tables={tables} />
    </div>
  );
};

export default Standings;
