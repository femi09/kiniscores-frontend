import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import TeamsInfo from "../components/MatchDetails/TeamsInfo";
import MatchNavs from "../components/MatchDetails/MatchNavs";
import Lineups from "../components/MatchDetails/Lineups";
import HeadtoHead from "../components/MatchDetails/HeadtoHead";
import Stats from "../components/MatchDetails/Statistics";
import Events from "../components/MatchDetails/Events";

const MatchDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="w-2/3 mx-auto">
        <TeamsInfo />
        <MatchNavs id={id} />
        <Switch>
          <Route path={`/fixture/${id}/lineups`} component={Lineups} />
          <Route path={`/fixture/${id}/head-to-head`} component={HeadtoHead} />
          <Route path={`/fixture/${id}/events`} component={Events} />
          <Route path={`/fixture/${id}/stats`} component={Stats} />
        </Switch>
      </div>
    </div>
  );
};

export default MatchDetails;
