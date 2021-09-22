import React from "react";
import LeaguesDropdown from "../../shared/Dropdowns/leagues";

const NextFixturesHeader = ({league}) => {
  return (
    <div className="text-left my-4">
      <LeaguesDropdown title={`Last ${league} Fixtures`} page="fixtures/last" />
    </div>
  );
};

export default NextFixturesHeader;
