import React, { useState, useEffect} from "react";
import axios from "axios";
import Table from "../components/Standingtable";

const Standings = () => {
  const [tables, setTables] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const {data} = await axios.get(
      "http://api.football-data.org/v2/competitions/2021/standings",
      { headers: { "X-Auth-Token": "964e10439c784972ad30aacb080af27c" } }
    );
    setTables(data.standings[0].table)
  }, [])
  return ( 
    <div>
    <div className="shadow text-gray-800 lg text-center font-bold w-2/3 mx-auto">
      <h1>Standings</h1>
    </div>
      <Table tables={tables} />
  </div>
   );
}
 
export default Standings;
 