import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/MainNavBar";
import Results from "./pages/Results";
import LeagueStandings from "./pages/Standings/LeagueStandings";
import News from "./pages/TransferNews";
import Scorers from "./pages/Scorers";
import Fixtures from "./pages/Fixtures/Today'sFixtures";
import Home from "./pages/Home";
import AdminPanel from "./pages/Admin";
import NextFixtures from "./pages/Fixtures/NextFixtures";
import LastFixtures from "./pages/Fixtures/LastFixtures";
import LeagueFixtures from "./pages/Fixtures/LeagueFixtures";
import NewsBody from "./pages/Home/NewsDetails";
import MatchDetails from "./pages/MatchDetails";
import CupStandings from "./pages/Standings/CupStandings";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/fixture/:id" component={MatchDetails} />
        <Route path="/admin" component={AdminPanel} />
        <Route path="/scorers/:league/:league_id" component={Scorers} />
        <Route path="/standings/:league/:league_id" component={LeagueStandings} />
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
        <Route path="/fixtures/:league/:league_id" component={LeagueFixtures} />
        <Route path="/fixtures" component={Fixtures} />
        <Route path="/news" component={News} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
