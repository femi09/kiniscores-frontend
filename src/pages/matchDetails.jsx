import React, { useEffect, useState } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { getFixtureDetails } from "../services/fixturesService";
import TeamsInfo from "../components/MatchDetails/TeamsInfo";
import MatchNavs from "../components/MatchDetails/MatchNavs";
import Lineups from "../components/MatchDetails/Lineups";
import HeadtoHead from "../components/MatchDetails/HeadtoHead";
import Stats from "../components/MatchDetails/Statistics";
import Events from "../components/MatchDetails/Events";
import SkeletonMatchDetails from "../components/Skeletons/MatchDetails";

const MatchDetails = () => {
  const [fixture, setFixture] = useState({});
  const [loading , setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    const getMatchDetails = async () => {
      const { data: fixture } = await getFixtureDetails(id);
      setFixture(fixture[0]);
      setLoading(false)
    };
    getMatchDetails();
  }, [id]);

  return (
    <div>
      <div className="w-2/3 mx-auto">
        {loading ?  <SkeletonMatchDetails/> : (
          <>
            
            <TeamsInfo fixture={fixture} />
            <MatchNavs id={id} />
            <Switch>
              <Route
                path={`/fixture/${id}/lineups`}
                render={(props) => <Lineups {...props} fixture={fixture} />}
              />
              <Route
                path={`/fixture/${id}/head-to-head`}
                render={(props) => <HeadtoHead {...props} fixture={fixture}/>}
              />
              <Route
                path={`/fixture/${id}/events`}
                render={(props) => <Events {...props} fixture={fixture}  />}
              />
              <Route
                path={`/fixture/${id}/stats`}
                render={(props) => <Stats {...props} fixture={fixture} />}
              />
            </Switch>
          </>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;
