import React, { useState, useEffect } from "react";
import femi from "../services/httpService";
import { footballApi } from "../config.json";
import StandingTable from "../components/Standingtable";

const authToken = process.env.REACT_APP_KINISCORES_API_KEY;
const Standings = () => {
  const [tables, setTables] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTable = async () => {
      const { data } = await femi.get(`${footballApi}/standings`, {
        headers: { "X-Auth-Token": authToken },
      });
      setTables(data.standings[0].table);
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
