import React from "react";
import Fixture from "../components/fixture";

const Fixtures = () => {
  return (
    <div className="w-2/3 mx-auto">
      {/* <h1 className="text-3xl font-semibold text-blue-800 p-8 bg-gray-200 shadow-lg  text-center mx-auto mt-8">
        No fixtures for the current season
      </h1> */}
      <Fixture/>
    </div>
  );
};

export default Fixtures;
