import React, { useState, useEffect } from "react";
import axios from "axios";
import Match from "./../components/match";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [currentMatchDay, setcurrentMatchDay] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const {
      data,
    } = await axios.get(
      "http://api.football-data.org/v2/competitions/2021/matches?matchday=38",
      { headers: { "X-Auth-Token": "964e10439c784972ad30aacb080af27c" } }
    );
    setMatches(data.matches);
    setcurrentMatchDay(data.matches[0].season.currentMatchday);
  }, []);

  return (
    <div className="container mx-auto bg-white w-2/3 shadow-lg">
      <div className="bg-white text-gray-800 text-center font-bold shadow-lg">
        <h1 className="">Match day {currentMatchDay + 1}</h1>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {matches.map((match) => (
          <Match key={match.id} match={match} date={formatDate} />
        ))}
      </div>
    </div>
  );
};

export default Matches;

const formatDate = (utcDate) => {
  let date = new Date(utcDate);

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let formatted_date =
    date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();

  return formatted_date;
};
