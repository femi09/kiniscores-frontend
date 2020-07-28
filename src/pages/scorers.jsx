import React, { useState, useEffect } from "react";
import {footballApi} from '../config.json'
import femi from "../services/httpService";
import ScorersTable from "../components/scorersTable";

const Scorers = () => {
  const [scorers, setScorers] = useState([]);

  useEffect(() => {
    const getScorers = async () => {
      const {
        data,
      } = await femi.get(
        `${footballApi}/scorers?limit=20`,
        { headers: { "X-Auth-Token": process.env.REACT_APP_KINISCORES_API_KEY} }
      );
      setScorers(data.scorers);
    };
    getScorers();
  }, []);
  return (
    <div>
      <ScorersTable scorers={scorers} />
    </div>
  );
};

export default Scorers;
