import React from "react";
import LeaguesDropdown from "../../shared/Dropdowns/leagues";

const NextFixturesHeader = ({league}) => {
  return (
    <div className="text-left my-4">
      <LeaguesDropdown title={`Next ${league} Fixtures`} page="fixtures/next" />
    </div>
  );
};

export default NextFixturesHeader;
