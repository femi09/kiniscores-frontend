import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getNextPremierLeagueFixtures } from "../services/fixturesService";
// import { formatFixturesDate } from "../utils/formatTime";

const NoFixtures = () => {
  // const [nextFixture, setNextFixture] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const getNextFixtures = async () => {
      // const { data: nextFixtures } = await getNextPremierLeagueFixtures();
      // setNextFixture(nextFixtures[0]);
      // console.log(nextFixtures[0]);
      setShow(true);
    };
    getNextFixtures();
  }, []);
  return (
    <div>
      {show && (
        <>
          <div className="text-sm font-bold sm:text-3xl sm:font-semibold text-blue-800 p-8 bg-gray-200 shadow-lg text-center xl:mx-auto">
            No Premier League fixtures today
            <div className="flex w-1/2 mx-auto justify-center items-center text-sm my-6 font-bold">
              {/* <Link to="/fixtures/next">
                Next fixtures on {formatFixturesDate(nextFixture.event_date)}
              </Link>
              <Link to="/fixtures/next">
                <img
                  className="h-4 w-4 ml-1"
                  src="./assets/icons8-right.png"
                  alt=""
                />
              </Link> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NoFixtures;
