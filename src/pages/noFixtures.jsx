import React, { useState, useEffect } from "react";
import {Link} from  "react-router-dom";
import { getNextPremierLeagueFixtures } from "../services/fixturesService";
import { formatFixturesDate, formatCurrentDate } from "../utils";

const NoFixtures = () => {
  const [nextFixture, setNextFixture] = useState([]);
  const [show, setShow] = useState(false);
  const today = new Date();
  useEffect(() => {
    const getNextFixtures = async () => {
      const { data: nextFixtures } = await getNextPremierLeagueFixtures();
      setNextFixture(nextFixtures[0]);
      console.log(nextFixtures[0]);
      setShow(true);
    };
    getNextFixtures();
  }, []);
  return (
    <div className="mt-8">
      {show && (
        <>
          <h1 className="text-gray-800 text-left text-xl p-2 font-bold bg-yellow-500">
            {formatFixturesDate(today)}
          </h1>
          <div className="text-3xl font-semibold text-blue-800 p-8 bg-gray-200 shadow-lg text-center mx-auto">
            No Premier League fixtures today
            <p className="text-sm my-6 font-bold">
              <Link to="/fixtures/next">Next fixtures on {formatFixturesDate(nextFixture.event_date)}</Link> 
            </p>
            
          </div>
        </>
      )}
    </div>
  );
};

export default NoFixtures;
