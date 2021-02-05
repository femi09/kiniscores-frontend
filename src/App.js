import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/MainNavBar";
import Sidebar from "./components/Sidebar";
import Results from "./pages/Results";
import LeagueStandings from "./pages/Standings/LeagueStandings";
import Scorers from "./pages/Scorers";
import Fixtures from "./pages/Fixtures/Today'sFixtures";
import NewsStream from "./pages/NewsStream";
import AdminPanel from "./pages/Admin";
import NextFixtures from "./pages/Fixtures/NextFixtures";
import LastFixtures from "./pages/Fixtures/LastFixtures";
import LeagueFixtures from "./pages/Fixtures/LeagueFixtures";
import NewsBody from "./pages/NewsDetails";
import MatchDetails from "./pages/MatchDetails";
import CupStandings from "./pages/Standings/CupStandings";
import Column from "./pages/Column";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Sidebar />
      <div className="app__body">
        <Switch>
          <Route path="/fixture/:id" component={MatchDetails} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/scorers/:league/:league_id" component={Scorers} />
          <Route
            path="/standings/:league/:league_id"
            component={LeagueStandings}
          />
          <Route path="/tables/:league/:league_id" component={CupStandings} />
          <Route path="/news/:id" component={NewsBody} />
          <Route path="/results/:league/:league_id" component={Results} />
          <Route
            path="/fixtures/last/:league/:league_id"
            component={LastFixtures}
          />
          <Route
            path="/fixtures/next/:league/:league_id"
            component={NextFixtures}
          />
          <Route
            path="/fixtures/:league/:league_id"
            component={LeagueFixtures}
          />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/column" component={Column} />
          <Route path="/" component={NewsStream} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
