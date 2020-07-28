import React, { useState, useEffect } from "react";
import femi from "../services/httpService";
import {footballApi} from '../config.json'
import StandingTable from "../components/Standingtable";

const authToken =  process.env.REACT_APP_KINISCORES_API_KEY
const Standings = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const getTable = async () => {
      const {
        data,
      } = await femi.get(
        `${footballApi}/standings`,
        { headers: { "X-Auth-Token": authToken} }
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
